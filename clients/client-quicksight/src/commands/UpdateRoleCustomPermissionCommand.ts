// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRoleCustomPermissionRequest, UpdateRoleCustomPermissionResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateRoleCustomPermission } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the custom permissions that are associated with a role.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
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
export class UpdateRoleCustomPermissionCommand extends $Command
  .classBuilder<
    UpdateRoleCustomPermissionCommandInput,
    UpdateRoleCustomPermissionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateRoleCustomPermission", {})
  .n("QuickSightClient", "UpdateRoleCustomPermissionCommand")
  .sc(UpdateRoleCustomPermission)
  .build() {
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
