// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDataSetPermissionsRequest, UpdateDataSetPermissionsResponse } from "../models/models_5";
import { UpdateDataSetPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataSetPermissionsCommand}.
 */
export interface UpdateDataSetPermissionsCommandInput extends UpdateDataSetPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSetPermissionsCommand}.
 */
export interface UpdateDataSetPermissionsCommandOutput extends UpdateDataSetPermissionsResponse, __MetadataBearer {}

/**
 * Updates the permissions on a dataset.
 *
 * The permissions resource is `arn:aws:quicksight:region:aws-account-id:dataset/data-set-id`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSetPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDataSetPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
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
 * const command = new UpdateDataSetPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSetPermissionsResponse
 * //   DataSetArn: "STRING_VALUE",
 * //   DataSetId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDataSetPermissionsCommandInput - {@link UpdateDataSetPermissionsCommandInput}
 * @returns {@link UpdateDataSetPermissionsCommandOutput}
 * @see {@link UpdateDataSetPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class UpdateDataSetPermissionsCommand extends command<UpdateDataSetPermissionsCommandInput, UpdateDataSetPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataSetPermissions",
  UpdateDataSetPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSetPermissionsRequest;
      output: UpdateDataSetPermissionsResponse;
    };
    sdk: {
      input: UpdateDataSetPermissionsCommandInput;
      output: UpdateDataSetPermissionsCommandOutput;
    };
  };
}
