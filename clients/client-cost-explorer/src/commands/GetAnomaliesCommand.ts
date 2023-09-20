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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomaliesRequest, GetAnomaliesResponse } from "../models/models_0";
import { de_GetAnomaliesCommand, se_GetAnomaliesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAnomaliesCommand}.
 */
export interface GetAnomaliesCommandInput extends GetAnomaliesRequest {}
/**
 * @public
 *
 * The output of {@link GetAnomaliesCommand}.
 */
export interface GetAnomaliesCommandOutput extends GetAnomaliesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all of the cost anomalies detected on your account during the time period that's
 *       specified by the <code>DateInterval</code> object. Anomalies are available for up to 90
 *       days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomaliesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomaliesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetAnomaliesRequest
 *   MonitorArn: "STRING_VALUE",
 *   DateInterval: { // AnomalyDateInterval
 *     StartDate: "STRING_VALUE", // required
 *     EndDate: "STRING_VALUE",
 *   },
 *   Feedback: "YES" || "NO" || "PLANNED_ACTIVITY",
 *   TotalImpact: { // TotalImpactFilter
 *     NumericOperator: "EQUAL" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "BETWEEN", // required
 *     StartValue: Number("double"), // required
 *     EndValue: Number("double"),
 *   },
 *   NextPageToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAnomaliesCommand(input);
 * const response = await client.send(command);
 * // { // GetAnomaliesResponse
 * //   Anomalies: [ // Anomalies // required
 * //     { // Anomaly
 * //       AnomalyId: "STRING_VALUE", // required
 * //       AnomalyStartDate: "STRING_VALUE",
 * //       AnomalyEndDate: "STRING_VALUE",
 * //       DimensionValue: "STRING_VALUE",
 * //       RootCauses: [ // RootCauses
 * //         { // RootCause
 * //           Service: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           LinkedAccount: "STRING_VALUE",
 * //           UsageType: "STRING_VALUE",
 * //           LinkedAccountName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AnomalyScore: { // AnomalyScore
 * //         MaxScore: Number("double"), // required
 * //         CurrentScore: Number("double"), // required
 * //       },
 * //       Impact: { // Impact
 * //         MaxImpact: Number("double"), // required
 * //         TotalImpact: Number("double"),
 * //         TotalActualSpend: Number("double"),
 * //         TotalExpectedSpend: Number("double"),
 * //         TotalImpactPercentage: Number("double"),
 * //       },
 * //       MonitorArn: "STRING_VALUE", // required
 * //       Feedback: "YES" || "NO" || "PLANNED_ACTIVITY",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAnomaliesCommandInput - {@link GetAnomaliesCommandInput}
 * @returns {@link GetAnomaliesCommandOutput}
 * @see {@link GetAnomaliesCommandInput} for command's `input` shape.
 * @see {@link GetAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class GetAnomaliesCommand extends $Command<
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: GetAnomaliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnomaliesCommandInput, GetAnomaliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAnomaliesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetAnomaliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "GetAnomalies",
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
  private serialize(input: GetAnomaliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAnomaliesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomaliesCommandOutput> {
    return de_GetAnomaliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
