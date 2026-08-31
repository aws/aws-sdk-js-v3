// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAppPermissionsRequest, UpdateAppPermissionsResponse } from "../models/models_5";
import { UpdateAppPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAppPermissionsCommand}.
 */
export interface UpdateAppPermissionsCommandInput extends UpdateAppPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppPermissionsCommand}.
 */
export interface UpdateAppPermissionsCommandOutput extends UpdateAppPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the resource permissions for an app. You can grant or revoke permissions and, optionally, change the app's visibility.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAppPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAppPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAppPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AppId: "STRING_VALUE", // required
 *   GrantPermissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokePermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Visibility: "PRIVATE" || "PUBLIC",
 * };
 * const command = new UpdateAppPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppPermissionsResponse
 * //   Arn: "STRING_VALUE",
 * //   AppId: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Visibility: "PRIVATE" || "PUBLIC",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAppPermissionsCommandInput - {@link UpdateAppPermissionsCommandInput}
 * @returns {@link UpdateAppPermissionsCommandOutput}
 * @see {@link UpdateAppPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAppPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameter has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateAppPermissionsCommand extends command<UpdateAppPermissionsCommandInput, UpdateAppPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAppPermissions",
  UpdateAppPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppPermissionsRequest;
      output: UpdateAppPermissionsResponse;
    };
    sdk: {
      input: UpdateAppPermissionsCommandInput;
      output: UpdateAppPermissionsCommandOutput;
    };
  };
}
