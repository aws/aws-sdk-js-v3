// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTemplateAliasesRequest, ListTemplateAliasesResponse } from "../models/models_4";
import { de_ListTemplateAliasesCommand, se_ListTemplateAliasesCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListTemplateAliasesCommand extends $Command
  .classBuilder<
    ListTemplateAliasesCommandInput,
    ListTemplateAliasesCommandOutput,
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
  .s("QuickSight_20180401", "ListTemplateAliases", {})
  .n("QuickSightClient", "ListTemplateAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListTemplateAliasesCommand)
  .de(de_ListTemplateAliasesCommand)
  .build() {
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
