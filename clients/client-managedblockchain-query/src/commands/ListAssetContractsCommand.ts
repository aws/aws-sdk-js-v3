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
import { ListAssetContractsInput, ListAssetContractsOutput } from "../models/models_0";
import { de_ListAssetContractsCommand, se_ListAssetContractsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the contracts for a given contract type deployed by an address
 *          (either a contract address or a wallet address).</p>
 *          <p>The Bitcoin blockchain networks do not support this
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListAssetContractsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListAssetContractsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
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
 *
 * @public
 */
export class ListAssetContractsCommand extends $Command
  .classBuilder<
    ListAssetContractsCommandInput,
    ListAssetContractsCommandOutput,
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
  .s("TietonChainQueryService", "ListAssetContracts", {})
  .n("ManagedBlockchainQueryClient", "ListAssetContractsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssetContractsCommand)
  .de(de_ListAssetContractsCommand)
  .build() {
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
