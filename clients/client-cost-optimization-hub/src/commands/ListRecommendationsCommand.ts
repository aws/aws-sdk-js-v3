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
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { de_ListRecommendationsCommand, se_ListRecommendationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListRecommendationsCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListRecommendationsCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListRecommendationsRequest
 *   filter: { // Filter
 *     restartNeeded: true || false,
 *     rollbackPossible: true || false,
 *     implementationEfforts: [ // ImplementationEffortList
 *       "VeryLow" || "Low" || "Medium" || "High" || "VeryHigh",
 *     ],
 *     accountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *     resourceTypes: [ // ResourceTypeList
 *       "Ec2Instance" || "LambdaFunction" || "EbsVolume" || "EcsService" || "Ec2AutoScalingGroup" || "Ec2InstanceSavingsPlans" || "ComputeSavingsPlans" || "SageMakerSavingsPlans" || "Ec2ReservedInstances" || "RdsReservedInstances" || "OpenSearchReservedInstances" || "RedshiftReservedInstances" || "ElastiCacheReservedInstances",
 *     ],
 *     actionTypes: [ // ActionTypeList
 *       "Rightsize" || "Stop" || "Upgrade" || "PurchaseSavingsPlans" || "PurchaseReservedInstances" || "MigrateToGraviton",
 *     ],
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     resourceIds: [ // ResourceIdList
 *       "STRING_VALUE",
 *     ],
 *     resourceArns: [ // ResourceArnList
 *       "STRING_VALUE",
 *     ],
 *     recommendationIds: [ // RecommendationIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   orderBy: { // OrderBy
 *     dimension: "STRING_VALUE",
 *     order: "Asc" || "Desc",
 *   },
 *   includeAllRecommendations: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   items: [ // RecommendationList
 * //     { // Recommendation
 * //       recommendationId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       currentResourceType: "STRING_VALUE",
 * //       recommendedResourceType: "STRING_VALUE",
 * //       estimatedMonthlySavings: Number("double"),
 * //       estimatedSavingsPercentage: Number("double"),
 * //       estimatedMonthlyCost: Number("double"),
 * //       currencyCode: "STRING_VALUE",
 * //       implementationEffort: "STRING_VALUE",
 * //       restartNeeded: true || false,
 * //       actionType: "STRING_VALUE",
 * //       rollbackPossible: true || false,
 * //       currentResourceSummary: "STRING_VALUE",
 * //       recommendedResourceSummary: "STRING_VALUE",
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       recommendationLookbackPeriodInDays: Number("int"),
 * //       source: "ComputeOptimizer" || "CostExplorer",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 */
export class ListRecommendationsCommand extends $Command<
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
  CostOptimizationHubClientResolvedConfig
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
  constructor(readonly input: ListRecommendationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostOptimizationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationsCommandInput, ListRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostOptimizationHubClient";
    const commandName = "ListRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CostOptimizationHubService",
        operation: "ListRecommendations",
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
  private serialize(input: ListRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecommendationsCommandOutput> {
    return de_ListRecommendationsCommand(output, context);
  }
}
