// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNetworksInput, ListNetworksOutput } from "../models/models_0";
import { ListNetworks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworksCommand}.
 */
export interface ListNetworksCommandInput extends ListNetworksInput {}
/**
 * @public
 *
 * The output of {@link ListNetworksCommand}.
 */
export interface ListNetworksCommandOutput extends ListNetworksOutput, __MetadataBearer {}

/**
 * Returns information about the networks in which the current Amazon Web Services account participates.
 *
 * Applies to Hyperledger Fabric and Ethereum.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNetworksCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNetworksCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListNetworksInput
 *   Name: "STRING_VALUE",
 *   Framework: "HYPERLEDGER_FABRIC" || "ETHEREUM",
 *   Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "DELETING" || "DELETED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworksOutput
 * //   Networks: [ // NetworkSummaryList
 * //     { // NetworkSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Framework: "HYPERLEDGER_FABRIC" || "ETHEREUM",
 * //       FrameworkVersion: "STRING_VALUE",
 * //       Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "DELETING" || "DELETED",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworksCommandInput - {@link ListNetworksCommandInput}
 * @returns {@link ListNetworksCommandOutput}
 * @see {@link ListNetworksCommandInput} for command's `input` shape.
 * @see {@link ListNetworksCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The action or operation requested is invalid. Verify that the action is typed correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests. The most common source of throttling errors is creating resources that exceed your service limit for this resource type. Request a limit increase or delete unused resources if possible.
 *
 * @throws {@link ManagedBlockchainServiceException}
 *
 * Base exception class for all service exceptions from ManagedBlockchain service.
 *
 * @public
 */
export class ListNetworksCommand extends command<ListNetworksCommandInput, ListNetworksCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworks",
  ListNetworks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworksInput;
      output: ListNetworksOutput;
    };
    sdk: {
      input: ListNetworksCommandInput;
      output: ListNetworksCommandOutput;
    };
  };
}
