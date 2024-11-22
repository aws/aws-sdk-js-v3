// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateThemeAliasRequest, UpdateThemeAliasResponse } from "../models/models_5";
import { de_UpdateThemeAliasCommand, se_UpdateThemeAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemeAliasCommand}.
 */
export interface UpdateThemeAliasCommandInput extends UpdateThemeAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemeAliasCommand}.
 */
export interface UpdateThemeAliasCommandOutput extends UpdateThemeAliasResponse, __MetadataBearer {}

/**
 * <p>Updates an alias of a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateThemeAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 *   ThemeVersionNumber: Number("long"), // required
 * };
 * const command = new UpdateThemeAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeAliasResponse
 * //   ThemeAlias: { // ThemeAlias
 * //     Arn: "STRING_VALUE",
 * //     AliasName: "STRING_VALUE",
 * //     ThemeVersionNumber: Number("long"),
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateThemeAliasCommandInput - {@link UpdateThemeAliasCommandInput}
 * @returns {@link UpdateThemeAliasCommandOutput}
 * @see {@link UpdateThemeAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class UpdateThemeAliasCommand extends $Command
  .classBuilder<
    UpdateThemeAliasCommandInput,
    UpdateThemeAliasCommandOutput,
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
  .s("QuickSight_20180401", "UpdateThemeAlias", {})
  .n("QuickSightClient", "UpdateThemeAliasCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThemeAliasCommand)
  .de(de_UpdateThemeAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThemeAliasRequest;
      output: UpdateThemeAliasResponse;
    };
    sdk: {
      input: UpdateThemeAliasCommandInput;
      output: UpdateThemeAliasCommandOutput;
    };
  };
}
