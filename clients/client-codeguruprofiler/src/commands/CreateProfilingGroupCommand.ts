// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  CreateProfilingGroupRequest,
  CreateProfilingGroupRequestFilterSensitiveLog,
  CreateProfilingGroupResponse,
  CreateProfilingGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateProfilingGroupCommand,
  serializeAws_restJson1CreateProfilingGroupCommand,
} from "../protocols/Aws_restJson1";

export interface CreateProfilingGroupCommandInput extends CreateProfilingGroupRequest {}
export interface CreateProfilingGroupCommandOutput extends CreateProfilingGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, CreateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, CreateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new CreateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class CreateProfilingGroupCommand extends $Command<
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateProfilingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProfilingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "CreateProfilingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProfilingGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProfilingGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProfilingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateProfilingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProfilingGroupCommandOutput> {
    return deserializeAws_restJson1CreateProfilingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
