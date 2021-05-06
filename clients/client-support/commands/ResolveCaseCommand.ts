import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { ResolveCaseRequest, ResolveCaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ResolveCaseCommand,
  serializeAws_json1_1ResolveCaseCommand,
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

export interface ResolveCaseCommandInput extends ResolveCaseRequest {}
export interface ResolveCaseCommandOutput extends ResolveCaseResponse, __MetadataBearer {}

/**
 * <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the
 *             initial and final state of the case.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, ResolveCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, ResolveCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new ResolveCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCaseCommandInput} for command's `input` shape.
 * @see {@link ResolveCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResolveCaseCommand extends $Command<
  ResolveCaseCommandInput,
  ResolveCaseCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveCaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveCaseCommandInput, ResolveCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "ResolveCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveCaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveCaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveCaseCommandOutput> {
    return deserializeAws_json1_1ResolveCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
