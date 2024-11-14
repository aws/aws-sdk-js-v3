// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccountAliasesRequest, ListAccountAliasesResponse } from "../models/models_0";
import { de_ListAccountAliasesCommand, se_ListAccountAliasesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAliasesCommand}.
 */
export interface ListAccountAliasesCommandInput extends ListAccountAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAliasesCommand}.
 */
export interface ListAccountAliasesCommandOutput extends ListAccountAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the account alias associated with the Amazon Web Services account (Note: you can have only
 *             one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html">Creating,
 *                 deleting, and listing an Amazon Web Services account alias</a> in the <i>Amazon Web Services Sign-In
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccountAliasesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccountAliasesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListAccountAliasesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAliasesResponse
 * //   AccountAliases: [ // accountAliasListType // required
 * //     "STRING_VALUE",
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAliasesCommandInput - {@link ListAccountAliasesCommandInput}
 * @returns {@link ListAccountAliasesCommandOutput}
 * @see {@link ListAccountAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAccountAliasesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list account aliases
 * ```javascript
 * // The following command lists the aliases for the current account.
 * const input = {};
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountAliases": [
 *     "exmaple-corporation"
 *   ]
 * }
 * *\/
 * // example id: e27b457a-16f9-4e05-a006-3df7b3472741
 * ```
 *
 */
export class ListAccountAliasesCommand extends $Command
  .classBuilder<
    ListAccountAliasesCommandInput,
    ListAccountAliasesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListAccountAliases", {})
  .n("IAMClient", "ListAccountAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountAliasesCommand)
  .de(de_ListAccountAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAliasesRequest;
      output: ListAccountAliasesResponse;
    };
    sdk: {
      input: ListAccountAliasesCommandInput;
      output: ListAccountAliasesCommandOutput;
    };
  };
}
