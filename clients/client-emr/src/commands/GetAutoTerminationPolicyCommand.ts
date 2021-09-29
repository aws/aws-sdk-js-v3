import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetAutoTerminationPolicyInput, GetAutoTerminationPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetAutoTerminationPolicyCommand,
  serializeAws_json1_1GetAutoTerminationPolicyCommand,
} from "../protocols/Aws_json1_1";
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

export interface GetAutoTerminationPolicyCommandInput extends GetAutoTerminationPolicyInput {}
export interface GetAutoTerminationPolicyCommandOutput extends GetAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the auto-termination policy for an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAutoTerminationPolicyCommand extends $Command<
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAutoTerminationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAutoTerminationPolicyCommandInput, GetAutoTerminationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetAutoTerminationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAutoTerminationPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetAutoTerminationPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAutoTerminationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAutoTerminationPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAutoTerminationPolicyCommandOutput> {
    return deserializeAws_json1_1GetAutoTerminationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
