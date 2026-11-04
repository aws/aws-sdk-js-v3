// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoleCustomPermissionRequest, UpdateRoleCustomPermissionResponse } from "../models/models_5";
import { UpdateRoleCustomPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoleCustomPermissionCommand}.
 */
export interface UpdateRoleCustomPermissionCommandInput extends UpdateRoleCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoleCustomPermissionCommand}.
 */
export interface UpdateRoleCustomPermissionCommandOutput extends UpdateRoleCustomPermissionResponse, __MetadataBearer {}

/**
 * Updates the custom permissions that are associated with a role.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateRoleCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateRoleCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateRoleCustomPermissionRequest
 *   CustomPermissionsName: "STRING_VALUE", // required
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new UpdateRoleCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoleCustomPermissionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateRoleCustomPermissionCommandInput - {@link UpdateRoleCustomPermissionCommandInput}
 * @returns {@link UpdateRoleCustomPermissionCommandOutput}
 * @see {@link UpdateRoleCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleCustomPermissionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateRoleCustomPermissionCommand extends command<UpdateRoleCustomPermissionCommandInput, UpdateRoleCustomPermissionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoleCustomPermission",
  UpdateRoleCustomPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoleCustomPermissionRequest;
      output: UpdateRoleCustomPermissionResponse;
    };
    sdk: {
      input: UpdateRoleCustomPermissionCommandInput;
      output: UpdateRoleCustomPermissionCommandOutput;
    };
  };
}
