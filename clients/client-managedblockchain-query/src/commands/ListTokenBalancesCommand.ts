// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTokenBalancesInput, ListTokenBalancesOutput } from "../models/models_0";
import { ListTokenBalances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This action returns the following for a given blockchain network:
 *
 * - Lists all token balances owned by an address (either a contract address or a wallet address).
 * - Lists all token balances for all tokens created by a contract.
 * - Lists all token balances for a given token.
 *
 * > **Note:** You must always specify the network property of the `tokenFilter` when using this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTokenBalancesCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTokenBalancesCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
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
 *
 * The Amazon Web Services account doesn’t have access to this resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an internal error in the service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded for this resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is when you create resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources, if possible.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The resource passed is invalid.
 *
 * @throws {@link ManagedBlockchainQueryServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchainQuery service.
 *
 * @public
 */
export class ListTokenBalancesCommand extends command<ListTokenBalancesCommandInput, ListTokenBalancesCommandOutput>(
  _ep0,
  _mw0,
  "ListTokenBalances",
  ListTokenBalances$
) {
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
