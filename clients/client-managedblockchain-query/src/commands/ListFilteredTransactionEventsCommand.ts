// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFilteredTransactionEventsInput, ListFilteredTransactionEventsOutput } from "../models/models_0";
import { ListFilteredTransactionEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFilteredTransactionEventsCommand}.
 */
export interface ListFilteredTransactionEventsCommandInput extends ListFilteredTransactionEventsInput {}
/**
 * @public
 *
 * The output of {@link ListFilteredTransactionEventsCommand}.
 */
export interface ListFilteredTransactionEventsCommandOutput extends ListFilteredTransactionEventsOutput, __MetadataBearer {}

/**
 * Lists all the transaction events for an address on the blockchain.
 *
 * > **Note:** This operation is only supported on the Bitcoin networks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainQueryClient, ListFilteredTransactionEventsCommand } from "@aws-sdk/client-managedblockchain-query"; // ES Modules import
 * // const { ManagedBlockchainQueryClient, ListFilteredTransactionEventsCommand } = require("@aws-sdk/client-managedblockchain-query"); // CommonJS import
 * // import type { ManagedBlockchainQueryClientConfig } from "@aws-sdk/client-managedblockchain-query";
 * const config = {}; // type is ManagedBlockchainQueryClientConfig
 * const client = new ManagedBlockchainQueryClient(config);
 * const input = { // ListFilteredTransactionEventsInput
 *   network: "STRING_VALUE", // required
 *   addressIdentifierFilter: { // AddressIdentifierFilter
 *     transactionEventToAddress: [ // ChainAddresses // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   timeFilter: { // TimeFilter
 *     from: { // BlockchainInstant
 *       time: new Date("TIMESTAMP"),
 *     },
 *     to: {
 *       time: new Date("TIMESTAMP"),
 *     },
 *   },
 *   voutFilter: { // VoutFilter
 *     voutSpent: true || false, // required
 *   },
 *   confirmationStatusFilter: { // ConfirmationStatusFilter
 *     include: [ // ConfirmationStatusIncludeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   sort: { // ListFilteredTransactionEventsSort
 *     sortBy: "STRING_VALUE",
 *     sortOrder: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFilteredTransactionEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListFilteredTransactionEventsOutput
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
 * @param ListFilteredTransactionEventsCommandInput - {@link ListFilteredTransactionEventsCommandInput}
 * @returns {@link ListFilteredTransactionEventsCommandOutput}
 * @see {@link ListFilteredTransactionEventsCommandInput} for command's `input` shape.
 * @see {@link ListFilteredTransactionEventsCommandOutput} for command's `response` shape.
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
export class ListFilteredTransactionEventsCommand extends command<ListFilteredTransactionEventsCommandInput, ListFilteredTransactionEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListFilteredTransactionEvents",
  ListFilteredTransactionEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFilteredTransactionEventsInput;
      output: ListFilteredTransactionEventsOutput;
    };
    sdk: {
      input: ListFilteredTransactionEventsCommandInput;
      output: ListFilteredTransactionEventsCommandOutput;
    };
  };
}
