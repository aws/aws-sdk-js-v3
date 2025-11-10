// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteResourceEndpointAssociationRequest,
  DeleteResourceEndpointAssociationResponse,
} from "../models/models_0";
import { DeleteResourceEndpointAssociation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceEndpointAssociationCommand}.
 */
export interface DeleteResourceEndpointAssociationCommandInput extends DeleteResourceEndpointAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceEndpointAssociationCommand}.
 */
export interface DeleteResourceEndpointAssociationCommandOutput
  extends DeleteResourceEndpointAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the resource configuration from the resource VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteResourceEndpointAssociationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteResourceEndpointAssociationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteResourceEndpointAssociationRequest
 *   resourceEndpointAssociationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceEndpointAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourceEndpointAssociationResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   resourceConfigurationArn: "STRING_VALUE",
 * //   vpcEndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourceEndpointAssociationCommandInput - {@link DeleteResourceEndpointAssociationCommandInput}
 * @returns {@link DeleteResourceEndpointAssociationCommandOutput}
 * @see {@link DeleteResourceEndpointAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceEndpointAssociationCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
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
export class DeleteResourceEndpointAssociationCommand extends $Command
  .classBuilder<
    DeleteResourceEndpointAssociationCommandInput,
    DeleteResourceEndpointAssociationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "DeleteResourceEndpointAssociation", {})
  .n("VPCLatticeClient", "DeleteResourceEndpointAssociationCommand")
  .sc(DeleteResourceEndpointAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceEndpointAssociationRequest;
      output: DeleteResourceEndpointAssociationResponse;
    };
    sdk: {
      input: DeleteResourceEndpointAssociationCommandInput;
      output: DeleteResourceEndpointAssociationCommandOutput;
    };
  };
}
