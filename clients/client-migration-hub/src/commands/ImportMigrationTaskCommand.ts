// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0";
import { ImportMigrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.
 *
 * This API is a prerequisite to calling the `NotifyMigrationTaskState` API as the migration tool must first register the migration task with Migration Hub.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DryRunOperation} (client fault)
 *
 * Exception raised to indicate a successfully authorized action when the `DryRun` flag is set to "true".
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home region is not set. Set the home region to continue.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception raised when the request references a resource (Application Discovery Service configuration, update stream, migration task, etc.) that does not exist in Application Discovery Service (Application Discovery Service) or in Migration Hub's repository.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when there is an internal, configuration, or dependency error encountered.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Exception raised to indicate a request was not authorized when the `DryRun` flag is set to "true".
 *
 * @throws {@link MigrationHubServiceException}
 *
 * Base exception class for all service exceptions from MigrationHub service.
 *
 * @public
 */
export class ImportMigrationTaskCommand extends command<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput>(
  _ep0,
  _mw0,
  "ImportMigrationTask",
  ImportMigrationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportMigrationTaskRequest;
      output: {};
    };
    sdk: {
      input: ImportMigrationTaskCommandInput;
      output: ImportMigrationTaskCommandOutput;
    };
  };
}
