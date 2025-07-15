// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteThemeAliasRequest } from "../models/models_3";
import { DeleteThemeAliasResponse } from "../models/models_4";
import { de_DeleteThemeAliasCommand, se_DeleteThemeAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThemeAliasCommand}.
 */
export interface DeleteThemeAliasCommandInput extends DeleteThemeAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThemeAliasCommand}.
 */
export interface DeleteThemeAliasCommandOutput extends DeleteThemeAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes the version of the theme that the specified theme alias points to.
 * 			If you provide a specific alias, you delete the version of the theme
 * 			that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteThemeAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new DeleteThemeAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteThemeAliasResponse
 * //   AliasName: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   ThemeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteThemeAliasCommandInput - {@link DeleteThemeAliasCommandInput}
 * @returns {@link DeleteThemeAliasCommandOutput}
 * @see {@link DeleteThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeAliasCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteThemeAliasCommand extends $Command
  .classBuilder<
    DeleteThemeAliasCommandInput,
    DeleteThemeAliasCommandOutput,
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
  .s("QuickSight_20180401", "DeleteThemeAlias", {})
  .n("QuickSightClient", "DeleteThemeAliasCommand")
  .f(void 0, void 0)
  .ser(se_DeleteThemeAliasCommand)
  .de(de_DeleteThemeAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThemeAliasRequest;
      output: DeleteThemeAliasResponse;
    };
    sdk: {
      input: DeleteThemeAliasCommandInput;
      output: DeleteThemeAliasCommandOutput;
    };
  };
}
