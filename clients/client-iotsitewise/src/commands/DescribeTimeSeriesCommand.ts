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
import { DescribeTimeSeriesRequest, DescribeTimeSeriesResponse } from "../models/models_0";
import { de_DescribeTimeSeriesCommand, se_DescribeTimeSeriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTimeSeriesCommand}.
 */
export interface DescribeTimeSeriesCommandInput extends DescribeTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTimeSeriesCommand}.
 */
export interface DescribeTimeSeriesCommandOutput extends DescribeTimeSeriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a time series (data stream).</p>
 *          <p>To identify a time series, do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>If the time series isn't associated with an asset property,
 *           specify the <code>alias</code> of the time series.</p>
 *             </li>
 *             <li>
 *                <p>If the time series is associated with an asset property,
 *           specify one of the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>The <code>alias</code> of the time series.</p>
 *                   </li>
 *                   <li>
 *                      <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeTimeSeriesRequest
 *   alias: "STRING_VALUE",
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 * };
 * const command = new DescribeTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTimeSeriesResponse
 * //   assetId: "STRING_VALUE",
 * //   propertyId: "STRING_VALUE",
 * //   alias: "STRING_VALUE",
 * //   timeSeriesId: "STRING_VALUE", // required
 * //   dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //   dataTypeSpec: "STRING_VALUE",
 * //   timeSeriesCreationDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeTimeSeriesCommandInput - {@link DescribeTimeSeriesCommandInput}
 * @returns {@link DescribeTimeSeriesCommandOutput}
 * @see {@link DescribeTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeSeriesCommandOutput} for command's `response` shape.
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
export class DescribeTimeSeriesCommand extends $Command<
  DescribeTimeSeriesCommandInput,
  DescribeTimeSeriesCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: DescribeTimeSeriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTimeSeriesCommandInput, DescribeTimeSeriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTimeSeriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeTimeSeriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTSiteWise",
        operation: "DescribeTimeSeries",
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
  private serialize(input: DescribeTimeSeriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTimeSeriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTimeSeriesCommandOutput> {
    return de_DescribeTimeSeriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
