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

import {
  GetPerformanceAnalysisReportRequest,
  GetPerformanceAnalysisReportResponse,
  GetPerformanceAnalysisReportResponseFilterSensitiveLog,
} from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_GetPerformanceAnalysisReportCommand,
  se_GetPerformanceAnalysisReportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPerformanceAnalysisReportCommand}.
 */
export interface GetPerformanceAnalysisReportCommandInput extends GetPerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link GetPerformanceAnalysisReportCommand}.
 */
export interface GetPerformanceAnalysisReportCommandOutput
  extends GetPerformanceAnalysisReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the report including the report ID, status, time details, and the insights
 *             with recommendations. The report status can be <code>RUNNING</code>,
 *             <code>SUCCEEDED</code>, or <code>FAILED</code>. The insights include the
 *             <code>description</code> and <code>recommendation</code> fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetPerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetPerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // GetPerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 *   TextFormat: "PLAIN_TEXT" || "MARKDOWN",
 *   AcceptLanguage: "EN_US",
 * };
 * const command = new GetPerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // { // GetPerformanceAnalysisReportResponse
 * //   AnalysisReport: { // AnalysisReport
 * //     AnalysisReportId: "STRING_VALUE", // required
 * //     Identifier: "STRING_VALUE",
 * //     ServiceType: "RDS" || "DOCDB",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //     Insights: [ // InsightList
 * //       { // Insight
 * //         InsightId: "STRING_VALUE", // required
 * //         InsightType: "STRING_VALUE",
 * //         Context: "CAUSAL" || "CONTEXTUAL",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //         Severity: "LOW" || "MEDIUM" || "HIGH",
 * //         SupportingInsights: [
 * //           {
 * //             InsightId: "STRING_VALUE", // required
 * //             InsightType: "STRING_VALUE",
 * //             Context: "CAUSAL" || "CONTEXTUAL",
 * //             StartTime: new Date("TIMESTAMP"),
 * //             EndTime: new Date("TIMESTAMP"),
 * //             Severity: "LOW" || "MEDIUM" || "HIGH",
 * //             SupportingInsights: "<InsightList>",
 * //             Description: "STRING_VALUE",
 * //             Recommendations: [ // RecommendationList
 * //               { // Recommendation
 * //                 RecommendationId: "STRING_VALUE",
 * //                 RecommendationDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //             InsightData: [ // DataList
 * //               { // Data
 * //                 PerformanceInsightsMetric: { // PerformanceInsightsMetric
 * //                   Metric: "STRING_VALUE",
 * //                   DisplayName: "STRING_VALUE",
 * //                   Dimensions: { // DescriptiveMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Value: Number("double"),
 * //                 },
 * //               },
 * //             ],
 * //             BaselineData: [
 * //               {
 * //                 PerformanceInsightsMetric: {
 * //                   Metric: "STRING_VALUE",
 * //                   DisplayName: "STRING_VALUE",
 * //                   Dimensions: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   Value: Number("double"),
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Description: "STRING_VALUE",
 * //         Recommendations: [
 * //           {
 * //             RecommendationId: "STRING_VALUE",
 * //             RecommendationDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         InsightData: [
 * //           {
 * //             PerformanceInsightsMetric: {
 * //               Metric: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //               Dimensions: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               Value: Number("double"),
 * //             },
 * //           },
 * //         ],
 * //         BaselineData: [
 * //           {
 * //             PerformanceInsightsMetric: {
 * //               Metric: "STRING_VALUE",
 * //               DisplayName: "STRING_VALUE",
 * //               Dimensions: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               Value: Number("double"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPerformanceAnalysisReportCommandInput - {@link GetPerformanceAnalysisReportCommandInput}
 * @returns {@link GetPerformanceAnalysisReportCommandOutput}
 * @see {@link GetPerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link GetPerformanceAnalysisReportCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class GetPerformanceAnalysisReportCommand extends $Command<
  GetPerformanceAnalysisReportCommandInput,
  GetPerformanceAnalysisReportCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: GetPerformanceAnalysisReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPerformanceAnalysisReportCommandInput, GetPerformanceAnalysisReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPerformanceAnalysisReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetPerformanceAnalysisReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPerformanceAnalysisReportResponseFilterSensitiveLog,
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
  private serialize(input: GetPerformanceAnalysisReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPerformanceAnalysisReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPerformanceAnalysisReportCommandOutput> {
    return de_GetPerformanceAnalysisReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
