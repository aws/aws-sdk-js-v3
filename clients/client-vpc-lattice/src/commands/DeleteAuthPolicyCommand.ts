// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAuthPolicyRequest, DeleteAuthPolicyResponse } from "../models/models_0";
import { de_DeleteAuthPolicyCommand, se_DeleteAuthPolicyCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAuthPolicyCommand}.
 */
export interface DeleteAuthPolicyCommandInput extends DeleteAuthPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAuthPolicyCommand}.
 */
export interface DeleteAuthPolicyCommandOutput extends DeleteAuthPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified auth policy. If an auth is set to <code>AWS_IAM</code> and the auth
 *    policy is deleted, all requests are denied. If you are trying to remove the auth policy
 *    completely, you must set the auth type to <code>NONE</code>. If auth is enabled on the resource,
 *    but no auth policy is set, all requests are denied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteAuthPolicyCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteAuthPolicyCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteAuthPolicyRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAuthPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAuthPolicyCommandInput - {@link DeleteAuthPolicyCommandInput}
 * @returns {@link DeleteAuthPolicyCommandOutput}
 * @see {@link DeleteAuthPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAuthPolicyCommand extends $Command
  .classBuilder<
    DeleteAuthPolicyCommandInput,
    DeleteAuthPolicyCommandOutput,
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
  .s("MercuryControlPlane", "DeleteAuthPolicy", {})
  .n("VPCLatticeClient", "DeleteAuthPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAuthPolicyCommand)
  .de(de_DeleteAuthPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAuthPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAuthPolicyCommandInput;
      output: DeleteAuthPolicyCommandOutput;
    };
  };
}
