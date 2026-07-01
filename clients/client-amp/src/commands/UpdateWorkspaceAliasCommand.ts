// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceAliasRequest } from "../models/models_0";
import { UpdateWorkspaceAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceAliasCommand}.
 */
export interface UpdateWorkspaceAliasCommandInput extends UpdateWorkspaceAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceAliasCommand}.
 */
export interface UpdateWorkspaceAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the alias of an existing workspace. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceAliasCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceAliasCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // UpdateWorkspaceAliasRequest
 *   workspaceId: "STRING_VALUE", // required
 *   alias: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceAliasCommandInput - {@link UpdateWorkspaceAliasCommandInput}
 * @returns {@link UpdateWorkspaceAliasCommandOutput}
 * @see {@link UpdateWorkspaceAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAliasCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class UpdateWorkspaceAliasCommand extends command<UpdateWorkspaceAliasCommandInput, UpdateWorkspaceAliasCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspaceAlias",
  UpdateWorkspaceAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceAliasRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceAliasCommandInput;
      output: UpdateWorkspaceAliasCommandOutput;
    };
  };
}
