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

import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand,
  serializeAws_json1_1DescribeTrustedAdvisorChecksCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorChecksCommand}.
 */
export interface DescribeTrustedAdvisorChecksCommandInput extends DescribeTrustedAdvisorChecksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorChecksCommand}.
 */
export interface DescribeTrustedAdvisorChecksCommandOutput
  extends DescribeTrustedAdvisorChecksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all available Trusted Advisor checks, including the name, ID,
 *             category, description, and metadata. You must specify a language code.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for
 *             each check. You must set the Amazon Web Services Region to us-east-1.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error
 *                         message appears. For information about changing your support plan, see
 *                             <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *                <li>
 *                   <p>The names and descriptions for Trusted Advisor checks are subject to change. We
 *                         recommend that you specify the check ID in your code to uniquely identify a
 *                         check.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support
 * API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorChecksCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorChecksCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = {
 *   language: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrustedAdvisorChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTrustedAdvisorChecksCommandInput - {@link DescribeTrustedAdvisorChecksCommandInput}
 * @returns {@link DescribeTrustedAdvisorChecksCommandOutput}
 * @see {@link DescribeTrustedAdvisorChecksCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorChecksCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 *
 */
export class DescribeTrustedAdvisorChecksCommand extends $Command<
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
  SupportClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DescribeTrustedAdvisorChecksCommandInput) {
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
  ): Handler<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrustedAdvisorChecksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeTrustedAdvisorChecksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeTrustedAdvisorChecksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrustedAdvisorChecksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput> {
    return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
