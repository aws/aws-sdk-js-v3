// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDiscoveredResourceRequest, AssociateDiscoveredResourceResult } from "../models/models_0";
import { AssociateDiscoveredResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDiscoveredResourceCommand}.
 */
export interface AssociateDiscoveredResourceCommandInput extends AssociateDiscoveredResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDiscoveredResourceCommand}.
 */
export interface AssociateDiscoveredResourceCommandOutput extends AssociateDiscoveredResourceResult, __MetadataBearer {}

/**
 * Associates a discovered resource ID from Application Discovery Service with a migration task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // AssociateDiscoveredResourceRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   DiscoveredResource: { // DiscoveredResource
 *     ConfigurationId: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new AssociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDiscoveredResourceCommandInput - {@link AssociateDiscoveredResourceCommandInput}
 * @returns {@link AssociateDiscoveredResourceCommandOutput}
 * @see {@link AssociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDiscoveredResourceCommandOutput} for command's `response` shape.
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
export class AssociateDiscoveredResourceCommand extends command<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDiscoveredResource",
  AssociateDiscoveredResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDiscoveredResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateDiscoveredResourceCommandInput;
      output: AssociateDiscoveredResourceCommandOutput;
    };
  };
}
