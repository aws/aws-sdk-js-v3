// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServiceNetworkResourceAssociationRequest,
  CreateServiceNetworkResourceAssociationResponse,
} from "../models/models_0";
import { CreateServiceNetworkResourceAssociation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkResourceAssociationCommand}.
 */
export interface CreateServiceNetworkResourceAssociationCommandInput
  extends CreateServiceNetworkResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkResourceAssociationCommand}.
 */
export interface CreateServiceNetworkResourceAssociationCommandOutput
  extends CreateServiceNetworkResourceAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Associates the specified service network with the specified resource configuration. This allows the resource configuration to receive connections through the service network, including through a service network VPC endpoint.</p>
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
export class CreateServiceNetworkResourceAssociationCommand extends $Command
  .classBuilder<
    CreateServiceNetworkResourceAssociationCommandInput,
    CreateServiceNetworkResourceAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "CreateServiceNetworkResourceAssociation", {})
  .n("VPCLatticeClient", "CreateServiceNetworkResourceAssociationCommand")
  .sc(CreateServiceNetworkResourceAssociation)
  .build() {
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
