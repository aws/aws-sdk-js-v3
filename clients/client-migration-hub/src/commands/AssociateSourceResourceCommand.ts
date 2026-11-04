// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSourceResourceRequest, AssociateSourceResourceResult } from "../models/models_0";
import { AssociateSourceResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSourceResourceCommand}.
 */
export interface AssociateSourceResourceCommandInput extends AssociateSourceResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceResourceCommand}.
 */
export interface AssociateSourceResourceCommandOutput extends AssociateSourceResourceResult, __MetadataBearer {}

/**
 * Associates a source resource with a migration task. For example, the source resource can be a source server, an application, or a migration wave.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateSourceResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateSourceResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * // import type { MigrationHubClientConfig } from "@aws-sdk/client-migration-hub";
 * const config = {}; // type is MigrationHubClientConfig
 * const client = new MigrationHubClient(config);
 * const input = { // AssociateSourceResourceRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   SourceResource: { // SourceResource
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     StatusDetail: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new AssociateSourceResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSourceResourceCommandInput - {@link AssociateSourceResourceCommandInput}
 * @returns {@link AssociateSourceResourceCommandOutput}
 * @see {@link AssociateSourceResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceResourceCommandOutput} for command's `response` shape.
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
export class AssociateSourceResourceCommand extends command<AssociateSourceResourceCommandInput, AssociateSourceResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSourceResource",
  AssociateSourceResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateSourceResourceCommandInput;
      output: AssociateSourceResourceCommandOutput;
    };
  };
}
