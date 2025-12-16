// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type {
  BatchGetAssetPropertyAggregatesRequest,
  BatchGetAssetPropertyAggregatesResponse,
} from "../models/models_0";
import { BatchGetAssetPropertyAggregates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAssetPropertyAggregatesCommand}.
 */
export interface BatchGetAssetPropertyAggregatesCommandInput extends BatchGetAssetPropertyAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAssetPropertyAggregatesCommand}.
 */
export interface BatchGetAssetPropertyAggregatesCommandOutput
  extends BatchGetAssetPropertyAggregatesResponse,
    __MetadataBearer {}

/**
 * <p>Gets aggregated values (for example, average, minimum, and maximum) for one or more asset
 *       properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyAggregatesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyAggregatesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchGetAssetPropertyAggregatesRequest
 *   entries: [ // BatchGetAssetPropertyAggregatesEntries // required
 *     { // BatchGetAssetPropertyAggregatesEntry
 *       entryId: "STRING_VALUE", // required
 *       assetId: "STRING_VALUE",
 *       propertyId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *       aggregateTypes: [ // AggregateTypes // required
 *         "AVERAGE" || "COUNT" || "MAXIMUM" || "MINIMUM" || "SUM" || "STANDARD_DEVIATION",
 *       ],
 *       resolution: "STRING_VALUE", // required
 *       startDate: new Date("TIMESTAMP"), // required
 *       endDate: new Date("TIMESTAMP"), // required
 *       qualities: [ // Qualities
 *         "GOOD" || "BAD" || "UNCERTAIN",
 *       ],
 *       timeOrdering: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new BatchGetAssetPropertyAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAssetPropertyAggregatesResponse
 * //   errorEntries: [ // BatchGetAssetPropertyAggregatesErrorEntries // required
 * //     { // BatchGetAssetPropertyAggregatesErrorEntry
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "AccessDeniedException", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       entryId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   successEntries: [ // BatchGetAssetPropertyAggregatesSuccessEntries // required
 * //     { // BatchGetAssetPropertyAggregatesSuccessEntry
 * //       entryId: "STRING_VALUE", // required
 * //       aggregatedValues: [ // AggregatedValues // required
 * //         { // AggregatedValue
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //           quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //           value: { // Aggregates
 * //             average: Number("double"),
 * //             count: Number("double"),
 * //             maximum: Number("double"),
 * //             minimum: Number("double"),
 * //             sum: Number("double"),
 * //             standardDeviation: Number("double"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   skippedEntries: [ // BatchGetAssetPropertyAggregatesSkippedEntries // required
 * //     { // BatchGetAssetPropertyAggregatesSkippedEntry
 * //       entryId: "STRING_VALUE", // required
 * //       completionStatus: "SUCCESS" || "ERROR", // required
 * //       errorInfo: { // BatchGetAssetPropertyAggregatesErrorInfo
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
 * @param BatchGetAssetPropertyAggregatesCommandInput - {@link BatchGetAssetPropertyAggregatesCommandInput}
 * @returns {@link BatchGetAssetPropertyAggregatesCommandOutput}
 * @see {@link BatchGetAssetPropertyAggregatesCommandInput} for command's `input` shape.
 * @see {@link BatchGetAssetPropertyAggregatesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class BatchGetAssetPropertyAggregatesCommand extends $Command
  .classBuilder<
    BatchGetAssetPropertyAggregatesCommandInput,
    BatchGetAssetPropertyAggregatesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "BatchGetAssetPropertyAggregates", {})
  .n("IoTSiteWiseClient", "BatchGetAssetPropertyAggregatesCommand")
  .sc(BatchGetAssetPropertyAggregates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAssetPropertyAggregatesRequest;
      output: BatchGetAssetPropertyAggregatesResponse;
    };
    sdk: {
      input: BatchGetAssetPropertyAggregatesCommandInput;
      output: BatchGetAssetPropertyAggregatesCommandOutput;
    };
  };
}
