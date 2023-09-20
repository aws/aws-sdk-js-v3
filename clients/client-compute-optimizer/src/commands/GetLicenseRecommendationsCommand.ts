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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetLicenseRecommendationsRequest, GetLicenseRecommendationsResponse } from "../models/models_0";
import { de_GetLicenseRecommendationsCommand, se_GetLicenseRecommendationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLicenseRecommendationsCommand}.
 */
export interface GetLicenseRecommendationsCommandInput extends GetLicenseRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseRecommendationsCommand}.
 */
export interface GetLicenseRecommendationsCommandOutput extends GetLicenseRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns license recommendations for Amazon EC2 instances that run on a specific license.</p>
 *          <p>Compute Optimizer generates recommendations for licenses that meet a specific set of requirements. For more
 *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLicenseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLicenseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetLicenseRecommendationsRequest
 *   resourceArns: [ // ResourceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // LicenseRecommendationFilters
 *     { // LicenseRecommendationFilter
 *       name: "Finding" || "FindingReasonCode" || "LicenseName",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetLicenseRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   licenseRecommendations: [ // LicenseRecommendations
 * //     { // LicenseRecommendation
 * //       resourceArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentLicenseConfiguration: { // LicenseConfiguration
 * //         numberOfCores: Number("int"),
 * //         instanceType: "STRING_VALUE",
 * //         operatingSystem: "STRING_VALUE",
 * //         licenseEdition: "Enterprise" || "Standard" || "Free" || "NoLicenseEditionFound",
 * //         licenseName: "SQLServer",
 * //         licenseModel: "LicenseIncluded" || "BringYourOwnLicense",
 * //         licenseVersion: "STRING_VALUE",
 * //         metricsSource: [ // MetricsSource
 * //           { // MetricSource
 * //             provider: "CloudWatchApplicationInsights",
 * //             providerArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       lookbackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       finding: "InsufficientMetrics" || "Optimized" || "NotOptimized",
 * //       findingReasonCodes: [ // LicenseFindingReasonCodes
 * //         "InvalidCloudWatchApplicationInsightsSetup" || "CloudWatchApplicationInsightsError" || "LicenseOverprovisioned" || "Optimized",
 * //       ],
 * //       licenseRecommendationOptions: [ // LicenseRecommendationOptions
 * //         { // LicenseRecommendationOption
 * //           rank: Number("int"),
 * //           operatingSystem: "STRING_VALUE",
 * //           licenseEdition: "Enterprise" || "Standard" || "Free" || "NoLicenseEditionFound",
 * //           licenseModel: "LicenseIncluded" || "BringYourOwnLicense",
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // GetRecommendationErrors
 * //     { // GetRecommendationError
 * //       identifier: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLicenseRecommendationsCommandInput - {@link GetLicenseRecommendationsCommandInput}
 * @returns {@link GetLicenseRecommendationsCommandOutput}
 * @see {@link GetLicenseRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLicenseRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 */
export class GetLicenseRecommendationsCommand extends $Command<
  GetLicenseRecommendationsCommandInput,
  GetLicenseRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
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
  constructor(readonly input: GetLicenseRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLicenseRecommendationsCommandInput, GetLicenseRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLicenseRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetLicenseRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComputeOptimizerService",
        operation: "GetLicenseRecommendations",
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
  private serialize(input: GetLicenseRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLicenseRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLicenseRecommendationsCommandOutput> {
    return de_GetLicenseRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
