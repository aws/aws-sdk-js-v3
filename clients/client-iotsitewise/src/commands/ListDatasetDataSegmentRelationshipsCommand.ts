// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDatasetDataSegmentRelationshipsRequest,
  ListDatasetDataSegmentRelationshipsResponse,
} from "../models/models_1";
import { ListDatasetDataSegmentRelationships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetDataSegmentRelationshipsCommand}.
 */
export interface ListDatasetDataSegmentRelationshipsCommandInput extends ListDatasetDataSegmentRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetDataSegmentRelationshipsCommand}.
 */
export interface ListDatasetDataSegmentRelationshipsCommandOutput extends ListDatasetDataSegmentRelationshipsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of data segment relationships for a session dataset. Use this
 *       operation to find the curated datasets that reference data segments of the specified session
 *       dataset. Use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListDatasetDataSegmentRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListDatasetDataSegmentRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListDatasetDataSegmentRelationshipsRequest
 *   datasetId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetDataSegmentRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetDataSegmentRelationshipsResponse
 * //   dataSegmentRelationshipSummaries: [ // DataSegmentRelationshipSummaries // required
 * //     { // DataSegmentRelationshipSummary
 * //       targetDatasetId: "STRING_VALUE", // required
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
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetDataSegmentRelationshipsCommandInput - {@link ListDatasetDataSegmentRelationshipsCommandInput}
 * @returns {@link ListDatasetDataSegmentRelationshipsCommandOutput}
 * @see {@link ListDatasetDataSegmentRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetDataSegmentRelationshipsCommandOutput} for command's `response` shape.
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
export class ListDatasetDataSegmentRelationshipsCommand extends command<ListDatasetDataSegmentRelationshipsCommandInput, ListDatasetDataSegmentRelationshipsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasetDataSegmentRelationships",
  ListDatasetDataSegmentRelationships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetDataSegmentRelationshipsRequest;
      output: ListDatasetDataSegmentRelationshipsResponse;
    };
    sdk: {
      input: ListDatasetDataSegmentRelationshipsCommandInput;
      output: ListDatasetDataSegmentRelationshipsCommandOutput;
    };
  };
}
