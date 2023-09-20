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

import { GetInsightSummariesRequest, GetInsightSummariesResult } from "../models/models_0";
import { de_GetInsightSummariesCommand, se_GetInsightSummariesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightSummariesCommand}.
 */
export interface GetInsightSummariesCommandInput extends GetInsightSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightSummariesCommand}.
 */
export interface GetInsightSummariesCommandOutput extends GetInsightSummariesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the summaries of all insights in the specified group matching the provided filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetInsightSummariesRequest
 *   States: [ // InsightStateList
 *     "ACTIVE" || "CLOSED",
 *   ],
 *   GroupARN: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInsightSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightSummariesResult
 * //   InsightSummaries: [ // InsightSummaryList
 * //     { // InsightSummary
 * //       InsightId: "STRING_VALUE",
 * //       GroupARN: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       RootCauseServiceId: { // ServiceId
 * //         Name: "STRING_VALUE",
 * //         Names: [ // ServiceNames
 * //           "STRING_VALUE",
 * //         ],
 * //         AccountId: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //       Categories: [ // InsightCategoryList
 * //         "FAULT",
 * //       ],
 * //       State: "ACTIVE" || "CLOSED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Summary: "STRING_VALUE",
 * //       ClientRequestImpactStatistics: { // RequestImpactStatistics
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       RootCauseServiceRequestImpactStatistics: {
 * //         FaultCount: Number("long"),
 * //         OkCount: Number("long"),
 * //         TotalCount: Number("long"),
 * //       },
 * //       TopAnomalousServices: [ // AnomalousServiceList
 * //         { // AnomalousService
 * //           ServiceId: {
 * //             Name: "STRING_VALUE",
 * //             Names: [
 * //               "STRING_VALUE",
 * //             ],
 * //             AccountId: "STRING_VALUE",
 * //             Type: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightSummariesCommandInput - {@link GetInsightSummariesCommandInput}
 * @returns {@link GetInsightSummariesCommandOutput}
 * @see {@link GetInsightSummariesCommandInput} for command's `input` shape.
 * @see {@link GetInsightSummariesCommandOutput} for command's `response` shape.
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
export class GetInsightSummariesCommand extends $Command<
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
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
  constructor(readonly input: GetInsightSummariesCommandInput) {
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
  ): Handler<GetInsightSummariesCommandInput, GetInsightSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSXRay",
        operation: "GetInsightSummaries",
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
  private serialize(input: GetInsightSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightSummariesCommandOutput> {
    return de_GetInsightSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
