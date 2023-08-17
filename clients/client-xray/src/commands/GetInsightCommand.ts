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

import { GetInsightRequest, GetInsightResult } from "../models/models_0";
import { de_GetInsightCommand, se_GetInsightCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightCommand}.
 */
export interface GetInsightCommandInput extends GetInsightRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightCommand}.
 */
export interface GetInsightCommandOutput extends GetInsightResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the summary information of an insight. This includes impact to clients and
 *          root cause services, the top anomalous services, the category, the state of the insight,
 *          and the start and end time of the insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetInsightRequest
 *   InsightId: "STRING_VALUE", // required
 * };
 * const command = new GetInsightCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightResult
 * //   Insight: { // Insight
 * //     InsightId: "STRING_VALUE",
 * //     GroupARN: "STRING_VALUE",
 * //     GroupName: "STRING_VALUE",
 * //     RootCauseServiceId: { // ServiceId
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //     Categories: [ // InsightCategoryList
 * //       "FAULT",
 * //     ],
 * //     State: "ACTIVE" || "CLOSED",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Summary: "STRING_VALUE",
 * //     ClientRequestImpactStatistics: { // RequestImpactStatistics
 * //       FaultCount: Number("long"),
 * //       OkCount: Number("long"),
 * //       TotalCount: Number("long"),
 * //     },
 * //     RootCauseServiceRequestImpactStatistics: {
 * //       FaultCount: Number("long"),
 * //       OkCount: Number("long"),
 * //       TotalCount: Number("long"),
 * //     },
 * //     TopAnomalousServices: [ // AnomalousServiceList
 * //       { // AnomalousService
 * //         ServiceId: {
 * //           Name: "STRING_VALUE",
 * //           Names: [
 * //             "STRING_VALUE",
 * //           ],
 * //           AccountId: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightCommandInput - {@link GetInsightCommandInput}
 * @returns {@link GetInsightCommandOutput}
 * @see {@link GetInsightCommandInput} for command's `input` shape.
 * @see {@link GetInsightCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class GetInsightCommand extends $Command<
  GetInsightCommandInput,
  GetInsightCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: GetInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightCommandInput, GetInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInsightCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightCommand";
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
  private serialize(input: GetInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightCommandOutput> {
    return de_GetInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
