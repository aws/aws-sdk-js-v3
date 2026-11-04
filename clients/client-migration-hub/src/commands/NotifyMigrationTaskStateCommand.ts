// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NotifyMigrationTaskStateRequest, NotifyMigrationTaskStateResult } from "../models/models_0";
import { NotifyMigrationTaskState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NotifyMigrationTaskStateCommand}.
 */
export interface NotifyMigrationTaskStateCommandInput extends NotifyMigrationTaskStateRequest {}
/**
 * @public
 *
 * The output of {@link NotifyMigrationTaskStateCommand}.
 */
export interface NotifyMigrationTaskStateCommandOutput extends NotifyMigrationTaskStateResult, __MetadataBearer {}

/**
 * Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:
 *
 * - Migration tools will call the `NotifyMigrationTaskState` API to share the latest progress and status.
 * - `MigrationTaskName` is used for addressing updates to the correct target.
 * - `ProgressUpdateStream` is used for access control and to provide a namespace for each migration tool.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyMigrationTaskStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyMigrationTaskStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // NotifyMigrationTaskStateRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   Task: { // Task
 *     Status: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 *     StatusDetail: "STRING_VALUE",
 *     ProgressPercent: Number("int"),
 *   },
 *   UpdateDateTime: new Date("TIMESTAMP"), // required
 *   NextUpdateSeconds: Number("int"), // required
 *   DryRun: true || false,
 * };
 * const command = new NotifyMigrationTaskStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyMigrationTaskStateCommandInput - {@link NotifyMigrationTaskStateCommandInput}
 * @returns {@link NotifyMigrationTaskStateCommandOutput}
 * @see {@link NotifyMigrationTaskStateCommandInput} for command's `input` shape.
 * @see {@link NotifyMigrationTaskStateCommandOutput} for command's `response` shape.
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
export class NotifyMigrationTaskStateCommand extends command<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput>(
  _ep0,
  _mw0,
  "NotifyMigrationTaskState",
  NotifyMigrationTaskState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyMigrationTaskStateRequest;
      output: {};
    };
    sdk: {
      input: NotifyMigrationTaskStateCommandInput;
      output: NotifyMigrationTaskStateCommandOutput;
    };
  };
}
