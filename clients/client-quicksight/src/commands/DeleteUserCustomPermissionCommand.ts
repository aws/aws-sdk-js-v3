// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserCustomPermissionRequest, DeleteUserCustomPermissionResponse } from "../models/models_4";
import { DeleteUserCustomPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserCustomPermissionCommand}.
 */
export interface DeleteUserCustomPermissionCommandInput extends DeleteUserCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserCustomPermissionCommand}.
 */
export interface DeleteUserCustomPermissionCommandOutput extends DeleteUserCustomPermissionResponse, __MetadataBearer {}

/**
 * Deletes a custom permissions profile from a user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteUserCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteUserCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteUserCustomPermissionRequest
 *   UserName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserCustomPermissionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteUserCustomPermissionCommandInput - {@link DeleteUserCustomPermissionCommandInput}
 * @returns {@link DeleteUserCustomPermissionCommandOutput}
 * @see {@link DeleteUserCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCustomPermissionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
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
export class DeleteUserCustomPermissionCommand extends command<DeleteUserCustomPermissionCommandInput, DeleteUserCustomPermissionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserCustomPermission",
  DeleteUserCustomPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserCustomPermissionRequest;
      output: DeleteUserCustomPermissionResponse;
    };
    sdk: {
      input: DeleteUserCustomPermissionCommandInput;
      output: DeleteUserCustomPermissionCommandOutput;
    };
  };
}
