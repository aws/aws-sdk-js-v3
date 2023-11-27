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
import { ListRecommendationSummariesRequest, ListRecommendationSummariesResponse } from "../models/models_0";
import { de_ListRecommendationSummariesCommand, se_ListRecommendationSummariesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationSummariesCommand}.
 */
export interface ListRecommendationSummariesCommandInput extends ListRecommendationSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationSummariesCommand}.
 */
export interface ListRecommendationSummariesCommandOutput
  extends ListRecommendationSummariesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a concise representation of savings estimates for resources. Also returns de-duped
 *       savings across different types of recommendations.</p>
 *          <note>
 *             <p>The following filters are not supported for this API: <code>recommendationIds</code>,
 *           <code>resourceArns</code>, and <code>resourceIds</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListRecommendationSummariesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListRecommendationSummariesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListRecommendationSummariesRequest
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
 *   groupBy: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationSummariesResponse
 * //   estimatedTotalDedupedSavings: Number("double"),
 * //   items: [ // RecommendationSummariesList
 * //     { // RecommendationSummary
 * //       group: "STRING_VALUE",
 * //       estimatedMonthlySavings: Number("double"),
 * //       recommendationCount: Number("int"),
 * //     },
 * //   ],
 * //   groupBy: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationSummariesCommandInput - {@link ListRecommendationSummariesCommandInput}
 * @returns {@link ListRecommendationSummariesCommandOutput}
 * @see {@link ListRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationSummariesCommandOutput} for command's `response` shape.
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
export class ListRecommendationSummariesCommand extends $Command<
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput,
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
  constructor(readonly input: ListRecommendationSummariesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostOptimizationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationSummariesCommandInput, ListRecommendationSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostOptimizationHubClient";
    const commandName = "ListRecommendationSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CostOptimizationHubService",
        operation: "ListRecommendationSummaries",
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
  private serialize(input: ListRecommendationSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendationSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecommendationSummariesCommandOutput> {
    return de_ListRecommendationSummariesCommand(output, context);
  }
}
