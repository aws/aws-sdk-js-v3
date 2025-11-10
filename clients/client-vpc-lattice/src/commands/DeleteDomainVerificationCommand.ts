// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainVerificationRequest, DeleteDomainVerificationResponse } from "../models/models_0";
import { DeleteDomainVerification } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDomainVerificationCommand}.
 */
export interface DeleteDomainVerificationCommandInput extends DeleteDomainVerificationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainVerificationCommand}.
 */
export interface DeleteDomainVerificationCommandOutput extends DeleteDomainVerificationResponse, __MetadataBearer {}

/**
 * <p> Deletes the specified domain verification. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteDomainVerificationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteDomainVerificationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteDomainVerificationRequest
 *   domainVerificationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainVerificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainVerificationCommandInput - {@link DeleteDomainVerificationCommandInput}
 * @returns {@link DeleteDomainVerificationCommandOutput}
 * @see {@link DeleteDomainVerificationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainVerificationCommandOutput} for command's `response` shape.
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
export class DeleteDomainVerificationCommand extends $Command
  .classBuilder<
    DeleteDomainVerificationCommandInput,
    DeleteDomainVerificationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "DeleteDomainVerification", {})
  .n("VPCLatticeClient", "DeleteDomainVerificationCommand")
  .sc(DeleteDomainVerification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainVerificationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDomainVerificationCommandInput;
      output: DeleteDomainVerificationCommandOutput;
    };
  };
}
