// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetExportJobsRequest, ListDatasetExportJobsResponse } from "../models/models_1";
import { ListDatasetExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetExportJobsCommand}.
 */
export interface ListDatasetExportJobsCommandInput extends ListDatasetExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetExportJobsCommand}.
 */
export interface ListDatasetExportJobsCommandOutput extends ListDatasetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of dataset export jobs for a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListDatasetExportJobsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListDatasetExportJobsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListDatasetExportJobsRequest
 *   workspaceName: "STRING_VALUE", // required
 *   filter: "ALL" || "SUBMITTED" || "RUNNING" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetExportJobsResponse
 * //   jobs: [ // ExportJobSummaryList // required
 * //     { // ExportJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "SUBMITTED" || "RUNNING" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       completedAt: new Date("TIMESTAMP"),
 * //       destinationS3Uri: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetExportJobsCommandInput - {@link ListDatasetExportJobsCommandInput}
 * @returns {@link ListDatasetExportJobsCommandOutput}
 * @see {@link ListDatasetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetExportJobsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
export class ListDatasetExportJobsCommand extends command<ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasetExportJobs",
  ListDatasetExportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetExportJobsRequest;
      output: ListDatasetExportJobsResponse;
    };
    sdk: {
      input: ListDatasetExportJobsCommandInput;
      output: ListDatasetExportJobsCommandOutput;
    };
  };
}
