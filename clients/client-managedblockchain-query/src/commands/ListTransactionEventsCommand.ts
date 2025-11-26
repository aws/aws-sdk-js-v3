// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ManagedBlockchainQueryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainQueryClient";
import type { ListTransactionEventsInput, ListTransactionEventsOutput } from "../models/models_0";
import { ListTransactionEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTransactionEventsCommand}.
 */
export interface ListTransactionEventsCommandInput extends ListTransactionEventsInput {}
/**
 * @public
 *
 * The output of {@link ListTransactionEventsCommand}.
 */
export interface ListTransactionEventsCommandOutput extends ListTransactionEventsOutput, __MetadataBearer {}

/**
 * <p>Lists all the transaction events for a transaction </p>
 *          <note>
 *             <p>This action will return transaction details for all transactions
 *          that are <i>confirmed</i> on the blockchain, even if they have not reached
 *          <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">finality</a>.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListTransactionEventsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListTransactionEventsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListTransactionEventsInput
 *   transactionHash: "STRING_VALUE",
 *   transactionId: "STRING_VALUE",
 *   network: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTransactionEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListTransactionEventsOutput
 * //   events: [ // TransactionEventList // required
 * //     { // TransactionEvent
 * //       network: "STRING_VALUE", // required
 * //       transactionHash: "STRING_VALUE", // required
 * //       eventType: "STRING_VALUE", // required
 * //       from: "STRING_VALUE",
 * //       to: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       contractAddress: "STRING_VALUE",
 * //       tokenId: "STRING_VALUE",
 * //       transactionId: "STRING_VALUE",
 * //       voutIndex: Number("int"),
 * //       voutSpent: true || false,
 * //       spentVoutTransactionId: "STRING_VALUE",
 * //       spentVoutTransactionHash: "STRING_VALUE",
 * //       spentVoutIndex: Number("int"),
 * //       blockchainInstant: { // BlockchainInstant
 * //         time: new Date("TIMESTAMP"),
 * //       },
 * //       confirmationStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransactionEventsCommandInput - {@link ListTransactionEventsCommandInput}
 * @returns {@link ListTransactionEventsCommandOutput}
 * @see {@link ListTransactionEventsCommandInput} for command's `input` shape.
 * @see {@link ListTransactionEventsCommandOutput} for command's `response` shape.
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
export class ListTransactionEventsCommand extends $Command
  .classBuilder<
    ListTransactionEventsCommandInput,
    ListTransactionEventsCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TietonChainQueryService", "ListTransactionEvents", {})
  .n("ManagedBlockchainQueryClient", "ListTransactionEventsCommand")
  .sc(ListTransactionEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTransactionEventsInput;
      output: ListTransactionEventsOutput;
    };
    sdk: {
      input: ListTransactionEventsCommandInput;
      output: ListTransactionEventsCommandOutput;
    };
  };
}
