// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { ListTokenBalancesInput, ListTokenBalancesOutput } from "../models/models_0";
import { de_ListTokenBalancesCommand, se_ListTokenBalancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTokenBalancesCommand}.
 */
export interface ListTokenBalancesCommandInput extends ListTokenBalancesInput {}
/**
 * @public
 *
 * The output of {@link ListTokenBalancesCommand}.
 */
export interface ListTokenBalancesCommandOutput extends ListTokenBalancesOutput, __MetadataBearer {}

/**
 * <p>This action returns the following for a given blockchain network:</p>
 *          <ul>
 *             <li>
 *                <p>Lists all token balances owned by an address (either a contract
 *           address or a wallet address).</p>
 *             </li>
 *             <li>
 *                <p>Lists all token balances for all tokens created by a contract.</p>
 *             </li>
 *             <li>
 *                <p>Lists all token balances for a given token.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must always specify the network property of
 *                               the <code>tokenFilter</code> when using this operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTokenBalancesCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTokenBalancesCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListTokenBalancesInput
 *   ownerFilter: { // OwnerFilter
 *     address: "STRING_VALUE", // required
 *   },
 *   tokenFilter: { // TokenFilter
 *     network: "STRING_VALUE", // required
 *     contractAddress: "STRING_VALUE",
 *     tokenId: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTokenBalancesCommand(input);
 * const response = await client.send(command);
 * // { // ListTokenBalancesOutput
 * //   tokenBalances: [ // TokenBalanceList // required
 * //     { // TokenBalance
 * //       ownerIdentifier: { // OwnerIdentifier
 * //         address: "STRING_VALUE", // required
 * //       },
 * //       tokenIdentifier: { // TokenIdentifier
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE",
 * //         tokenId: "STRING_VALUE",
 * //       },
 * //       balance: "STRING_VALUE", // required
 * //       atBlockchainInstant: { // BlockchainInstant
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //       lastUpdatedTime: {
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTokenBalancesCommandInput - {@link ListTokenBalancesCommandInput}
 * @returns {@link ListTokenBalancesCommandOutput}
 * @see {@link ListTokenBalancesCommandInput} for command's `input` shape.
 * @see {@link ListTokenBalancesCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is throttling
 *       requests. The most common source of throttling errors is when you create resources
 *       that exceed your service limit for this resource type. Request a limit increase or
 *       delete unused resources, if possible.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource passed is invalid.</p>
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchainQuery service.</p>
 *
 * @public
 */
export class ListTokenBalancesCommand extends $Command
  .classBuilder<
    ListTokenBalancesCommandInput,
    ListTokenBalancesCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TietonChainQueryService", "ListTokenBalances", {})
  .n("ManagedBlockchainQueryClient", "ListTokenBalancesCommand")
  .f(void 0, void 0)
  .ser(se_ListTokenBalancesCommand)
  .de(de_ListTokenBalancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTokenBalancesInput;
      output: ListTokenBalancesOutput;
    };
    sdk: {
      input: ListTokenBalancesCommandInput;
      output: ListTokenBalancesCommandOutput;
    };
  };
}
