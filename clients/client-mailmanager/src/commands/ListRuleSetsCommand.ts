// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { ListRuleSetsRequest, ListRuleSetsResponse } from "../models/models_0";
import { ListRuleSets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleSetsCommand}.
 */
export interface ListRuleSetsCommandInput extends ListRuleSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleSetsCommand}.
 */
export interface ListRuleSetsCommandOutput extends ListRuleSetsResponse, __MetadataBearer {}

/**
 * <p>List rule sets for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListRuleSetsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListRuleSetsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListRuleSetsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListRuleSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleSetsResponse
 * //   RuleSets: [ // RuleSets // required
 * //     { // RuleSet
 * //       RuleSetId: "STRING_VALUE",
 * //       RuleSetName: "STRING_VALUE",
 * //       LastModificationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleSetsCommandInput - {@link ListRuleSetsCommandInput}
 * @returns {@link ListRuleSetsCommandOutput}
 * @see {@link ListRuleSetsCommandInput} for command's `input` shape.
 * @see {@link ListRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class ListRuleSetsCommand extends $Command
  .classBuilder<
    ListRuleSetsCommandInput,
    ListRuleSetsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListRuleSets", {})
  .n("MailManagerClient", "ListRuleSetsCommand")
  .sc(ListRuleSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleSetsRequest;
      output: ListRuleSetsResponse;
    };
    sdk: {
      input: ListRuleSetsCommandInput;
      output: ListRuleSetsCommandOutput;
    };
  };
}
