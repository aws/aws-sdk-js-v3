// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountCustomizationRequest, UpdateAccountCustomizationResponse } from "../models/models_5";
import { de_UpdateAccountCustomizationCommand, se_UpdateAccountCustomizationCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountCustomizationCommand}.
 */
export interface UpdateAccountCustomizationCommandInput extends UpdateAccountCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountCustomizationCommand}.
 */
export interface UpdateAccountCustomizationCommandOutput extends UpdateAccountCustomizationResponse, __MetadataBearer {}

/**
 * <p>Updates Amazon QuickSight customizations. Currently, the only customization that you can use is a theme.</p>
 *          <p>You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a
 *             QuickSight namespace instead. Customizations that apply to a namespace override
 *             customizations that apply to an Amazon Web Services account. To find out which customizations apply, use
 *             the <code>DescribeAccountCustomization</code> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAccountCustomizationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   AccountCustomization: { // AccountCustomization
 *     DefaultTheme: "STRING_VALUE",
 *     DefaultEmailCustomizationTemplate: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountCustomizationResponse
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
 * @param UpdateAccountCustomizationCommandInput - {@link UpdateAccountCustomizationCommandInput}
 * @returns {@link UpdateAccountCustomizationCommandOutput}
 * @see {@link UpdateAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomizationCommandOutput} for command's `response` shape.
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
export class UpdateAccountCustomizationCommand extends $Command
  .classBuilder<
    UpdateAccountCustomizationCommandInput,
    UpdateAccountCustomizationCommandOutput,
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
  .s("QuickSight_20180401", "UpdateAccountCustomization", {})
  .n("QuickSightClient", "UpdateAccountCustomizationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountCustomizationCommand)
  .de(de_UpdateAccountCustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountCustomizationRequest;
      output: UpdateAccountCustomizationResponse;
    };
    sdk: {
      input: UpdateAccountCustomizationCommandInput;
      output: UpdateAccountCustomizationCommandOutput;
    };
  };
}
