// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceVisibilityRequest, UpdateWorkspaceVisibilityResponse } from "../models/models_4";
import { UpdateWorkspaceVisibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceVisibilityCommand}.
 */
export interface UpdateWorkspaceVisibilityCommandInput extends UpdateWorkspaceVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceVisibilityCommand}.
 */
export interface UpdateWorkspaceVisibilityCommandOutput extends UpdateWorkspaceVisibilityResponse, __MetadataBearer {}

/**
 * Updates the visibility setting of a workspace, controlling whether it is available to all users, assigned users only, or none.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateWorkspaceVisibilityCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateWorkspaceVisibilityCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateWorkspaceVisibilityRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Visibility: "ALL" || "ASSIGNED" || "NONE", // required
 * };
 * const command = new UpdateWorkspaceVisibilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceVisibilityCommandInput - {@link UpdateWorkspaceVisibilityCommandInput}
 * @returns {@link UpdateWorkspaceVisibilityCommandOutput}
 * @see {@link UpdateWorkspaceVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceVisibilityCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateWorkspaceVisibilityCommand extends command<UpdateWorkspaceVisibilityCommandInput, UpdateWorkspaceVisibilityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspaceVisibility",
  UpdateWorkspaceVisibility$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceVisibilityRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceVisibilityCommandInput;
      output: UpdateWorkspaceVisibilityCommandOutput;
    };
  };
}
