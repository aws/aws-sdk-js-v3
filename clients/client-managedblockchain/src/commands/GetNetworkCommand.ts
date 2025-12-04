// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import type { GetNetworkInput, GetNetworkOutput } from "../models/models_0";
import { GetNetwork } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkCommand}.
 */
export interface GetNetworkCommandInput extends GetNetworkInput {}
/**
 * @public
 *
 * The output of {@link GetNetworkCommand}.
 */
export interface GetNetworkCommandOutput extends GetNetworkOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about a network.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNetworkCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNetworkCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetNetworkInput
 *   NetworkId: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkOutput
 * //   Network: { // Network
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Framework: "HYPERLEDGER_FABRIC" || "ETHEREUM",
 * //     FrameworkVersion: "STRING_VALUE",
 * //     FrameworkAttributes: { // NetworkFrameworkAttributes
 * //       Fabric: { // NetworkFabricAttributes
 * //         OrderingServiceEndpoint: "STRING_VALUE",
 * //         Edition: "STARTER" || "STANDARD",
 * //       },
 * //       Ethereum: { // NetworkEthereumAttributes
 * //         ChainId: "STRING_VALUE",
 * //       },
 * //     },
 * //     VpcEndpointServiceName: "STRING_VALUE",
 * //     VotingPolicy: { // VotingPolicy
 * //       ApprovalThresholdPolicy: { // ApprovalThresholdPolicy
 * //         ThresholdPercentage: Number("int"),
 * //         ProposalDurationInHours: Number("int"),
 * //         ThresholdComparator: "GREATER_THAN" || "GREATER_THAN_OR_EQUAL_TO",
 * //       },
 * //     },
 * //     Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "DELETING" || "DELETED",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNetworkCommandInput - {@link GetNetworkCommandInput}
 * @returns {@link GetNetworkCommandOutput}
 * @see {@link GetNetworkCommandInput} for command's `input` shape.
 * @see {@link GetNetworkCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
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
export class GetNetworkCommand extends $Command
  .classBuilder<
    GetNetworkCommandInput,
    GetNetworkCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TaigaWebService", "GetNetwork", {})
  .n("ManagedBlockchainClient", "GetNetworkCommand")
  .sc(GetNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkInput;
      output: GetNetworkOutput;
    };
    sdk: {
      input: GetNetworkCommandInput;
      output: GetNetworkCommandOutput;
    };
  };
}
