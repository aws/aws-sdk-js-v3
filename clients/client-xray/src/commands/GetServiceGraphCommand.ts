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

import { GetServiceGraphRequest, GetServiceGraphResult } from "../models/models_0";
import { de_GetServiceGraphCommand, se_GetServiceGraphCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceGraphCommand}.
 */
export interface GetServiceGraphCommandInput extends GetServiceGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceGraphCommand}.
 */
export interface GetServiceGraphCommandOutput extends GetServiceGraphResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>.
 *       Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL
 *       databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetServiceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetServiceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetServiceGraphRequest
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetServiceGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceGraphResult
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Services: [ // ServiceList
 * //     { // Service
 * //       ReferenceId: Number("int"),
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       Root: true || false,
 * //       AccountId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Edges: [ // EdgeList
 * //         { // Edge
 * //           ReferenceId: Number("int"),
 * //           StartTime: new Date("TIMESTAMP"),
 * //           EndTime: new Date("TIMESTAMP"),
 * //           SummaryStatistics: { // EdgeStatistics
 * //             OkCount: Number("long"),
 * //             ErrorStatistics: { // ErrorStatistics
 * //               ThrottleCount: Number("long"),
 * //               OtherCount: Number("long"),
 * //               TotalCount: Number("long"),
 * //             },
 * //             FaultStatistics: { // FaultStatistics
 * //               OtherCount: Number("long"),
 * //               TotalCount: Number("long"),
 * //             },
 * //             TotalCount: Number("long"),
 * //             TotalResponseTime: Number("double"),
 * //           },
 * //           ResponseTimeHistogram: [ // Histogram
 * //             { // HistogramEntry
 * //               Value: Number("double"),
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //           Aliases: [ // AliasList
 * //             { // Alias
 * //               Name: "STRING_VALUE",
 * //               Names: [ // AliasNames
 * //                 "STRING_VALUE",
 * //               ],
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           EdgeType: "STRING_VALUE",
 * //           ReceivedEventAgeHistogram: [
 * //             {
 * //               Value: Number("double"),
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SummaryStatistics: { // ServiceStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: {
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: {
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       DurationHistogram: [
 * //         {
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //       ResponseTimeHistogram: [
 * //         {
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   ContainsOldGroupVersions: true || false,
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceGraphCommandInput - {@link GetServiceGraphCommandInput}
 * @returns {@link GetServiceGraphCommandOutput}
 * @see {@link GetServiceGraphCommandInput} for command's `input` shape.
 * @see {@link GetServiceGraphCommandOutput} for command's `response` shape.
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
export class GetServiceGraphCommand extends $Command<
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
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
  constructor(readonly input: GetServiceGraphCommandInput) {
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
  ): Handler<GetServiceGraphCommandInput, GetServiceGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetServiceGraphCommand";
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
  private serialize(input: GetServiceGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceGraphCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceGraphCommandOutput> {
    return de_GetServiceGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
