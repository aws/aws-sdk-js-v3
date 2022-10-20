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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  UpdateEventSourcesConfigRequest,
  UpdateEventSourcesConfigRequestFilterSensitiveLog,
  UpdateEventSourcesConfigResponse,
  UpdateEventSourcesConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEventSourcesConfigCommand,
  serializeAws_restJson1UpdateEventSourcesConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateEventSourcesConfigCommandInput extends UpdateEventSourcesConfigRequest {}
export interface UpdateEventSourcesConfigCommandOutput extends UpdateEventSourcesConfigResponse, __MetadataBearer {}

/**
 * <p>Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * 			one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which
 * 			can produce proactive recommendations which can be stored and viewed in DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new UpdateEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourcesConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class UpdateEventSourcesConfigCommand extends $Command<
  UpdateEventSourcesConfigCommandInput,
  UpdateEventSourcesConfigCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: UpdateEventSourcesConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEventSourcesConfigCommandInput, UpdateEventSourcesConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEventSourcesConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "UpdateEventSourcesConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEventSourcesConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEventSourcesConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEventSourcesConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEventSourcesConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventSourcesConfigCommandOutput> {
    return deserializeAws_restJson1UpdateEventSourcesConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
