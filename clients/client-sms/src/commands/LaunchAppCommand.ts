import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { LaunchAppRequest, LaunchAppResponse } from "../models/models_0";
import { deserializeAws_json1_1LaunchAppCommand, serializeAws_json1_1LaunchAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface LaunchAppCommandInput extends LaunchAppRequest {}
export interface LaunchAppCommandOutput extends LaunchAppResponse, __MetadataBearer {}

/**
 * <p>Launches the specified application as a stack in AWS CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, LaunchAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, LaunchAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new LaunchAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LaunchAppCommandInput} for command's `input` shape.
 * @see {@link LaunchAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class LaunchAppCommand extends $Command<LaunchAppCommandInput, LaunchAppCommandOutput, SMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LaunchAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LaunchAppCommandInput, LaunchAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "LaunchAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LaunchAppRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LaunchAppResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LaunchAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1LaunchAppCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LaunchAppCommandOutput> {
    return deserializeAws_json1_1LaunchAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
