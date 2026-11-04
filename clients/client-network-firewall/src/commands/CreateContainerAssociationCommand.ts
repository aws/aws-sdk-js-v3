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
 * Creates a Network Firewall container association. The association monitors container lifecycle events in your Amazon ECS or Amazon EKS clusters and resolves running container addresses for use in firewall rules.
 *
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
 * //   Status: "ACTIVE" || "CREATING" || "DELETING" || "UPDATING",
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
 *
 * Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your request later.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Unable to perform the operation because doing so would violate a limit setting.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
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
