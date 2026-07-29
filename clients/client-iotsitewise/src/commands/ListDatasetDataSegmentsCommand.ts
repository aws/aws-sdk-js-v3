// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetDataSegmentsRequest, ListDatasetDataSegmentsResponse } from "../models/models_1";
import { ListDatasetDataSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetDataSegmentsCommand}.
 */
export interface ListDatasetDataSegmentsCommandInput extends ListDatasetDataSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetDataSegmentsCommand}.
 */
export interface ListDatasetDataSegmentsCommandOutput extends ListDatasetDataSegmentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of data segments associated with a dataset. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListDatasetDataSegmentsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListDatasetDataSegmentsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListDatasetDataSegmentsRequest
 *   datasetId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE", // required
 *   datasetVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetDataSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetDataSegmentsResponse
 * //   dataSegments: [ // DataSegmentSummaries // required
 * //     { // DataSegmentSummary
 * //       sourceDatasetId: "STRING_VALUE", // required
 * //       timeSeriesId: "STRING_VALUE", // required
 * //       startTimestamp: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       endTimestamp: {
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       alias: "STRING_VALUE", // required
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT" || "VIDEO" || "ANNOTATION" || "JSON", // required
 * //       enrichment: { // DataSegmentEnrichment
 * //         status: "ENRICHED" || "NOT_ENRICHED", // required
 * //         lastEnrichedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetDataSegmentsCommandInput - {@link ListDatasetDataSegmentsCommandInput}
 * @returns {@link ListDatasetDataSegmentsCommandOutput}
 * @see {@link ListDatasetDataSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetDataSegmentsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListDatasetDataSegmentsCommand extends command<ListDatasetDataSegmentsCommandInput, ListDatasetDataSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasetDataSegments",
  ListDatasetDataSegments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetDataSegmentsRequest;
      output: ListDatasetDataSegmentsResponse;
    };
    sdk: {
      input: ListDatasetDataSegmentsCommandInput;
      output: ListDatasetDataSegmentsCommandOutput;
    };
  };
}
