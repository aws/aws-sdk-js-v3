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
 * Updates the alias of an existing workspace.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Completing the request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
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
