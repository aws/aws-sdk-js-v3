// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/models_0";
import { NotifyApplicationState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NotifyApplicationStateCommand}.
 */
export interface NotifyApplicationStateCommandInput extends NotifyApplicationStateRequest {}
/**
 * @public
 *
 * The output of {@link NotifyApplicationStateCommand}.
 */
export interface NotifyApplicationStateCommandOutput extends NotifyApplicationStateResult, __MetadataBearer {}

/**
 * Sets the migration state of an application. For a given application identified by the value passed to `ApplicationId`, its status is set or updated by passing one of three values to `Status`: `NOT_STARTED | IN_PROGRESS | COMPLETED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyApplicationStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyApplicationStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // NotifyApplicationStateRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED", // required
 *   UpdateDateTime: new Date("TIMESTAMP"),
 *   DryRun: true || false,
 * };
 * const command = new NotifyApplicationStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyApplicationStateCommandInput - {@link NotifyApplicationStateCommandInput}
 * @returns {@link NotifyApplicationStateCommandOutput}
 * @see {@link NotifyApplicationStateCommandInput} for command's `input` shape.
 * @see {@link NotifyApplicationStateCommandOutput} for command's `response` shape.
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
 * @throws {@link PolicyErrorException} (client fault)
 *
 * Exception raised when there are problems accessing Application Discovery Service (Application Discovery Service); most likely due to a misconfigured policy or the `migrationhub-discovery` role is missing or not configured correctly.
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
export class NotifyApplicationStateCommand extends command<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput>(
  _ep0,
  _mw0,
  "NotifyApplicationState",
  NotifyApplicationState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyApplicationStateRequest;
      output: {};
    };
    sdk: {
      input: NotifyApplicationStateCommandInput;
      output: NotifyApplicationStateCommandOutput;
    };
  };
}
