// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceGatewayRequest, CreateResourceGatewayResponse } from "../models/models_0";
import { CreateResourceGateway } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>A resource gateway is a point of ingress into the VPC where a resource resides. It spans multiple Availability Zones. For your resource to be accessible from all Availability Zones, you should create your resource gateways to span as many Availability Zones as possible. A VPC can have multiple resource gateways.</p>
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
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class CreateResourceGatewayCommand extends $Command
  .classBuilder<
    CreateResourceGatewayCommandInput,
    CreateResourceGatewayCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "CreateResourceGateway", {})
  .n("VPCLatticeClient", "CreateResourceGatewayCommand")
  .sc(CreateResourceGateway)
  .build() {
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
