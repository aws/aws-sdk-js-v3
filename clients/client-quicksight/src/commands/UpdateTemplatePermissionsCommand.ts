// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTemplatePermissionsRequest, UpdateTemplatePermissionsResponse } from "../models/models_5";
import { de_UpdateTemplatePermissionsCommand, se_UpdateTemplatePermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplatePermissionsCommand}.
 */
export interface UpdateTemplatePermissionsCommandInput extends UpdateTemplatePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTemplatePermissionsCommand}.
 */
export interface UpdateTemplatePermissionsCommandOutput extends UpdateTemplatePermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the resource permissions for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateTemplatePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplatePermissionsResponse
 * //   TemplateId: "STRING_VALUE",
 * //   TemplateArn: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param UpdateTemplatePermissionsCommandInput - {@link UpdateTemplatePermissionsCommandInput}
 * @returns {@link UpdateTemplatePermissionsCommandOutput}
 * @see {@link UpdateTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplatePermissionsCommandOutput} for command's `response` shape.
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
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class UpdateTemplatePermissionsCommand extends $Command
  .classBuilder<
    UpdateTemplatePermissionsCommandInput,
    UpdateTemplatePermissionsCommandOutput,
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
  .s("QuickSight_20180401", "UpdateTemplatePermissions", {})
  .n("QuickSightClient", "UpdateTemplatePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTemplatePermissionsCommand)
  .de(de_UpdateTemplatePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTemplatePermissionsRequest;
      output: UpdateTemplatePermissionsResponse;
    };
    sdk: {
      input: UpdateTemplatePermissionsCommandInput;
      output: UpdateTemplatePermissionsCommandOutput;
    };
  };
}
