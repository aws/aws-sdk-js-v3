// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetContractsInput, ListAssetContractsOutput } from "../models/models_0";
import { ListAssetContracts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetContractsCommand}.
 */
export interface ListAssetContractsCommandInput extends ListAssetContractsInput {}
/**
 * @public
 *
 * The output of {@link ListAssetContractsCommand}.
 */
export interface ListAssetContractsCommandOutput extends ListAssetContractsOutput, __MetadataBearer {}

/**
 * Lists all the contracts for a given contract type deployed by an address (either a contract address or a wallet address).
 *
 * The Bitcoin blockchain networks do not support this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListAssetContractsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListAssetContractsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListAssetContractsInput
 *   contractFilter: { // ContractFilter
 *     network: "STRING_VALUE", // required
 *     tokenStandard: "STRING_VALUE", // required
 *     deployerAddress: "STRING_VALUE", // required
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetContractsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetContractsOutput
 * //   contracts: [ // AssetContractList // required
 * //     { // AssetContract
 * //       contractIdentifier: { // ContractIdentifier
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE", // required
 * //       },
 * //       tokenStandard: "STRING_VALUE", // required
 * //       deployerAddress: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetContractsCommandInput - {@link ListAssetContractsCommandInput}
 * @returns {@link ListAssetContractsCommandOutput}
 * @see {@link ListAssetContractsCommandInput} for command's `input` shape.
 * @see {@link ListAssetContractsCommandOutput} for command's `response` shape.
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
export class ListAssetContractsCommand extends command<ListAssetContractsCommandInput, ListAssetContractsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetContracts",
  ListAssetContracts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetContractsInput;
      output: ListAssetContractsOutput;
    };
    sdk: {
      input: ListAssetContractsCommandInput;
      output: ListAssetContractsCommandOutput;
    };
  };
}
