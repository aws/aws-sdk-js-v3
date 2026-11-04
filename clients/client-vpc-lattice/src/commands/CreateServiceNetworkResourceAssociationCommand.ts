// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateServiceNetworkResourceAssociationRequest,
  CreateServiceNetworkResourceAssociationResponse,
} from "../models/models_0";
import { CreateServiceNetworkResourceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkResourceAssociationCommand}.
 */
export interface CreateServiceNetworkResourceAssociationCommandInput extends CreateServiceNetworkResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkResourceAssociationCommand}.
 */
export interface CreateServiceNetworkResourceAssociationCommandOutput extends CreateServiceNetworkResourceAssociationResponse, __MetadataBearer {}

/**
 * Associates the specified service network with the specified resource configuration. This allows the resource configuration to receive connections through the service network, including through a service network VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkResourceAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkResourceAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceNetworkResourceAssociationRequest
 *   clientToken: "STRING_VALUE",
 *   resourceConfigurationIdentifier: "STRING_VALUE", // required
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   privateDnsEnabled: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceNetworkResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceNetworkResourceAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE",
 * //   privateDnsEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param CreateServiceNetworkResourceAssociationCommandInput - {@link CreateServiceNetworkResourceAssociationCommandInput}
 * @returns {@link CreateServiceNetworkResourceAssociationCommandOutput}
 * @see {@link CreateServiceNetworkResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateServiceNetworkResourceAssociationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class CreateServiceNetworkResourceAssociationCommand extends command<CreateServiceNetworkResourceAssociationCommandInput, CreateServiceNetworkResourceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceNetworkResourceAssociation",
  CreateServiceNetworkResourceAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceNetworkResourceAssociationRequest;
      output: CreateServiceNetworkResourceAssociationResponse;
    };
    sdk: {
      input: CreateServiceNetworkResourceAssociationCommandInput;
      output: CreateServiceNetworkResourceAssociationCommandOutput;
    };
  };
}
