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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse } from "../models/models_0";
import { de_GetAssetPropertyAggregatesCommand, se_GetAssetPropertyAggregatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssetPropertyAggregatesCommand}.
 */
export interface GetAssetPropertyAggregatesCommandInput extends GetAssetPropertyAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetPropertyAggregatesCommand}.
 */
export interface GetAssetPropertyAggregatesCommandOutput extends GetAssetPropertyAggregatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
 *         aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetAssetPropertyAggregatesRequest
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   aggregateTypes: [ // AggregateTypes // required
 *     "AVERAGE" || "COUNT" || "MAXIMUM" || "MINIMUM" || "SUM" || "STANDARD_DEVIATION",
 *   ],
 *   resolution: "STRING_VALUE", // required
 *   qualities: [ // Qualities
 *     "GOOD" || "BAD" || "UNCERTAIN",
 *   ],
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 *   timeOrdering: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetAssetPropertyAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetPropertyAggregatesResponse
 * //   aggregatedValues: [ // AggregatedValues // required
 * //     { // AggregatedValue
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //       value: { // Aggregates
 * //         average: Number("double"),
 * //         count: Number("double"),
 * //         maximum: Number("double"),
 * //         minimum: Number("double"),
 * //         sum: Number("double"),
 * //         standardDeviation: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssetPropertyAggregatesCommandInput - {@link GetAssetPropertyAggregatesCommandInput}
 * @returns {@link GetAssetPropertyAggregatesCommandOutput}
 * @see {@link GetAssetPropertyAggregatesCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyAggregatesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The requested service is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class GetAssetPropertyAggregatesCommand extends $Command<
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: GetAssetPropertyAggregatesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssetPropertyAggregatesCommandInput, GetAssetPropertyAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssetPropertyAggregatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "GetAssetPropertyAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTSiteWise",
        operation: "GetAssetPropertyAggregates",
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
  private serialize(input: GetAssetPropertyAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssetPropertyAggregatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssetPropertyAggregatesCommandOutput> {
    return de_GetAssetPropertyAggregatesCommand(output, context);
  }
}
