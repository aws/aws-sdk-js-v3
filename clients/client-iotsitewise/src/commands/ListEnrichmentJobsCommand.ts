// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnrichmentJobsRequest, ListEnrichmentJobsResponse } from "../models/models_1";
import { ListEnrichmentJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnrichmentJobsCommand}.
 */
export interface ListEnrichmentJobsCommandInput extends ListEnrichmentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnrichmentJobsCommand}.
 */
export interface ListEnrichmentJobsCommandOutput extends ListEnrichmentJobsResponse, __MetadataBearer {}

/**
 * <p>Lists enrichment jobs within a workspace with optional filtering and pagination. Results are ordered
 * by createdAt timestamp descending (newest first).</p>
 * <h2>Filtering</h2>
 * <p>Combine filters to narrow results:</p>
 * <ul>
 * <li><strong>datasetId</strong>: Filter by dataset</li>
 * <li><strong>propertyAlias</strong> OR <strong>timeSeriesId</strong>: Filter by time series (specify one, not both)</li>
 * <li><strong>status</strong>: Filter by job status (e.g., RUNNING to find active jobs)</li>
 * <li><strong>jobType</strong>: Filter by enrichment type (currently only EVENT_DETECTION)</li>
 * <li><strong>startDate</strong> and <strong>endDate</strong>: Filter by job creation time range</li>
 * </ul>
 * <h2>Important Constraints</h2>
 * <ul>
 * <li>You must specify either propertyAlias OR timeSeriesId, but not both</li>
 * <li>Attempting to specify both results in an InvalidRequestException</li>
 * <li>Date filters use ISO 8601 format</li>
 * <li>startDate is exclusive, endDate is inclusive</li>
 * </ul>
 * <h2>Pagination</h2>
 * <p>The operation returns up to maxResults jobs per page (default 50). If more results exist, the
 * response includes a nextToken. Submit this token in a subsequent request to retrieve the next page.</p>
 * <h2>Common Use Cases</h2>
 * <ul>
 * <li>Find all running jobs: Filter by status=RUNNING</li>
 * <li>List recent jobs for a dataset: Filter by datasetId with optional date range</li>
 * <li>Monitor jobs for a specific sensor: Filter by propertyAlias or timeSeriesId</li>
 * <li>Track all event detection jobs: Filter by jobType=EVENT_DETECTION</li>
 * </ul>
 * <h2>Performance</h2>
 * <p>Performance is optimal when filtering by supported fields (datasetId, propertyAlias, timeSeriesId, status, jobType).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListEnrichmentJobsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListEnrichmentJobsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListEnrichmentJobsRequest
 *   workspaceName: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   timeSeriesId: "STRING_VALUE",
 *   status: "PENDING" || "RUNNING" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELLED",
 *   jobType: "EVENT_DETECTION",
 *   startDate: new Date("TIMESTAMP"),
 *   endDate: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnrichmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnrichmentJobsResponse
 * //   jobs: [ // EnrichmentJobSummaries // required
 * //     { // EnrichmentJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "PENDING" || "RUNNING" || "COMPLETED" || "FAILED" || "TIMED_OUT" || "CANCELLED", // required
 * //       workspaceName: "STRING_VALUE", // required
 * //       jobType: "EVENT_DETECTION", // required
 * //       datasetId: "STRING_VALUE", // required
 * //       propertyAlias: "STRING_VALUE",
 * //       timeSeriesId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnrichmentJobsCommandInput - {@link ListEnrichmentJobsCommandInput}
 * @returns {@link ListEnrichmentJobsCommandOutput}
 * @see {@link ListEnrichmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListEnrichmentJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
export class ListEnrichmentJobsCommand extends command<ListEnrichmentJobsCommandInput, ListEnrichmentJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnrichmentJobs",
  ListEnrichmentJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnrichmentJobsRequest;
      output: ListEnrichmentJobsResponse;
    };
    sdk: {
      input: ListEnrichmentJobsCommandInput;
      output: ListEnrichmentJobsCommandOutput;
    };
  };
}
