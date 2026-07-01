// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContainerAssociationRequest, CreateContainerAssociationResponse } from "../models/models_0";
import { CreateContainerAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContainerAssociationCommand}.
 */
export interface CreateContainerAssociationCommandInput extends CreateContainerAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerAssociationCommand}.
 */
export interface CreateContainerAssociationCommandOutput extends CreateContainerAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates a container association for Network Firewall. A container association links container clusters (ECS or EKS) to Network Firewall, enabling dynamic IP resolution for firewall rules based on container attributes.</p>
 *          <p>To manage a container association's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about container associations, use <a>ListContainerAssociations</a> and <a>DescribeContainerAssociation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateContainerAssociationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateContainerAssociationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateContainerAssociationRequest
 *   ContainerAssociationName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Type: "ECS" || "EKS", // required
 *   ContainerMonitoringConfigurations: [ // ContainerMonitoringConfigurations // required
 *     { // ContainerMonitoringConfiguration
 *       ClusterArn: "STRING_VALUE", // required
 *       AttributeFilters: [ // ContainerAttributes
 *         { // ContainerAttribute
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateContainerAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerAssociationResponse
 * //   ContainerAssociationName: "STRING_VALUE",
 * //   ContainerAssociationArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Type: "ECS" || "EKS",
 * //   ContainerMonitoringConfigurations: [ // ContainerMonitoringConfigurations
 * //     { // ContainerMonitoringConfiguration
 * //       ClusterArn: "STRING_VALUE", // required
 * //       AttributeFilters: [ // ContainerAttributes
 * //         { // ContainerAttribute
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Status: "ACTIVE" || "CREATING" || "DELETING",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContainerAssociationCommandInput - {@link CreateContainerAssociationCommandInput}
 * @returns {@link CreateContainerAssociationCommandOutput}
 * @see {@link CreateContainerAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateContainerAssociationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class CreateContainerAssociationCommand extends command<CreateContainerAssociationCommandInput, CreateContainerAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateContainerAssociation",
  CreateContainerAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerAssociationRequest;
      output: CreateContainerAssociationResponse;
    };
    sdk: {
      input: CreateContainerAssociationCommandInput;
      output: CreateContainerAssociationCommandOutput;
    };
  };
}
