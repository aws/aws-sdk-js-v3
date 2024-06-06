// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMailboxExportJobsRequest, ListMailboxExportJobsResponse } from "../models/models_0";
import { de_ListMailboxExportJobsCommand, se_ListMailboxExportJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMailboxExportJobsCommand}.
 */
export interface ListMailboxExportJobsCommandInput extends ListMailboxExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMailboxExportJobsCommand}.
 */
export interface ListMailboxExportJobsCommandOutput extends ListMailboxExportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the mailbox export jobs started for the specified organization within the last
 *          seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMailboxExportJobsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMailboxExportJobsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListMailboxExportJobsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMailboxExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMailboxExportJobsResponse
 * //   Jobs: [ // Jobs
 * //     { // MailboxExportJob
 * //       JobId: "STRING_VALUE",
 * //       EntityId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       S3Path: "STRING_VALUE",
 * //       EstimatedProgress: Number("int"),
 * //       State: "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMailboxExportJobsCommandInput - {@link ListMailboxExportJobsCommandInput}
 * @returns {@link ListMailboxExportJobsCommandOutput}
 * @see {@link ListMailboxExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListMailboxExportJobsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class ListMailboxExportJobsCommand extends $Command
  .classBuilder<
    ListMailboxExportJobsCommandInput,
    ListMailboxExportJobsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "ListMailboxExportJobs", {})
  .n("WorkMailClient", "ListMailboxExportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListMailboxExportJobsCommand)
  .de(de_ListMailboxExportJobsCommand)
  .build() {}
