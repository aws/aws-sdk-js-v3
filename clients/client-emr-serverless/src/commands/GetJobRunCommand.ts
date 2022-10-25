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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import {
  GetJobRunRequest,
  GetJobRunRequestFilterSensitiveLog,
  GetJobRunResponse,
  GetJobRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetJobRunCommand,
  serializeAws_restJson1GetJobRunCommand,
} from "../protocols/Aws_restJson1";

export interface GetJobRunCommandInput extends GetJobRunRequest {}
export interface GetJobRunCommandOutput extends GetJobRunResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 */
export class GetJobRunCommand extends $Command<
  GetJobRunCommandInput,
  GetJobRunCommandOutput,
  EMRServerlessClientResolvedConfig
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

  constructor(readonly input: GetJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobRunCommandInput, GetJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "GetJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetJobRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobRunCommandOutput> {
    return deserializeAws_restJson1GetJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
