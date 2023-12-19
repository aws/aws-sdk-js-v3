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

import { DBRecommendationMessage, ModifyDBRecommendationMessage } from "../models/models_1";
import { de_ModifyDBRecommendationCommand, se_ModifyDBRecommendationCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBRecommendationCommand}.
 */
export interface ModifyDBRecommendationCommandInput extends ModifyDBRecommendationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBRecommendationCommand}.
 */
export interface ModifyDBRecommendationCommandOutput extends DBRecommendationMessage, __MetadataBearer {}

/**
 * @public
 * <p>Updates the recommendation status and recommended action status for the specified recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBRecommendationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBRecommendationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBRecommendationMessage
 *   RecommendationId: "STRING_VALUE", // required
 *   Locale: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   RecommendedActionUpdates: [ // RecommendedActionUpdateList
 *     { // RecommendedActionUpdate
 *       ActionId: "STRING_VALUE", // required
 *       Status: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ModifyDBRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DBRecommendationMessage
 * //   DBRecommendation: { // DBRecommendation
 * //     RecommendationId: "STRING_VALUE",
 * //     TypeId: "STRING_VALUE",
 * //     Severity: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     Detection: "STRING_VALUE",
 * //     Recommendation: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Reason: "STRING_VALUE",
 * //     RecommendedActions: [ // RecommendedActionList
 * //       { // RecommendedAction
 * //         ActionId: "STRING_VALUE",
 * //         Title: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Operation: "STRING_VALUE",
 * //         Parameters: [ // RecommendedActionParameterList
 * //           { // RecommendedActionParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ApplyModes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         Status: "STRING_VALUE",
 * //         IssueDetails: { // IssueDetails
 * //           PerformanceIssueDetails: { // PerformanceIssueDetails
 * //             StartTime: new Date("TIMESTAMP"),
 * //             EndTime: new Date("TIMESTAMP"),
 * //             Metrics: [ // MetricList
 * //               { // Metric
 * //                 Name: "STRING_VALUE",
 * //                 References: [ // MetricReferenceList
 * //                   { // MetricReference
 * //                     Name: "STRING_VALUE",
 * //                     ReferenceDetails: { // ReferenceDetails
 * //                       ScalarReferenceDetails: { // ScalarReferenceDetails
 * //                         Value: Number("double"),
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //                 StatisticsDetails: "STRING_VALUE",
 * //                 MetricQuery: { // MetricQuery
 * //                   PerformanceInsightsMetricQuery: { // PerformanceInsightsMetricQuery
 * //                     GroupBy: { // PerformanceInsightsMetricDimensionGroup
 * //                       Dimensions: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       Group: "STRING_VALUE",
 * //                       Limit: Number("int"),
 * //                     },
 * //                     Metric: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             Analysis: "STRING_VALUE",
 * //           },
 * //         },
 * //         ContextAttributes: [ // ContextAttributeList
 * //           { // ContextAttribute
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Category: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     TypeDetection: "STRING_VALUE",
 * //     TypeRecommendation: "STRING_VALUE",
 * //     Impact: "STRING_VALUE",
 * //     AdditionalInfo: "STRING_VALUE",
 * //     Links: [ // DocLinkList
 * //       { // DocLink
 * //         Text: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IssueDetails: {
 * //       PerformanceIssueDetails: {
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //         Metrics: [
 * //           {
 * //             Name: "STRING_VALUE",
 * //             References: [
 * //               {
 * //                 Name: "STRING_VALUE",
 * //                 ReferenceDetails: {
 * //                   ScalarReferenceDetails: {
 * //                     Value: Number("double"),
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             StatisticsDetails: "STRING_VALUE",
 * //             MetricQuery: {
 * //               PerformanceInsightsMetricQuery: {
 * //                 GroupBy: {
 * //                   Dimensions: "<StringList>",
 * //                   Group: "STRING_VALUE",
 * //                   Limit: Number("int"),
 * //                 },
 * //                 Metric: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         Analysis: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBRecommendationCommandInput - {@link ModifyDBRecommendationCommandInput}
 * @returns {@link ModifyDBRecommendationCommandOutput}
 * @see {@link ModifyDBRecommendationCommandInput} for command's `input` shape.
 * @see {@link ModifyDBRecommendationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyDBRecommendationCommand extends $Command<
  ModifyDBRecommendationCommandInput,
  ModifyDBRecommendationCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyDBRecommendationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBRecommendationCommandInput, ModifyDBRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBRecommendation",
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
  private serialize(input: ModifyDBRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBRecommendationCommandOutput> {
    return de_ModifyDBRecommendationCommand(output, context);
  }
}
