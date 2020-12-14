import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchPutAssetPropertyValueRequest, BatchPutAssetPropertyValueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutAssetPropertyValueCommand,
  serializeAws_restJson1BatchPutAssetPropertyValueCommand,
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

export type BatchPutAssetPropertyValueCommandInput = BatchPutAssetPropertyValueRequest;
export type BatchPutAssetPropertyValueCommandOutput = BatchPutAssetPropertyValueResponse & __MetadataBearer;

/**
 * <p>Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value
 *       (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
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
 *          <important>
 *             <p>With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more
 *         than 7 days in the past and no more than 5 minutes in the future. AWS IoT SiteWise rejects timestamps
 *         outside of the inclusive range of [-7 days, +5 minutes] and returns a
 *           <code>TimestampOutOfRangeException</code> error.</p>
 *             <p>For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
 *         TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>,
 *         then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p>
 *          </important>
 *          <p>AWS IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the
 *       <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export class BatchPutAssetPropertyValueCommand extends $Command<
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutAssetPropertyValueCommandInput) {
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
  ): Handler<BatchPutAssetPropertyValueCommandInput, BatchPutAssetPropertyValueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchPutAssetPropertyValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutAssetPropertyValueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchPutAssetPropertyValueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutAssetPropertyValueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchPutAssetPropertyValueCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchPutAssetPropertyValueCommandOutput> {
    return deserializeAws_restJson1BatchPutAssetPropertyValueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
