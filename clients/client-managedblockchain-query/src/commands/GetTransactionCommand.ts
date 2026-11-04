// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTransactionInput, GetTransactionOutput } from "../models/models_0";
import { GetTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the details of a transaction.
 *
 * > **Note:** This action will return transaction details for all transactions that are *confirmed* on the blockchain, even if they have not reached [finality](https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, GetTransactionCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, GetTransactionCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
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
 *
 * The Amazon Web Services account doesn’t have access to this resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an internal error in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
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
export class GetTransactionCommand extends command<GetTransactionCommandInput, GetTransactionCommandOutput>(
  _ep0,
  _mw0,
  "GetTransaction",
  GetTransaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransactionInput;
      output: GetTransactionOutput;
    };
    sdk: {
      input: GetTransactionCommandInput;
      output: GetTransactionCommandOutput;
    };
  };
}
