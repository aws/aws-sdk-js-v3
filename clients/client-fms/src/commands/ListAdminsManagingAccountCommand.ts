// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { ListAdminsManagingAccountRequest, ListAdminsManagingAccountResponse } from "../models/models_0";
import { ListAdminsManagingAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandInput extends ListAdminsManagingAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandOutput extends ListAdminsManagingAccountResponse, __MetadataBearer {}

/**
 * <p>Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAdminsManagingAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAdminsManagingAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListAdminsManagingAccountRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAdminsManagingAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListAdminsManagingAccountResponse
 * //   AdminAccounts: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdminsManagingAccountCommandInput - {@link ListAdminsManagingAccountCommandInput}
 * @returns {@link ListAdminsManagingAccountCommandOutput}
 * @see {@link ListAdminsManagingAccountCommandInput} for command's `input` shape.
 * @see {@link ListAdminsManagingAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
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
export class ListAdminsManagingAccountCommand extends $Command
  .classBuilder<
    ListAdminsManagingAccountCommandInput,
    ListAdminsManagingAccountCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "ListAdminsManagingAccount", {})
  .n("FMSClient", "ListAdminsManagingAccountCommand")
  .sc(ListAdminsManagingAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdminsManagingAccountRequest;
      output: ListAdminsManagingAccountResponse;
    };
    sdk: {
      input: ListAdminsManagingAccountCommandInput;
      output: ListAdminsManagingAccountCommandOutput;
    };
  };
}
