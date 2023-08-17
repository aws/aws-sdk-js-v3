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
} from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import { de_GetRecommendationSummariesCommand, se_GetRecommendationSummariesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationSummariesCommand}.
 */
export interface GetRecommendationSummariesCommandInput extends GetRecommendationSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationSummariesCommand}.
 */
export interface GetRecommendationSummariesCommandOutput extends GetRecommendationSummariesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the optimization findings for an account.</p>
 *          <p>It returns the number of:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2 instances in an account that are
 *                         <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>,
 *                     or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Lambda functions in an account that are <code>NotOptimized</code>,
 *                     or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon ECS services in an account that are <code>Underprovisioned</code>,
 *                     <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetRecommendationSummariesRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationSummariesResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationSummaries: [ // RecommendationSummaries
 * //     { // RecommendationSummary
 * //       summaries: [ // Summaries
 * //         { // Summary
 * //           name: "Underprovisioned" || "Overprovisioned" || "Optimized" || "NotOptimized",
 * //           value: Number("double"),
 * //           reasonCodeSummaries: [ // ReasonCodeSummaries
 * //             { // ReasonCodeSummary
 * //               name: "MemoryOverprovisioned" || "MemoryUnderprovisioned",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       recommendationResourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "EcsService",
 * //       accountId: "STRING_VALUE",
 * //       savingsOpportunity: { // SavingsOpportunity
 * //         savingsOpportunityPercentage: Number("double"),
 * //         estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //           currency: "USD" || "CNY",
 * //           value: Number("double"),
 * //         },
 * //       },
 * //       currentPerformanceRiskRatings: { // CurrentPerformanceRiskRatings
 * //         high: Number("long"),
 * //         medium: Number("long"),
 * //         low: Number("long"),
 * //         veryLow: Number("long"),
 * //       },
 * //       inferredWorkloadSavings: [ // InferredWorkloadSavings
 * //         { // InferredWorkloadSaving
 * //           inferredWorkloadTypes: [ // InferredWorkloadTypes
 * //             "AmazonEmr" || "ApacheCassandra" || "ApacheHadoop" || "Memcached" || "Nginx" || "PostgreSql" || "Redis" || "Kafka" || "SQLServer",
 * //           ],
 * //           estimatedMonthlySavings: {
 * //             currency: "USD" || "CNY",
 * //             value: Number("double"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationSummariesCommandInput - {@link GetRecommendationSummariesCommandInput}
 * @returns {@link GetRecommendationSummariesCommandOutput}
 * @see {@link GetRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationSummariesCommandOutput} for command's `response` shape.
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
export class GetRecommendationSummariesCommand extends $Command<
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
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
  constructor(readonly input: GetRecommendationSummariesCommandInput) {
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
  ): Handler<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetRecommendationSummariesCommand";
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
  private serialize(input: GetRecommendationSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecommendationSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommendationSummariesCommandOutput> {
    return de_GetRecommendationSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
