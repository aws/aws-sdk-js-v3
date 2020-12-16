import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssetPropertyAggregatesCommand,
  serializeAws_restJson1GetAssetPropertyAggregatesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetAssetPropertyAggregatesCommandInput = GetAssetPropertyAggregatesRequest;
export type GetAssetPropertyAggregatesCommandOutput = GetAssetPropertyAggregatesResponse & __MetadataBearer;

/**
 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
 *         aggregates</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
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
 */
export class GetAssetPropertyAggregatesCommand extends $Command<
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssetPropertyAggregatesCommandInput) {
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
  ): Handler<GetAssetPropertyAggregatesCommandInput, GetAssetPropertyAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "GetAssetPropertyAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssetPropertyAggregatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssetPropertyAggregatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssetPropertyAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssetPropertyAggregatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssetPropertyAggregatesCommandOutput> {
    return deserializeAws_restJson1GetAssetPropertyAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
