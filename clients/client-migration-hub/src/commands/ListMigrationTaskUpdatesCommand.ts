// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListMigrationTaskUpdatesRequest, ListMigrationTaskUpdatesResult } from "../models/models_0";
import { ListMigrationTaskUpdates } from "../schemas/schemas_4_Migration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMigrationTaskUpdatesCommand}.
 */
export interface ListMigrationTaskUpdatesCommandInput extends ListMigrationTaskUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListMigrationTaskUpdatesCommand}.
 */
export interface ListMigrationTaskUpdatesCommandOutput extends ListMigrationTaskUpdatesResult, __MetadataBearer {}

/**
 * <p>This is a paginated API that returns all the migration-task states for the specified
 *             <code>MigrationTaskName</code> and <code>ProgressUpdateStream</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListMigrationTaskUpdatesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListMigrationTaskUpdatesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // ListMigrationTaskUpdatesRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMigrationTaskUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListMigrationTaskUpdatesResult
 * //   NextToken: "STRING_VALUE",
 * //   MigrationTaskUpdateList: [ // MigrationTaskUpdateList
 * //     { // MigrationTaskUpdate
 * //       UpdateDateTime: new Date("TIMESTAMP"),
 * //       UpdateType: "MIGRATION_TASK_STATE_UPDATED",
 * //       MigrationTaskState: { // Task
 * //         Status: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * //         StatusDetail: "STRING_VALUE",
 * //         ProgressPercent: Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMigrationTaskUpdatesCommandInput - {@link ListMigrationTaskUpdatesCommandInput}
 * @returns {@link ListMigrationTaskUpdatesCommandOutput}
 * @see {@link ListMigrationTaskUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListMigrationTaskUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
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
export class ListMigrationTaskUpdatesCommand extends $Command
  .classBuilder<
    ListMigrationTaskUpdatesCommandInput,
    ListMigrationTaskUpdatesCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHub", "ListMigrationTaskUpdates", {})
  .n("MigrationHubClient", "ListMigrationTaskUpdatesCommand")
  .sc(ListMigrationTaskUpdates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMigrationTaskUpdatesRequest;
      output: ListMigrationTaskUpdatesResult;
    };
    sdk: {
      input: ListMigrationTaskUpdatesCommandInput;
      output: ListMigrationTaskUpdatesCommandOutput;
    };
  };
}
