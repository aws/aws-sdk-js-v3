// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeThemeAliasRequest, DescribeThemeAliasResponse } from "../models/models_3";
import { de_DescribeThemeAliasCommand, se_DescribeThemeAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThemeAliasCommand}.
 */
export interface DescribeThemeAliasCommandInput extends DescribeThemeAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThemeAliasCommand}.
 */
export interface DescribeThemeAliasCommandOutput extends DescribeThemeAliasResponse, __MetadataBearer {}

/**
 * <p>Describes the alias for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeThemeAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThemeAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThemeAliasResponse
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
 * @param DescribeThemeAliasCommandInput - {@link DescribeThemeAliasCommandInput}
 * @returns {@link DescribeThemeAliasCommandOutput}
 * @see {@link DescribeThemeAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeAliasCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeThemeAliasCommand extends $Command
  .classBuilder<
    DescribeThemeAliasCommandInput,
    DescribeThemeAliasCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeThemeAlias", {})
  .n("QuickSightClient", "DescribeThemeAliasCommand")
  .f(void 0, void 0)
  .ser(se_DescribeThemeAliasCommand)
  .de(de_DescribeThemeAliasCommand)
  .build() {}
