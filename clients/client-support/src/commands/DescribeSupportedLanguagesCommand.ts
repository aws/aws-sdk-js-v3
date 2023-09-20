// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse } from "../models/models_0";
import { de_DescribeSupportedLanguagesCommand, se_DescribeSupportedLanguagesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSupportedLanguagesCommand}.
 */
export interface DescribeSupportedLanguagesCommandInput extends DescribeSupportedLanguagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSupportedLanguagesCommand}.
 */
export interface DescribeSupportedLanguagesCommandOutput extends DescribeSupportedLanguagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of supported languages for a specified <code>categoryCode</code>,
 *         <code>issueType</code> and <code>serviceCode</code>. The returned supported languages will
 *         include a ISO 639-1 code for the <code>language</code>, and the language display name.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeSupportedLanguagesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeSupportedLanguagesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeSupportedLanguagesRequest
 *   issueType: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE", // required
 *   categoryCode: "STRING_VALUE", // required
 * };
 * const command = new DescribeSupportedLanguagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSupportedLanguagesResponse
 * //   supportedLanguages: [ // SupportedLanguagesList
 * //     { // SupportedLanguage
 * //       code: "STRING_VALUE",
 * //       language: "STRING_VALUE",
 * //       display: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSupportedLanguagesCommandInput - {@link DescribeSupportedLanguagesCommandInput}
 * @returns {@link DescribeSupportedLanguagesCommandOutput}
 * @see {@link DescribeSupportedLanguagesCommandInput} for command's `input` shape.
 * @see {@link DescribeSupportedLanguagesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *         </p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 */
export class DescribeSupportedLanguagesCommand extends $Command<
  DescribeSupportedLanguagesCommandInput,
  DescribeSupportedLanguagesCommandOutput,
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
  constructor(readonly input: DescribeSupportedLanguagesCommandInput) {
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
  ): Handler<DescribeSupportedLanguagesCommandInput, DescribeSupportedLanguagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSupportedLanguagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeSupportedLanguagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "DescribeSupportedLanguages",
      },
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
  private serialize(input: DescribeSupportedLanguagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSupportedLanguagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSupportedLanguagesCommandOutput> {
    return de_DescribeSupportedLanguagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
