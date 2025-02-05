// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchGetAssetPropertyValueRequest, BatchGetAssetPropertyValueResponse } from "../models/models_0";
import { de_BatchGetAssetPropertyValueCommand, se_BatchGetAssetPropertyValueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAssetPropertyValueCommand}.
 */
export interface BatchGetAssetPropertyValueCommandInput extends BatchGetAssetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAssetPropertyValueCommand}.
 */
export interface BatchGetAssetPropertyValueCommandOutput extends BatchGetAssetPropertyValueResponse, __MetadataBearer {}

/**
 * <p>Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying
 *         current values</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchGetAssetPropertyValueRequest
 *   entries: [ // BatchGetAssetPropertyValueEntries // required
 *     { // BatchGetAssetPropertyValueEntry
 *       entryId: "STRING_VALUE", // required
 *       assetId: "STRING_VALUE",
 *       propertyId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAssetPropertyValueResponse
 * //   errorEntries: [ // BatchGetAssetPropertyValueErrorEntries // required
 * //     { // BatchGetAssetPropertyValueErrorEntry
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "AccessDeniedException", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       entryId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   successEntries: [ // BatchGetAssetPropertyValueSuccessEntries // required
 * //     { // BatchGetAssetPropertyValueSuccessEntry
 * //       entryId: "STRING_VALUE", // required
 * //       assetPropertyValue: { // AssetPropertyValue
 * //         value: { // Variant
 * //           stringValue: "STRING_VALUE",
 * //           integerValue: Number("int"),
 * //           doubleValue: Number("double"),
 * //           booleanValue: true || false,
 * //           nullValue: { // PropertyValueNullValue
 * //             valueType: "D" || "B" || "S" || "I" || "U", // required
 * //           },
 * //         },
 * //         timestamp: { // TimeInNanos
 * //           timeInSeconds: Number("long"), // required
 * //           offsetInNanos: Number("int"),
 * //         },
 * //         quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //       },
 * //     },
 * //   ],
 * //   skippedEntries: [ // BatchGetAssetPropertyValueSkippedEntries // required
 * //     { // BatchGetAssetPropertyValueSkippedEntry
 * //       entryId: "STRING_VALUE", // required
 * //       completionStatus: "SUCCESS" || "ERROR", // required
 * //       errorInfo: { // BatchGetAssetPropertyValueErrorInfo
 * //         errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "AccessDeniedException", // required
 * //         errorTimestamp: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetAssetPropertyValueCommandInput - {@link BatchGetAssetPropertyValueCommandInput}
 * @returns {@link BatchGetAssetPropertyValueCommandOutput}
 * @see {@link BatchGetAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link BatchGetAssetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
export class BatchGetAssetPropertyValueCommand extends $Command
  .classBuilder<
    BatchGetAssetPropertyValueCommandInput,
    BatchGetAssetPropertyValueCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "BatchGetAssetPropertyValue", {})
  .n("IoTSiteWiseClient", "BatchGetAssetPropertyValueCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetAssetPropertyValueCommand)
  .de(de_BatchGetAssetPropertyValueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAssetPropertyValueRequest;
      output: BatchGetAssetPropertyValueResponse;
    };
    sdk: {
      input: BatchGetAssetPropertyValueCommandInput;
      output: BatchGetAssetPropertyValueCommandOutput;
    };
  };
}
