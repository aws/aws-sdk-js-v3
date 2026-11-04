// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThemeAliasRequest, CreateThemeAliasResponse } from "../models/models_3";
import { CreateThemeAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThemeAliasCommand}.
 */
export interface CreateThemeAliasCommandInput extends CreateThemeAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateThemeAliasCommand}.
 */
export interface CreateThemeAliasCommandOutput extends CreateThemeAliasResponse, __MetadataBearer {}

/**
 * Creates a theme alias for a theme.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateThemeAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 *   ThemeVersionNumber: Number("long"), // required
 * };
 * const command = new CreateThemeAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateThemeAliasResponse
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
 * @param CreateThemeAliasCommandInput - {@link CreateThemeAliasCommandInput}
 * @returns {@link CreateThemeAliasCommandOutput}
 * @see {@link CreateThemeAliasCommandInput} for command's `input` shape.
 * @see {@link CreateThemeAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
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
export class CreateThemeAliasCommand extends command<CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateThemeAlias",
  CreateThemeAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThemeAliasRequest;
      output: CreateThemeAliasResponse;
    };
    sdk: {
      input: CreateThemeAliasCommandInput;
      output: CreateThemeAliasCommandOutput;
    };
  };
}
