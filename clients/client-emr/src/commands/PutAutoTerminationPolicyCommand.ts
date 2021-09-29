import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutAutoTerminationPolicyInput, PutAutoTerminationPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutAutoTerminationPolicyCommand,
  serializeAws_json1_1PutAutoTerminationPolicyCommand,
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

export interface PutAutoTerminationPolicyCommandInput extends PutAutoTerminationPolicyInput {}
export interface PutAutoTerminationPolicyCommandOutput extends PutAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAutoTerminationPolicyCommand extends $Command<
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAutoTerminationPolicyCommandInput) {
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
  ): Handler<PutAutoTerminationPolicyCommandInput, PutAutoTerminationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutAutoTerminationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAutoTerminationPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutAutoTerminationPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAutoTerminationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAutoTerminationPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAutoTerminationPolicyCommandOutput> {
    return deserializeAws_json1_1PutAutoTerminationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
