// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import { BatchGetTokenBalanceInput, BatchGetTokenBalanceOutput } from "../models/models_0";
import { BatchGetTokenBalance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTokenBalanceCommand}.
 */
export interface BatchGetTokenBalanceCommandInput extends BatchGetTokenBalanceInput {}
/**
 * @public
 *
 * The output of {@link BatchGetTokenBalanceCommand}.
 */
export interface BatchGetTokenBalanceCommandOutput extends BatchGetTokenBalanceOutput, __MetadataBearer {}

/**
 * <p>Gets the token balance for a batch of tokens by using the <code>BatchGetTokenBalance</code>
 *          action for every token in the request.</p>
 *          <note>
 *             <p>Only the native tokens BTC and ETH, and the ERC-20,
 *          ERC-721, and ERC 1155 token standards are supported.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, BatchGetTokenBalanceCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, BatchGetTokenBalanceCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // BatchGetTokenBalanceInput
 *   getTokenBalanceInputs: [ // GetTokenBalanceInputList
 *     { // BatchGetTokenBalanceInputItem
 *       tokenIdentifier: { // TokenIdentifier
 *         network: "STRING_VALUE", // required
 *         contractAddress: "STRING_VALUE",
 *         tokenId: "STRING_VALUE",
 *       },
 *       ownerIdentifier: { // OwnerIdentifier
 *         address: "STRING_VALUE", // required
 *       },
 *       atBlockchainInstant: { // BlockchainInstant
 *         time: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetTokenBalanceCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTokenBalanceOutput
 * //   tokenBalances: [ // BatchGetTokenBalanceOutputList // required
 * //     { // BatchGetTokenBalanceOutputItem
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
 * //   errors: [ // BatchGetTokenBalanceErrors // required
 * //     { // BatchGetTokenBalanceErrorItem
 * //       tokenIdentifier: {
 * //         network: "STRING_VALUE", // required
 * //         contractAddress: "STRING_VALUE",
 * //         tokenId: "STRING_VALUE",
 * //       },
 * //       ownerIdentifier: {
 * //         address: "STRING_VALUE", // required
 * //       },
 * //       atBlockchainInstant: {
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       errorType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetTokenBalanceCommandInput - {@link BatchGetTokenBalanceCommandInput}
 * @returns {@link BatchGetTokenBalanceCommandOutput}
 * @see {@link BatchGetTokenBalanceCommandInput} for command's `input` shape.
 * @see {@link BatchGetTokenBalanceCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainQueryClientResolvedConfig | config} for ManagedBlockchainQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an internal error in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
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
export class BatchGetTokenBalanceCommand extends $Command
  .classBuilder<
    BatchGetTokenBalanceCommandInput,
    BatchGetTokenBalanceCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TietonChainQueryService", "BatchGetTokenBalance", {})
  .n("ManagedBlockchainQueryClient", "BatchGetTokenBalanceCommand")
  .sc(BatchGetTokenBalance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTokenBalanceInput;
      output: BatchGetTokenBalanceOutput;
    };
    sdk: {
      input: BatchGetTokenBalanceCommandInput;
      output: BatchGetTokenBalanceCommandOutput;
    };
  };
}
