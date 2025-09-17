// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListAutomatedDiscoveryAccountsRequest, ListAutomatedDiscoveryAccountsResponse } from "../models/models_0";
import {
  de_ListAutomatedDiscoveryAccountsCommand,
  se_ListAutomatedDiscoveryAccountsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomatedDiscoveryAccountsCommand}.
 */
export interface ListAutomatedDiscoveryAccountsCommandInput extends ListAutomatedDiscoveryAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomatedDiscoveryAccountsCommand}.
 */
export interface ListAutomatedDiscoveryAccountsCommandOutput
  extends ListAutomatedDiscoveryAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of automated sensitive data discovery for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListAutomatedDiscoveryAccountsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListAutomatedDiscoveryAccountsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // ListAutomatedDiscoveryAccountsRequest
 *   accountIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomatedDiscoveryAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomatedDiscoveryAccountsResponse
 * //   items: [ // __listOfAutomatedDiscoveryAccount
 * //     { // AutomatedDiscoveryAccount
 * //       accountId: "STRING_VALUE",
 * //       status: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomatedDiscoveryAccountsCommandInput - {@link ListAutomatedDiscoveryAccountsCommandInput}
 * @returns {@link ListAutomatedDiscoveryAccountsCommandOutput}
 * @see {@link ListAutomatedDiscoveryAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAutomatedDiscoveryAccountsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class ListAutomatedDiscoveryAccountsCommand extends $Command
  .classBuilder<
    ListAutomatedDiscoveryAccountsCommandInput,
    ListAutomatedDiscoveryAccountsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "ListAutomatedDiscoveryAccounts", {})
  .n("Macie2Client", "ListAutomatedDiscoveryAccountsCommand")
  .f(void 0, void 0)
  .ser(se_ListAutomatedDiscoveryAccountsCommand)
  .de(de_ListAutomatedDiscoveryAccountsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomatedDiscoveryAccountsRequest;
      output: ListAutomatedDiscoveryAccountsResponse;
    };
    sdk: {
      input: ListAutomatedDiscoveryAccountsCommandInput;
      output: ListAutomatedDiscoveryAccountsCommandOutput;
    };
  };
}
