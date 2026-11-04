// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBulkImportJobsRequest, ListBulkImportJobsResponse } from "../models/models_1";
import { ListBulkImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBulkImportJobsCommand}.
 */
export interface ListBulkImportJobsCommandInput extends ListBulkImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListBulkImportJobsCommand}.
 */
export interface ListBulkImportJobsCommandOutput extends ListBulkImportJobsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of bulk import job requests. For more information, see [List bulk import jobs (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html) in the *IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListBulkImportJobsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListBulkImportJobsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListBulkImportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: "ALL" || "PENDING" || "RUNNING" || "CANCELLED" || "FAILED" || "COMPLETED_WITH_FAILURES" || "COMPLETED",
 *   workspaceName: "STRING_VALUE",
 * };
 * const command = new ListBulkImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBulkImportJobsResponse
 * //   jobSummaries: [ // JobSummaries // required
 * //     { // JobSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "PENDING" || "CANCELLED" || "RUNNING" || "COMPLETED" || "FAILED" || "COMPLETED_WITH_FAILURES", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBulkImportJobsCommandInput - {@link ListBulkImportJobsCommandInput}
 * @returns {@link ListBulkImportJobsCommandOutput}
 * @see {@link ListBulkImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListBulkImportJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
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
export class ListBulkImportJobsCommand extends command<ListBulkImportJobsCommandInput, ListBulkImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListBulkImportJobs",
  ListBulkImportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBulkImportJobsRequest;
      output: ListBulkImportJobsResponse;
    };
    sdk: {
      input: ListBulkImportJobsCommandInput;
      output: ListBulkImportJobsCommandOutput;
    };
  };
}
