// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNodeInput, GetNodeOutput } from "../models/models_0";
import { GetNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNodeCommand}.
 */
export interface GetNodeCommandInput extends GetNodeInput {}
/**
 * @public
 *
 * The output of {@link GetNodeCommand}.
 */
export interface GetNodeCommandOutput extends GetNodeOutput, __MetadataBearer {}

/**
 * Returns detailed information about a node.
 *
 * Applies to Hyperledger Fabric and Ethereum.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * // import type { ManagedBlockchainClientConfig } from "@aws-sdk/client-managedblockchain";
 * const config = {}; // type is ManagedBlockchainClientConfig
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetNodeInput
 *   NetworkId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE",
 *   NodeId: "STRING_VALUE", // required
 * };
 * const command = new GetNodeCommand(input);
 * const response = await client.send(command);
 * // { // GetNodeOutput
 * //   Node: { // Node
 * //     NetworkId: "STRING_VALUE",
 * //     MemberId: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     FrameworkAttributes: { // NodeFrameworkAttributes
 * //       Fabric: { // NodeFabricAttributes
 * //         PeerEndpoint: "STRING_VALUE",
 * //         PeerEventEndpoint: "STRING_VALUE",
 * //       },
 * //       Ethereum: { // NodeEthereumAttributes
 * //         HttpEndpoint: "STRING_VALUE",
 * //         WebSocketEndpoint: "STRING_VALUE",
 * //       },
 * //     },
 * //     LogPublishingConfiguration: { // NodeLogPublishingConfiguration
 * //       Fabric: { // NodeFabricLogPublishingConfiguration
 * //         ChaincodeLogs: { // LogConfigurations
 * //           Cloudwatch: { // LogConfiguration
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         PeerLogs: {
 * //           Cloudwatch: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //     StateDB: "LevelDB" || "CouchDB",
 * //     Status: "CREATING" || "AVAILABLE" || "UNHEALTHY" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETED" || "FAILED" || "INACCESSIBLE_ENCRYPTION_KEY",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNodeCommandInput - {@link GetNodeCommandInput}
 * @returns {@link GetNodeCommandOutput}
 * @see {@link GetNodeCommandInput} for command's `input` shape.
 * @see {@link GetNodeCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource doesn't exist. It may have been deleted or referenced incorrectly.
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
export class GetNodeCommand extends command<GetNodeCommandInput, GetNodeCommandOutput>(
  _ep0,
  _mw0,
  "GetNode",
  GetNode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNodeInput;
      output: GetNodeOutput;
    };
    sdk: {
      input: GetNodeCommandInput;
      output: GetNodeCommandOutput;
    };
  };
}
