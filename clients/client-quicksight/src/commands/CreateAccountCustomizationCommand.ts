// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccountCustomizationRequest, CreateAccountCustomizationResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateAccountCustomization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountCustomizationCommand}.
 */
export interface CreateAccountCustomizationCommandInput extends CreateAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountCustomizationCommand}.
 */
export interface CreateAccountCustomizationCommandOutput extends CreateAccountCustomizationResponse, __MetadataBearer {}

/**
 * <p>Creates Amazon Quick Sight customizations. Currently, you can add a custom default theme by using the
 *             <code>CreateAccountCustomization</code> or <code>UpdateAccountCustomization</code>
 *             API operation. To further customize Amazon Quick Sight by removing Amazon Quick Sight
 *             sample assets and videos for all new users, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight.html">Customizing Quick Sight</a> in the <i>Amazon Quick Sight User Guide.</i>
 *          </p>
 *          <p>You can create customizations for your Amazon Web Services account or, if you specify a namespace, for
 *             a Quick Sight namespace instead. Customizations that apply to a namespace always override
 *             customizations that apply to an Amazon Web Services account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation.</p>
 *          <p>Before you use the <code>CreateAccountCustomization</code> API operation to add a theme
 *             as the namespace default, make sure that you first share the theme with the namespace.
 *             If you don't share it with the namespace, the theme isn't visible to your users
 *             even if you make it the default theme.
 *             To check if the theme is shared, view the current permissions by using the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html">DescribeThemePermissions</a>
 *             </code>
 *             API operation.
 *             To share the theme, grant permissions by using the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html">UpdateThemePermissions</a>
 *             </code>
 *             API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   AccountCustomization: { // AccountCustomization
 *     DefaultTheme: "STRING_VALUE",
 *     DefaultEmailCustomizationTemplate: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountCustomizationResponse
 * //   Arn: "STRING_VALUE",
 * //   AwsAccountId: "STRING_VALUE",
 * //   Namespace: "STRING_VALUE",
 * //   AccountCustomization: { // AccountCustomization
 * //     DefaultTheme: "STRING_VALUE",
 * //     DefaultEmailCustomizationTemplate: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateAccountCustomizationCommandInput - {@link CreateAccountCustomizationCommandInput}
 * @returns {@link CreateAccountCustomizationCommandOutput}
 * @see {@link CreateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCustomizationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateAccountCustomizationCommand extends $Command
  .classBuilder<
    CreateAccountCustomizationCommandInput,
    CreateAccountCustomizationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateAccountCustomization", {})
  .n("QuickSightClient", "CreateAccountCustomizationCommand")
  .sc(CreateAccountCustomization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountCustomizationRequest;
      output: CreateAccountCustomizationResponse;
    };
    sdk: {
      input: CreateAccountCustomizationCommandInput;
      output: CreateAccountCustomizationCommandOutput;
    };
  };
}
