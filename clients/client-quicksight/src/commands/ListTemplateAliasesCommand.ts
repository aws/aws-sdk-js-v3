// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplateAliasesRequest, ListTemplateAliasesResponse } from "../models/models_4";
import { ListTemplateAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplateAliasesCommand}.
 */
export interface ListTemplateAliasesCommandInput extends ListTemplateAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateAliasesCommand}.
 */
export interface ListTemplateAliasesCommandOutput extends ListTemplateAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists all the aliases of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTemplateAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTemplateAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListTemplateAliasesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTemplateAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateAliasesResponse
 * //   TemplateAliasList: [ // TemplateAliasList
 * //     { // TemplateAlias
 * //       AliasName: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       TemplateVersionNumber: Number("long"),
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateAliasesCommandInput - {@link ListTemplateAliasesCommandInput}
 * @returns {@link ListTemplateAliasesCommandOutput}
 * @see {@link ListTemplateAliasesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListTemplateAliasesCommand extends command<ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplateAliases",
  ListTemplateAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateAliasesRequest;
      output: ListTemplateAliasesResponse;
    };
    sdk: {
      input: ListTemplateAliasesCommandInput;
      output: ListTemplateAliasesCommandOutput;
    };
  };
}
