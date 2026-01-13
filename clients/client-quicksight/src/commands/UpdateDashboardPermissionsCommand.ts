// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDashboardPermissionsRequest, UpdateDashboardPermissionsResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDashboardPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardPermissionsCommand}.
 */
export interface UpdateDashboardPermissionsCommandInput extends UpdateDashboardPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardPermissionsCommand}.
 */
export interface UpdateDashboardPermissionsCommandOutput extends UpdateDashboardPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates read and write permissions on a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDashboardPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   GrantPermissions: [ // UpdateResourcePermissionList
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
 *   GrantLinkPermissions: [ // UpdateLinkPermissionList
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokeLinkPermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateDashboardPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardPermissionsResponse
 * //   DashboardArn: "STRING_VALUE",
 * //   DashboardId: "STRING_VALUE",
 * //   Permissions: [ // UpdateResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   LinkSharingConfiguration: { // LinkSharingConfiguration
 * //     Permissions: [ // ResourcePermissionList
 * //       {
 * //         Principal: "STRING_VALUE", // required
 * //         Actions: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDashboardPermissionsCommandInput - {@link UpdateDashboardPermissionsCommandInput}
 * @returns {@link UpdateDashboardPermissionsCommandOutput}
 * @see {@link UpdateDashboardPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateDashboardPermissionsCommand extends $Command
  .classBuilder<
    UpdateDashboardPermissionsCommandInput,
    UpdateDashboardPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateDashboardPermissions", {})
  .n("QuickSightClient", "UpdateDashboardPermissionsCommand")
  .sc(UpdateDashboardPermissions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardPermissionsRequest;
      output: UpdateDashboardPermissionsResponse;
    };
    sdk: {
      input: UpdateDashboardPermissionsCommandInput;
      output: UpdateDashboardPermissionsCommandOutput;
    };
  };
}
