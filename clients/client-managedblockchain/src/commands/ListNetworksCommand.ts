// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { ListNetworksInput, ListNetworksOutput } from "../models/models_0";
import { ListNetworks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about the networks in which the current Amazon Web Services account participates.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
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
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 *
 * @public
 */
export class ListNetworksCommand extends $Command
  .classBuilder<
    ListNetworksCommandInput,
    ListNetworksCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "ListNetworks", {})
  .n("ManagedBlockchainClient", "ListNetworksCommand")
  .sc(ListNetworks)
  .build() {
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
