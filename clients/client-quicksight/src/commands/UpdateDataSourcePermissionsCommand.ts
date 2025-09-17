// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataSourcePermissionsRequest, UpdateDataSourcePermissionsResponse } from "../models/models_5";
import {
  de_UpdateDataSourcePermissionsCommand,
  se_UpdateDataSourcePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourcePermissionsCommand}.
 */
export interface UpdateDataSourcePermissionsCommandInput extends UpdateDataSourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourcePermissionsCommand}.
 */
export interface UpdateDataSourcePermissionsCommandOutput
  extends UpdateDataSourcePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the permissions to a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDataSourcePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
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
 * const command = new UpdateDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourcePermissionsResponse
 * //   DataSourceArn: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDataSourcePermissionsCommandInput - {@link UpdateDataSourcePermissionsCommandInput}
 * @returns {@link UpdateDataSourcePermissionsCommandOutput}
 * @see {@link UpdateDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class UpdateDataSourcePermissionsCommand extends $Command
  .classBuilder<
    UpdateDataSourcePermissionsCommandInput,
    UpdateDataSourcePermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateDataSourcePermissions", {})
  .n("QuickSightClient", "UpdateDataSourcePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataSourcePermissionsCommand)
  .de(de_UpdateDataSourcePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSourcePermissionsRequest;
      output: UpdateDataSourcePermissionsResponse;
    };
    sdk: {
      input: UpdateDataSourcePermissionsCommandInput;
      output: UpdateDataSourcePermissionsCommandOutput;
    };
  };
}
