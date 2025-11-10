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
import { ListFilteredTransactionEventsInput, ListFilteredTransactionEventsOutput } from "../models/models_0";
import { ListFilteredTransactionEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListFilteredTransactionEventsCommandOutput
  extends ListFilteredTransactionEventsOutput,
    __MetadataBearer {}

/**
 * <p>Lists all the transaction events for an address on the blockchain.</p>
 *          <note>
 *             <p>This operation is only supported on the Bitcoin networks.</p>
 *          </note>
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
export class ListFilteredTransactionEventsCommand extends $Command
  .classBuilder<
    ListFilteredTransactionEventsCommandInput,
    ListFilteredTransactionEventsCommandOutput,
    ManagedBlockchainQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainQueryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TietonChainQueryService", "ListFilteredTransactionEvents", {})
  .n("ManagedBlockchainQueryClient", "ListFilteredTransactionEventsCommand")
  .sc(ListFilteredTransactionEvents)
  .build() {
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
