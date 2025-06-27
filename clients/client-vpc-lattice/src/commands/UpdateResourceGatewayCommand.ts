// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResourceGatewayRequest, UpdateResourceGatewayResponse } from "../models/models_0";
import { de_UpdateResourceGatewayCommand, se_UpdateResourceGatewayCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceGatewayCommand}.
 */
export interface UpdateResourceGatewayCommandInput extends UpdateResourceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceGatewayCommand}.
 */
export interface UpdateResourceGatewayCommandOutput extends UpdateResourceGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates the specified resource gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateResourceGatewayCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateResourceGatewayCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateResourceGatewayRequest
 *   resourceGatewayIdentifier: "STRING_VALUE", // required
 *   securityGroupIds: [ // SecurityGroupList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateResourceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceGatewayResponse
 * //   name: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   subnetIds: [ // SubnetList
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // SecurityGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   ipAddressType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateResourceGatewayCommandInput - {@link UpdateResourceGatewayCommandInput}
 * @returns {@link UpdateResourceGatewayCommandOutput}
 * @see {@link UpdateResourceGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceGatewayCommandOutput} for command's `response` shape.
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class UpdateResourceGatewayCommand extends $Command
  .classBuilder<
    UpdateResourceGatewayCommandInput,
    UpdateResourceGatewayCommandOutput,
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
  .s("MercuryControlPlane", "UpdateResourceGateway", {})
  .n("VPCLatticeClient", "UpdateResourceGatewayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceGatewayCommand)
  .de(de_UpdateResourceGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceGatewayRequest;
      output: UpdateResourceGatewayResponse;
    };
    sdk: {
      input: UpdateResourceGatewayCommandInput;
      output: UpdateResourceGatewayCommandOutput;
    };
  };
}
