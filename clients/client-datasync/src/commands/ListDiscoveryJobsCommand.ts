// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDiscoveryJobsRequest, ListDiscoveryJobsResponse } from "../models/models_0";
import { de_ListDiscoveryJobsCommand, se_ListDiscoveryJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoveryJobsCommand}.
 */
export interface ListDiscoveryJobsCommandInput extends ListDiscoveryJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoveryJobsCommand}.
 */
export interface ListDiscoveryJobsCommandOutput extends ListDiscoveryJobsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of the existing discovery jobs in the Amazon Web Services Region and
 *         Amazon Web Services account where you're using DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListDiscoveryJobsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListDiscoveryJobsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListDiscoveryJobsRequest
 *   StorageSystemArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDiscoveryJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveryJobsResponse
 * //   DiscoveryJobs: [ // DiscoveryJobList
 * //     { // DiscoveryJobListEntry
 * //       DiscoveryJobArn: "STRING_VALUE",
 * //       Status: "RUNNING" || "WARNING" || "TERMINATED" || "FAILED" || "STOPPED" || "COMPLETED" || "COMPLETED_WITH_ISSUES",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveryJobsCommandInput - {@link ListDiscoveryJobsCommandInput}
 * @returns {@link ListDiscoveryJobsCommandOutput}
 * @see {@link ListDiscoveryJobsCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveryJobsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class ListDiscoveryJobsCommand extends $Command
  .classBuilder<
    ListDiscoveryJobsCommandInput,
    ListDiscoveryJobsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "ListDiscoveryJobs", {})
  .n("DataSyncClient", "ListDiscoveryJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDiscoveryJobsCommand)
  .de(de_ListDiscoveryJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoveryJobsRequest;
      output: ListDiscoveryJobsResponse;
    };
    sdk: {
      input: ListDiscoveryJobsCommandInput;
      output: ListDiscoveryJobsCommandOutput;
    };
  };
}
