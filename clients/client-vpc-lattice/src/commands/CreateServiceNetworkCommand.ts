// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceNetworkRequest, CreateServiceNetworkResponse } from "../models/models_0";
import { de_CreateServiceNetworkCommand, se_CreateServiceNetworkCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceNetworkCommand}.
 */
export interface CreateServiceNetworkCommandInput extends CreateServiceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceNetworkCommand}.
 */
export interface CreateServiceNetworkCommandOutput extends CreateServiceNetworkResponse, __MetadataBearer {}

/**
 * <p>Creates a service network. A service network is a logical boundary for a collection of
 *    services. You can associate services and VPCs with a service network.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceNetworkCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceNetworkCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceNetworkRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   authType: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   sharingConfig: { // SharingConfig
 *     enabled: true || false,
 *   },
 * };
 * const command = new CreateServiceNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceNetworkResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   sharingConfig: { // SharingConfig
 * //     enabled: true || false,
 * //   },
 * //   authType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateServiceNetworkCommandInput - {@link CreateServiceNetworkCommandInput}
 * @returns {@link CreateServiceNetworkCommandOutput}
 * @see {@link CreateServiceNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateServiceNetworkCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class CreateServiceNetworkCommand extends $Command
  .classBuilder<
    CreateServiceNetworkCommandInput,
    CreateServiceNetworkCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "CreateServiceNetwork", {})
  .n("VPCLatticeClient", "CreateServiceNetworkCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceNetworkCommand)
  .de(de_CreateServiceNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceNetworkRequest;
      output: CreateServiceNetworkResponse;
    };
    sdk: {
      input: CreateServiceNetworkCommandInput;
      output: CreateServiceNetworkCommandOutput;
    };
  };
}
