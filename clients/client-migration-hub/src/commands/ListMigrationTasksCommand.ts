// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListMigrationTasksRequest, ListMigrationTasksResult } from "../models/models_0";
import { de_ListMigrationTasksCommand, se_ListMigrationTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMigrationTasksCommand}.
 */
export interface ListMigrationTasksCommandInput extends ListMigrationTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListMigrationTasksCommand}.
 */
export interface ListMigrationTasksCommandOutput extends ListMigrationTasksResult, __MetadataBearer {}

/**
 * <p>Lists all, or filtered by resource name, migration tasks associated with the user
 *          account making this call. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Can show a summary list of the most recent migration tasks.</p>
 *             </li>
 *             <li>
 *                <p>Can show a summary list of migration tasks associated with a given discovered
 *                resource.</p>
 *             </li>
 *             <li>
 *                <p>Lists migration tasks in a paginated interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListMigrationTasksCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListMigrationTasksCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // ListMigrationTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceName: "STRING_VALUE",
 * };
 * const command = new ListMigrationTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListMigrationTasksResult
 * //   NextToken: "STRING_VALUE",
 * //   MigrationTaskSummaryList: [ // MigrationTaskSummaryList
 * //     { // MigrationTaskSummary
 * //       ProgressUpdateStream: "STRING_VALUE",
 * //       MigrationTaskName: "STRING_VALUE",
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       ProgressPercent: Number("int"),
 * //       StatusDetail: "STRING_VALUE",
 * //       UpdateDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMigrationTasksCommandInput - {@link ListMigrationTasksCommandInput}
 * @returns {@link ListMigrationTasksCommandOutput}
 * @see {@link ListMigrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListMigrationTasksCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link PolicyErrorException} (client fault)
 *  <p>Exception raised when there are problems accessing Application Discovery Service
 *          (Application Discovery Service); most likely due to a misconfigured policy or the
 *             <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 *
 * @public
 */
export class ListMigrationTasksCommand extends $Command
  .classBuilder<
    ListMigrationTasksCommandInput,
    ListMigrationTasksCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "ListMigrationTasks", {})
  .n("MigrationHubClient", "ListMigrationTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListMigrationTasksCommand)
  .de(de_ListMigrationTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMigrationTasksRequest;
      output: ListMigrationTasksResult;
    };
    sdk: {
      input: ListMigrationTasksCommandInput;
      output: ListMigrationTasksCommandOutput;
    };
  };
}
