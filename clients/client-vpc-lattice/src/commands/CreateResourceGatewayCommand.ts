// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResourceGatewayRequest, CreateResourceGatewayResponse } from "../models/models_0";
import { CreateResourceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceGatewayCommand}.
 */
export interface CreateResourceGatewayCommandInput extends CreateResourceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceGatewayCommand}.
 */
export interface CreateResourceGatewayCommandOutput extends CreateResourceGatewayResponse, __MetadataBearer {}

/**
 * A resource gateway is a point of ingress into the VPC where a resource resides. It spans multiple Availability Zones. For your resource to be accessible from all Availability Zones, you should create your resource gateways to span as many Availability Zones as possible. A VPC can have multiple resource gateways.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateResourceGatewayCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateResourceGatewayCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateResourceGatewayRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   vpcIdentifier: "STRING_VALUE",
 *   subnetIds: [ // SubnetList
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupList
 *     "STRING_VALUE",
 *   ],
 *   ipAddressType: "STRING_VALUE",
 *   ipv4AddressesPerEni: Number("int"),
 *   resourceConfigDnsResolution: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceGatewayResponse
 * //   name: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   vpcIdentifier: "STRING_VALUE",
 * //   subnetIds: [ // SubnetList
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   ipAddressType: "STRING_VALUE",
 * //   ipv4AddressesPerEni: Number("int"),
 * //   resourceConfigDnsResolution: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceGatewayCommandInput - {@link CreateResourceGatewayCommandInput}
 * @returns {@link CreateResourceGatewayCommandOutput}
 * @see {@link CreateResourceGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateResourceGatewayCommandOutput} for command's `response` shape.
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
export class CreateResourceGatewayCommand extends command<CreateResourceGatewayCommandInput, CreateResourceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourceGateway",
  CreateResourceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceGatewayRequest;
      output: CreateResourceGatewayResponse;
    };
    sdk: {
      input: CreateResourceGatewayCommandInput;
      output: CreateResourceGatewayCommandOutput;
    };
  };
}
