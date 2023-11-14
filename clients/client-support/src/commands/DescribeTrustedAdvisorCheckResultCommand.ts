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

import {
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
} from "../models/models_0";
import {
  de_DescribeTrustedAdvisorCheckResultCommand,
  se_DescribeTrustedAdvisorCheckResultCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorCheckResultCommand}.
 */
export interface DescribeTrustedAdvisorCheckResultCommandInput extends DescribeTrustedAdvisorCheckResultRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorCheckResultCommand}.
 */
export interface DescribeTrustedAdvisorCheckResultCommandOutput
  extends DescribeTrustedAdvisorCheckResultResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the results of the Trusted Advisor check that has the specified check ID. You
 *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
 *             contains these three objects:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorCategorySpecificSummary</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorResourceDetail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorResourcesSummary</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>In addition, the response contains these fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>status</b> - The alert status of the check
 *                     can be <code>ok</code> (green), <code>warning</code> (yellow),
 *                         <code>error</code> (red), or <code>not_available</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>timestamp</b> - The time of the last refresh
 *                     of the check.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>checkId</b> - The unique identifier for the
 *                     check.</p>
 *             </li>
 *          </ul>
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
 *          <p>To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support
 * API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckResultCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckResultCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeTrustedAdvisorCheckResultRequest
 *   checkId: "STRING_VALUE", // required
 *   language: "STRING_VALUE",
 * };
 * const command = new DescribeTrustedAdvisorCheckResultCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedAdvisorCheckResultResponse
 * //   result: { // TrustedAdvisorCheckResult
 * //     checkId: "STRING_VALUE", // required
 * //     timestamp: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     resourcesSummary: { // TrustedAdvisorResourcesSummary
 * //       resourcesProcessed: Number("long"), // required
 * //       resourcesFlagged: Number("long"), // required
 * //       resourcesIgnored: Number("long"), // required
 * //       resourcesSuppressed: Number("long"), // required
 * //     },
 * //     categorySpecificSummary: { // TrustedAdvisorCategorySpecificSummary
 * //       costOptimizing: { // TrustedAdvisorCostOptimizingSummary
 * //         estimatedMonthlySavings: Number("double"), // required
 * //         estimatedPercentMonthlySavings: Number("double"), // required
 * //       },
 * //     },
 * //     flaggedResources: [ // TrustedAdvisorResourceDetailList // required
 * //       { // TrustedAdvisorResourceDetail
 * //         status: "STRING_VALUE", // required
 * //         region: "STRING_VALUE",
 * //         resourceId: "STRING_VALUE", // required
 * //         isSuppressed: true || false,
 * //         metadata: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrustedAdvisorCheckResultCommandInput - {@link DescribeTrustedAdvisorCheckResultCommandInput}
 * @returns {@link DescribeTrustedAdvisorCheckResultCommandOutput}
 * @see {@link DescribeTrustedAdvisorCheckResultCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckResultCommandOutput} for command's `response` shape.
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
export class DescribeTrustedAdvisorCheckResultCommand extends $Command<
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
  SupportClientResolvedConfig
> {
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
  constructor(readonly input: DescribeTrustedAdvisorCheckResultCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrustedAdvisorCheckResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeTrustedAdvisorCheckResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "DescribeTrustedAdvisorCheckResult",
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
  private serialize(
    input: DescribeTrustedAdvisorCheckResultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTrustedAdvisorCheckResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> {
    return de_DescribeTrustedAdvisorCheckResultCommand(output, context);
  }
}
