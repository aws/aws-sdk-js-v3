// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  BatchGetAssetPropertyValueHistoryRequest,
  BatchGetAssetPropertyValueHistoryResponse,
} from "../models/models_0";
import {
  de_BatchGetAssetPropertyValueHistoryCommand,
  se_BatchGetAssetPropertyValueHistoryCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAssetPropertyValueHistoryCommand}.
 */
export interface BatchGetAssetPropertyValueHistoryCommandInput extends BatchGetAssetPropertyValueHistoryRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAssetPropertyValueHistoryCommand}.
 */
export interface BatchGetAssetPropertyValueHistoryCommandOutput
  extends BatchGetAssetPropertyValueHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Gets the historical values for one or more asset properties. For more information, see
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchGetAssetPropertyValueHistoryRequest
 *   entries: [ // BatchGetAssetPropertyValueHistoryEntries // required
 *     { // BatchGetAssetPropertyValueHistoryEntry
 *       entryId: "STRING_VALUE", // required
 *       assetId: "STRING_VALUE",
 *       propertyId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *       startDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *       qualities: [ // Qualities
 *         "GOOD" || "BAD" || "UNCERTAIN",
 *       ],
 *       timeOrdering: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new BatchGetAssetPropertyValueHistoryCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAssetPropertyValueHistoryResponse
 * //   errorEntries: [ // BatchGetAssetPropertyValueHistoryErrorEntries // required
 * //     { // BatchGetAssetPropertyValueHistoryErrorEntry
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "AccessDeniedException", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       entryId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   successEntries: [ // BatchGetAssetPropertyValueHistorySuccessEntries // required
 * //     { // BatchGetAssetPropertyValueHistorySuccessEntry
 * //       entryId: "STRING_VALUE", // required
 * //       assetPropertyValueHistory: [ // AssetPropertyValueHistory // required
 * //         { // AssetPropertyValue
 * //           value: { // Variant
 * //             stringValue: "STRING_VALUE",
 * //             integerValue: Number("int"),
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //           },
 * //           timestamp: { // TimeInNanos
 * //             timeInSeconds: Number("long"), // required
 * //             offsetInNanos: Number("int"),
 * //           },
 * //           quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   skippedEntries: [ // BatchGetAssetPropertyValueHistorySkippedEntries // required
 * //     { // BatchGetAssetPropertyValueHistorySkippedEntry
 * //       entryId: "STRING_VALUE", // required
 * //       completionStatus: "SUCCESS" || "ERROR", // required
 * //       errorInfo: { // BatchGetAssetPropertyValueHistoryErrorInfo
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
 * @param BatchGetAssetPropertyValueHistoryCommandInput - {@link BatchGetAssetPropertyValueHistoryCommandInput}
 * @returns {@link BatchGetAssetPropertyValueHistoryCommandOutput}
 * @see {@link BatchGetAssetPropertyValueHistoryCommandInput} for command's `input` shape.
 * @see {@link BatchGetAssetPropertyValueHistoryCommandOutput} for command's `response` shape.
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
export class BatchGetAssetPropertyValueHistoryCommand extends $Command
  .classBuilder<
    BatchGetAssetPropertyValueHistoryCommandInput,
    BatchGetAssetPropertyValueHistoryCommandOutput,
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
  .s("AWSIoTSiteWise", "BatchGetAssetPropertyValueHistory", {})
  .n("IoTSiteWiseClient", "BatchGetAssetPropertyValueHistoryCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetAssetPropertyValueHistoryCommand)
  .de(de_BatchGetAssetPropertyValueHistoryCommand)
  .build() {}
