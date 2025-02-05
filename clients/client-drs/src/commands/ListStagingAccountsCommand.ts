// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStagingAccountsRequest, ListStagingAccountsResponse } from "../models/models_0";
import { de_ListStagingAccountsCommand, se_ListStagingAccountsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStagingAccountsCommand}.
 */
export interface ListStagingAccountsCommandInput extends ListStagingAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListStagingAccountsCommand}.
 */
export interface ListStagingAccountsCommandOutput extends ListStagingAccountsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of staging accounts for existing extended source servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListStagingAccountsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListStagingAccountsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DrsClient(config);
 * const input = { // ListStagingAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListStagingAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListStagingAccountsResponse
 * //   accounts: [ // Accounts
 * //     { // Account
 * //       accountID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStagingAccountsCommandInput - {@link ListStagingAccountsCommandInput}
 * @returns {@link ListStagingAccountsCommandOutput}
 * @see {@link ListStagingAccountsCommandInput} for command's `input` shape.
 * @see {@link ListStagingAccountsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class ListStagingAccountsCommand extends $Command
  .classBuilder<
    ListStagingAccountsCommandInput,
    ListStagingAccountsCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "ListStagingAccounts", {})
  .n("DrsClient", "ListStagingAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListStagingAccountsCommand)
  .de(de_ListStagingAccountsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStagingAccountsRequest;
      output: ListStagingAccountsResponse;
    };
    sdk: {
      input: ListStagingAccountsCommandInput;
      output: ListStagingAccountsCommandOutput;
    };
  };
}
