// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchGetAssetPropertyValueHistoryRequest,
  BatchGetAssetPropertyValueHistoryResponse,
} from "../models/models_0";
import { BatchGetAssetPropertyValueHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface BatchGetAssetPropertyValueHistoryCommandOutput extends BatchGetAssetPropertyValueHistoryResponse, __MetadataBearer {}

/**
 * Gets the historical values for one or more asset properties. For more information, see [Querying historical values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values) in the *IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyValueHistoryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
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
 * //             nullValue: { // PropertyValueNullValue
 * //               valueType: "D" || "B" || "S" || "I" || "U", // required
 * //             },
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
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The requested service is unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class BatchGetAssetPropertyValueHistoryCommand extends command<BatchGetAssetPropertyValueHistoryCommandInput, BatchGetAssetPropertyValueHistoryCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetAssetPropertyValueHistory",
  BatchGetAssetPropertyValueHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAssetPropertyValueHistoryRequest;
      output: BatchGetAssetPropertyValueHistoryResponse;
    };
    sdk: {
      input: BatchGetAssetPropertyValueHistoryCommandInput;
      output: BatchGetAssetPropertyValueHistoryCommandOutput;
    };
  };
}
