// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListMemberAccountsRequest, ListMemberAccountsResponse } from "../models/models_0";
import { de_ListMemberAccountsCommand, se_ListMemberAccountsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMemberAccountsCommand}.
 */
export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListMemberAccountsCommand}.
 */
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResponse, __MetadataBearer {}

/**
 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
 *       administrator's Amazon Web Services organization.</p>
 *          <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListMemberAccountsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListMemberAccountsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListMemberAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListMemberAccountsResponse
 * //   MemberAccounts: [ // MemberAccounts
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMemberAccountsCommandInput - {@link ListMemberAccountsCommandInput}
 * @returns {@link ListMemberAccountsCommandOutput}
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class ListMemberAccountsCommand extends $Command
  .classBuilder<
    ListMemberAccountsCommandInput,
    ListMemberAccountsCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "ListMemberAccounts", {})
  .n("FMSClient", "ListMemberAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListMemberAccountsCommand)
  .de(de_ListMemberAccountsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemberAccountsRequest;
      output: ListMemberAccountsResponse;
    };
    sdk: {
      input: ListMemberAccountsCommandInput;
      output: ListMemberAccountsCommandOutput;
    };
  };
}
