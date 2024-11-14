// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeThemePermissionsRequest, DescribeThemePermissionsResponse } from "../models/models_4";
import { de_DescribeThemePermissionsCommand, se_DescribeThemePermissionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThemePermissionsCommand}.
 */
export interface DescribeThemePermissionsCommandInput extends DescribeThemePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThemePermissionsCommand}.
 */
export interface DescribeThemePermissionsCommandOutput extends DescribeThemePermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the read and write permissions for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeThemePermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeThemePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThemePermissionsResponse
 * //   ThemeId: "STRING_VALUE",
 * //   ThemeArn: "STRING_VALUE",
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
 * @param DescribeThemePermissionsCommandInput - {@link DescribeThemePermissionsCommandInput}
 * @returns {@link DescribeThemePermissionsCommandOutput}
 * @see {@link DescribeThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeThemePermissionsCommandOutput} for command's `response` shape.
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
export class DescribeThemePermissionsCommand extends $Command
  .classBuilder<
    DescribeThemePermissionsCommandInput,
    DescribeThemePermissionsCommandOutput,
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
  .s("QuickSight_20180401", "DescribeThemePermissions", {})
  .n("QuickSightClient", "DescribeThemePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeThemePermissionsCommand)
  .de(de_DescribeThemePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThemePermissionsRequest;
      output: DescribeThemePermissionsResponse;
    };
    sdk: {
      input: DescribeThemePermissionsCommandInput;
      output: DescribeThemePermissionsCommandOutput;
    };
  };
}
