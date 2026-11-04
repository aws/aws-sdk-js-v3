// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeThemeAliasRequest, DescribeThemeAliasResponse } from "../models/models_4";
import { DescribeThemeAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the alias for a theme.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeThemeAliasCommand extends command<DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput>(
  _ep0,
  _mw0,
  "DescribeThemeAlias",
  DescribeThemeAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThemeAliasRequest;
      output: DescribeThemeAliasResponse;
    };
    sdk: {
      input: DescribeThemeAliasCommandInput;
      output: DescribeThemeAliasCommandOutput;
    };
  };
}
