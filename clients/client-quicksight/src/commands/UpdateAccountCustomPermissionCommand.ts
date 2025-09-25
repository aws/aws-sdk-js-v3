// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountCustomPermissionRequest, UpdateAccountCustomPermissionResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateAccountCustomPermission } from "../schemas/schemas_4_Custom";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountCustomPermissionCommand}.
 */
export interface UpdateAccountCustomPermissionCommandInput extends UpdateAccountCustomPermissionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountCustomPermissionCommand}.
 */
export interface UpdateAccountCustomPermissionCommandOutput
  extends UpdateAccountCustomPermissionResponse,
    __MetadataBearer {}

/**
 * <p>Applies a custom permissions profile to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccountCustomPermissionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccountCustomPermissionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAccountCustomPermissionRequest
 *   CustomPermissionsName: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccountCustomPermissionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountCustomPermissionResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateAccountCustomPermissionCommandInput - {@link UpdateAccountCustomPermissionCommandInput}
 * @returns {@link UpdateAccountCustomPermissionCommandOutput}
 * @see {@link UpdateAccountCustomPermissionCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomPermissionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class UpdateAccountCustomPermissionCommand extends $Command
  .classBuilder<
    UpdateAccountCustomPermissionCommandInput,
    UpdateAccountCustomPermissionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateAccountCustomPermission", {})
  .n("QuickSightClient", "UpdateAccountCustomPermissionCommand")
  .sc(UpdateAccountCustomPermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountCustomPermissionRequest;
      output: UpdateAccountCustomPermissionResponse;
    };
    sdk: {
      input: UpdateAccountCustomPermissionCommandInput;
      output: UpdateAccountCustomPermissionCommandOutput;
    };
  };
}
