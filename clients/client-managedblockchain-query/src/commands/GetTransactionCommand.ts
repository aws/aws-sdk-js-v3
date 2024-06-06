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
import { GetTransactionInput, GetTransactionOutput } from "../models/models_0";
import { de_GetTransactionCommand, se_GetTransactionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransactionCommand}.
 */
export interface GetTransactionCommandInput extends GetTransactionInput {}
/**
 * @public
 *
 * The output of {@link GetTransactionCommand}.
 */
export interface GetTransactionCommandOutput extends GetTransactionOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a transaction.</p>
 *          <note>
 *             <p>This action will return transaction details for all transactions
 *          that are <i>confirmed</i> on the blockchain, even if they have not reached
 *          <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">finality</a>.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetTransactionCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetTransactionCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // GetTransactionInput
 *   transactionHash: "STRING_VALUE",
 *   transactionId: "STRING_VALUE",
 *   network: "STRING_VALUE", // required
 * };
 * const command = new GetTransactionCommand(input);
 * const response = await client.send(command);
 * // { // GetTransactionOutput
 * //   transaction: { // Transaction
 * //     network: "STRING_VALUE", // required
 * //     blockHash: "STRING_VALUE",
 * //     transactionHash: "STRING_VALUE", // required
 * //     blockNumber: "STRING_VALUE",
 * //     transactionTimestamp: new Date("TIMESTAMP"), // required
 * //     transactionIndex: Number("long"), // required
 * //     numberOfTransactions: Number("long"), // required
 * //     to: "STRING_VALUE", // required
 * //     from: "STRING_VALUE",
 * //     contractAddress: "STRING_VALUE",
 * //     gasUsed: "STRING_VALUE",
 * //     cumulativeGasUsed: "STRING_VALUE",
 * //     effectiveGasPrice: "STRING_VALUE",
 * //     signatureV: Number("int"),
 * //     signatureR: "STRING_VALUE",
 * //     signatureS: "STRING_VALUE",
 * //     transactionFee: "STRING_VALUE",
 * //     transactionId: "STRING_VALUE",
 * //     confirmationStatus: "STRING_VALUE",
 * //     executionStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransactionCommandInput - {@link GetTransactionCommandInput}
 * @returns {@link GetTransactionCommandOutput}
 * @see {@link GetTransactionCommandInput} for command's `input` shape.
 * @see {@link GetTransactionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTransactionCommand extends $Command
  .classBuilder<
    GetTransactionCommandInput,
    GetTransactionCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TietonChainQueryService", "GetTransaction", {})
  .n("ManagedBlockchainQueryClient", "GetTransactionCommand")
  .f(void 0, void 0)
  .ser(se_GetTransactionCommand)
  .de(de_GetTransactionCommand)
  .build() {}
