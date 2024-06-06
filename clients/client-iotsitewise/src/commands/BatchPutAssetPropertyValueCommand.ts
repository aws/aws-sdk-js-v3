// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchPutAssetPropertyValueRequest, BatchPutAssetPropertyValueResponse } from "../models/models_0";
import { de_BatchPutAssetPropertyValueCommand, se_BatchPutAssetPropertyValueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutAssetPropertyValueCommand}.
 */
export interface BatchPutAssetPropertyValueCommandInput extends BatchPutAssetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutAssetPropertyValueCommand}.
 */
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
 *         TQV has a different quality. For example, if you store a TQV <code>\{T1, GOOD, V1\}</code>,
 *         then storing <code>\{T1, GOOD, V2\}</code> replaces the existing TQV.</p>
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
 * const input = { // BatchPutAssetPropertyValueRequest
 *   entries: [ // PutAssetPropertyValueEntries // required
 *     { // PutAssetPropertyValueEntry
 *       entryId: "STRING_VALUE", // required
 *       assetId: "STRING_VALUE",
 *       propertyId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *       propertyValues: [ // AssetPropertyValues // required
 *         { // AssetPropertyValue
 *           value: { // Variant
 *             stringValue: "STRING_VALUE",
 *             integerValue: Number("int"),
 *             doubleValue: Number("double"),
 *             booleanValue: true || false,
 *           },
 *           timestamp: { // TimeInNanos
 *             timeInSeconds: Number("long"), // required
 *             offsetInNanos: Number("int"),
 *           },
 *           quality: "GOOD" || "BAD" || "UNCERTAIN",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchPutAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutAssetPropertyValueResponse
 * //   errorEntries: [ // BatchPutAssetPropertyErrorEntries // required
 * //     { // BatchPutAssetPropertyErrorEntry
 * //       entryId: "STRING_VALUE", // required
 * //       errors: [ // BatchPutAssetPropertyErrors // required
 * //         { // BatchPutAssetPropertyError
 * //           errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException" || "LimitExceededException" || "ConflictingOperationException" || "TimestampOutOfRangeException" || "AccessDeniedException", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //           timestamps: [ // Timestamps // required
 * //             { // TimeInNanos
 * //               timeInSeconds: Number("long"), // required
 * //               offsetInNanos: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutAssetPropertyValueCommandInput - {@link BatchPutAssetPropertyValueCommandInput}
 * @returns {@link BatchPutAssetPropertyValueCommandOutput}
 * @see {@link BatchPutAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link BatchPutAssetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
 * @public
 */
export class BatchPutAssetPropertyValueCommand extends $Command
  .classBuilder<
    BatchPutAssetPropertyValueCommandInput,
    BatchPutAssetPropertyValueCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "BatchPutAssetPropertyValue", {})
  .n("IoTSiteWiseClient", "BatchPutAssetPropertyValueCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutAssetPropertyValueCommand)
  .de(de_BatchPutAssetPropertyValueCommand)
  .build() {}
