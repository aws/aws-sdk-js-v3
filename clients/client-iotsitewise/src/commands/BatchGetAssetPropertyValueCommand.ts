// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetAssetPropertyValueRequest, BatchGetAssetPropertyValueResponse } from "../models/models_0";
import { BatchGetAssetPropertyValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the current value for one or more asset properties. For more information, see [Querying current values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values) in the *IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
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
export class BatchGetAssetPropertyValueCommand extends command<BatchGetAssetPropertyValueCommandInput, BatchGetAssetPropertyValueCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetAssetPropertyValue",
  BatchGetAssetPropertyValue$
) {
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
