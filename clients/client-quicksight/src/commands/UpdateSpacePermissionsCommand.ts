// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSpacePermissionsRequest, UpdateSpacePermissionsResponse } from "../models/models_5";
import { UpdateSpacePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSpacePermissionsCommand}.
 */
export interface UpdateSpacePermissionsCommandInput extends UpdateSpacePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpacePermissionsCommand}.
 */
export interface UpdateSpacePermissionsCommandOutput extends UpdateSpacePermissionsResponse, __MetadataBearer {}

/**
 * Updates the permissions for an Amazon QuickSight space.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateSpacePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateSpacePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateSpacePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SpaceId: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateSpacePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSpacePermissionsResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   requestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSpacePermissionsCommandInput - {@link UpdateSpacePermissionsCommandInput}
 * @returns {@link UpdateSpacePermissionsCommandOutput}
 * @see {@link UpdateSpacePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateSpacePermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateSpacePermissionsCommand extends command<UpdateSpacePermissionsCommandInput, UpdateSpacePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSpacePermissions",
  UpdateSpacePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpacePermissionsRequest;
      output: UpdateSpacePermissionsResponse;
    };
    sdk: {
      input: UpdateSpacePermissionsCommandInput;
      output: UpdateSpacePermissionsCommandOutput;
    };
  };
}
