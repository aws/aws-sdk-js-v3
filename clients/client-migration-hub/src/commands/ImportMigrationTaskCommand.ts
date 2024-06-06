// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0";
import { de_ImportMigrationTaskCommand, se_ImportMigrationTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportMigrationTaskCommand}.
 */
export interface ImportMigrationTaskCommandInput extends ImportMigrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link ImportMigrationTaskCommand}.
 */
export interface ImportMigrationTaskCommandOutput extends ImportMigrationTaskResult, __MetadataBearer {}

/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // ImportMigrationTaskRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ImportMigrationTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportMigrationTaskCommandInput - {@link ImportMigrationTaskCommandInput}
 * @returns {@link ImportMigrationTaskCommandOutput}
 * @see {@link ImportMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link ImportMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DryRunOperation} (client fault)
 *  <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
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
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 * @public
 */
export class ImportMigrationTaskCommand extends $Command
  .classBuilder<
    ImportMigrationTaskCommandInput,
    ImportMigrationTaskCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "ImportMigrationTask", {})
  .n("MigrationHubClient", "ImportMigrationTaskCommand")
  .f(void 0, void 0)
  .ser(se_ImportMigrationTaskCommand)
  .de(de_ImportMigrationTaskCommand)
  .build() {}
