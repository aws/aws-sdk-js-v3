// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSearchJobBackupsInput, ListSearchJobBackupsOutput } from "../models/models_0";
import { ListSearchJobBackups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSearchJobBackupsCommand}.
 */
export interface ListSearchJobBackupsCommandInput extends ListSearchJobBackupsInput {}
/**
 * @public
 *
 * The output of {@link ListSearchJobBackupsCommand}.
 */
export interface ListSearchJobBackupsCommandOutput extends ListSearchJobBackupsOutput, __MetadataBearer {}

/**
 * <p>This operation returns a list of all backups (recovery points) in a paginated format that were included in the search job.</p> <p>If a search does not display an expected backup in the results, you can call this operation to display each backup included in the search. Any backups that were not included because they have a <code>FAILED</code> status from a permissions issue will be displayed, along with a status message.</p> <p>Only recovery points with a backup index that has a status of <code>ACTIVE</code> will be included in search results. If the index has any other status, its status will be displayed along with a status message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, ListSearchJobBackupsCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, ListSearchJobBackupsCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // ListSearchJobBackupsInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSearchJobBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSearchJobBackupsOutput
 * //   Results: [ // SearchJobBackupsResults // required
 * //     { // SearchJobBackupsResult
 * //       Status: "RUNNING" || "COMPLETED" || "STOPPING" || "STOPPED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       ResourceType: "S3" || "EBS",
 * //       BackupResourceArn: "STRING_VALUE",
 * //       SourceResourceArn: "STRING_VALUE",
 * //       IndexCreationTime: new Date("TIMESTAMP"),
 * //       BackupCreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSearchJobBackupsCommandInput - {@link ListSearchJobBackupsCommandInput}
 * @returns {@link ListSearchJobBackupsCommandOutput}
 * @see {@link ListSearchJobBackupsCommandInput} for command's `input` shape.
 * @see {@link ListSearchJobBackupsCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found for this request.</p> <p>Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link BackupSearchServiceException}
 * <p>Base exception class for all service exceptions from BackupSearch service.</p>
 *
 *
 * @public
 */
export class ListSearchJobBackupsCommand extends $Command
  .classBuilder<
    ListSearchJobBackupsCommandInput,
    ListSearchJobBackupsCommandOutput,
    BackupSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoBackupSearchService", "ListSearchJobBackups", {})
  .n("BackupSearchClient", "ListSearchJobBackupsCommand")
  .sc(ListSearchJobBackups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSearchJobBackupsInput;
      output: ListSearchJobBackupsOutput;
    };
    sdk: {
      input: ListSearchJobBackupsCommandInput;
      output: ListSearchJobBackupsCommandOutput;
    };
  };
}
