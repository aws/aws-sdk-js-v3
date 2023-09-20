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

import { DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse } from "../models/models_0";
import { de_DescribeSeverityLevelsCommand, se_DescribeSeverityLevelsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSeverityLevelsCommand}.
 */
export interface DescribeSeverityLevelsCommandInput extends DescribeSeverityLevelsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSeverityLevelsCommand}.
 */
export interface DescribeSeverityLevelsCommandOutput extends DescribeSeverityLevelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the list of severity levels that you can assign to a support case. The
 *             severity level for a case is also a field in the <a>CaseDetails</a> data type
 *             that you include for a <a>CreateCase</a> request.</p>
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
 * import { SupportClient, DescribeSeverityLevelsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeSeverityLevelsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeSeverityLevelsRequest
 *   language: "STRING_VALUE",
 * };
 * const command = new DescribeSeverityLevelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSeverityLevelsResponse
 * //   severityLevels: [ // SeverityLevelsList
 * //     { // SeverityLevel
 * //       code: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSeverityLevelsCommandInput - {@link DescribeSeverityLevelsCommandInput}
 * @returns {@link DescribeSeverityLevelsCommandOutput}
 * @see {@link DescribeSeverityLevelsCommandInput} for command's `input` shape.
 * @see {@link DescribeSeverityLevelsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 */
export class DescribeSeverityLevelsCommand extends $Command<
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
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
  constructor(readonly input: DescribeSeverityLevelsCommandInput) {
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
  ): Handler<DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSeverityLevelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeSeverityLevelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "DescribeSeverityLevels",
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
  private serialize(input: DescribeSeverityLevelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSeverityLevelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSeverityLevelsCommandOutput> {
    return de_DescribeSeverityLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
