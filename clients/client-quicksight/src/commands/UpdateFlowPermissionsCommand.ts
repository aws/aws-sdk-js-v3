// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFlowPermissionsInput, UpdateFlowPermissionsOutput } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateFlowPermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowPermissionsCommand}.
 */
export interface UpdateFlowPermissionsCommandInput extends UpdateFlowPermissionsInput {}
/**
 * @public
 *
 * The output of {@link UpdateFlowPermissionsCommand}.
 */
export interface UpdateFlowPermissionsCommandOutput extends UpdateFlowPermissionsOutput, __MetadataBearer {}

/**
 * <p>Updates permissions against principals on a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateFlowPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateFlowPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateFlowPermissionsInput
 *   AwsAccountId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 *   GrantPermissions: [ // UpdateFlowPermissionsInputGrantPermissionsList
 *     { // Permission
 *       Actions: [ // ActionsList // required
 *         "STRING_VALUE",
 *       ],
 *       Principal: "STRING_VALUE", // required
 *     },
 *   ],
 *   RevokePermissions: [ // UpdateFlowPermissionsInputRevokePermissionsList
 *     {
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *       Principal: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateFlowPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowPermissionsOutput
 * //   Status: Number("int"),
 * //   Arn: "STRING_VALUE", // required
 * //   Permissions: [ // PermissionsList // required
 * //     { // Permission
 * //       Actions: [ // ActionsList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Principal: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE", // required
 * //   FlowId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFlowPermissionsCommandInput - {@link UpdateFlowPermissionsCommandInput}
 * @returns {@link UpdateFlowPermissionsCommandOutput}
 * @see {@link UpdateFlowPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowPermissionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateFlowPermissionsCommand extends $Command
  .classBuilder<
    UpdateFlowPermissionsCommandInput,
    UpdateFlowPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateFlowPermissions", {})
  .n("QuickSightClient", "UpdateFlowPermissionsCommand")
  .sc(UpdateFlowPermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowPermissionsInput;
      output: UpdateFlowPermissionsOutput;
    };
    sdk: {
      input: UpdateFlowPermissionsCommandInput;
      output: UpdateFlowPermissionsCommandOutput;
    };
  };
}
