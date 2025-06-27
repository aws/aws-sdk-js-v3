// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListBulkImportJobsRequest, ListBulkImportJobsResponse } from "../models/models_1";
import { de_ListBulkImportJobsCommand, se_ListBulkImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk
 *         import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListBulkImportJobsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListBulkImportJobsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListBulkImportJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: "ALL" || "PENDING" || "RUNNING" || "CANCELLED" || "FAILED" || "COMPLETED_WITH_FAILURES" || "COMPLETED",
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
export class ListBulkImportJobsCommand extends $Command
  .classBuilder<
    ListBulkImportJobsCommandInput,
    ListBulkImportJobsCommandOutput,
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
  .s("AWSIoTSiteWise", "ListBulkImportJobs", {})
  .n("IoTSiteWiseClient", "ListBulkImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListBulkImportJobsCommand)
  .de(de_ListBulkImportJobsCommand)
  .build() {
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
