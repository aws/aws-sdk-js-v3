// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  BatchPutAssetPropertyValueRequest,
  BatchPutAssetPropertyValueRequestFilterSensitiveLog,
  BatchPutAssetPropertyValueResponse,
  BatchPutAssetPropertyValueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutAssetPropertyValueCommand,
  serializeAws_restJson1BatchPutAssetPropertyValueCommand,
} from "../protocols/Aws_restJson1";

export interface BatchPutAssetPropertyValueCommandInput extends BatchPutAssetPropertyValueRequest {}
export interface BatchPutAssetPropertyValueCommandOutput extends BatchPutAssetPropertyValueResponse, __MetadataBearer {}

/**
 * <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value
 *       (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
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
 *             <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more
 *         than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps
 *         outside of the inclusive range of [-7 days, +10 minutes] and returns a
 *           <code>TimestampOutOfRangeException</code> error.</p>
 *             <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
 *         TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>,
 *         then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p>
 *          </important>
 *          <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the
 *       <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchPutAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new BatchPutAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link BatchPutAssetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class BatchPutAssetPropertyValueCommand extends $Command<
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutAssetPropertyValueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchPutAssetPropertyValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutAssetPropertyValueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchPutAssetPropertyValueResponseFilterSensitiveLog,
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
