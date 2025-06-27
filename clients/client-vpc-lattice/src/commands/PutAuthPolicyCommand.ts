// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAuthPolicyRequest, PutAuthPolicyResponse } from "../models/models_0";
import { de_PutAuthPolicyCommand, se_PutAuthPolicyCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAuthPolicyCommand}.
 */
export interface PutAuthPolicyCommandInput extends PutAuthPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAuthPolicyCommand}.
 */
export interface PutAuthPolicyCommandOutput extends PutAuthPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the auth policy. The policy string in JSON must not contain newlines or
 *    blank lines.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html">Auth policies</a> in the <i>Amazon VPC
 *     Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, PutAuthPolicyCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, PutAuthPolicyCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // PutAuthPolicyRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutAuthPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAuthPolicyResponse
 * //   policy: "STRING_VALUE",
 * //   state: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAuthPolicyCommandInput - {@link PutAuthPolicyCommandInput}
 * @returns {@link PutAuthPolicyCommandOutput}
 * @see {@link PutAuthPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAuthPolicyCommandOutput} for command's `response` shape.
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
export class PutAuthPolicyCommand extends $Command
  .classBuilder<
    PutAuthPolicyCommandInput,
    PutAuthPolicyCommandOutput,
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
  .s("MercuryControlPlane", "PutAuthPolicy", {})
  .n("VPCLatticeClient", "PutAuthPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutAuthPolicyCommand)
  .de(de_PutAuthPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAuthPolicyRequest;
      output: PutAuthPolicyResponse;
    };
    sdk: {
      input: PutAuthPolicyCommandInput;
      output: PutAuthPolicyCommandOutput;
    };
  };
}
