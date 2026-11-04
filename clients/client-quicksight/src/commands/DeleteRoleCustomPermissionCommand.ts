// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRoleCustomPermissionRequest, DeleteRoleCustomPermissionResponse } from "../models/models_3";
import { DeleteRoleCustomPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRoleCustomPermissionCommand}.
 */
export interface DeleteRoleCustomPermissionCommandInput extends DeleteRoleCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoleCustomPermissionCommand}.
 */
export interface DeleteRoleCustomPermissionCommandOutput extends DeleteRoleCustomPermissionResponse, __MetadataBearer {}

/**
 * Removes custom permissions from the role.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteRoleCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteRoleCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteRoleCustomPermissionRequest
 *   Role: "ADMIN" || "AUTHOR" || "READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoleCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRoleCustomPermissionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteRoleCustomPermissionCommandInput - {@link DeleteRoleCustomPermissionCommandInput}
 * @returns {@link DeleteRoleCustomPermissionCommandOutput}
 * @see {@link DeleteRoleCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleCustomPermissionCommandOutput} for command's `response` shape.
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
export class DeleteRoleCustomPermissionCommand extends command<DeleteRoleCustomPermissionCommandInput, DeleteRoleCustomPermissionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRoleCustomPermission",
  DeleteRoleCustomPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoleCustomPermissionRequest;
      output: DeleteRoleCustomPermissionResponse;
    };
    sdk: {
      input: DeleteRoleCustomPermissionCommandInput;
      output: DeleteRoleCustomPermissionCommandOutput;
    };
  };
}
