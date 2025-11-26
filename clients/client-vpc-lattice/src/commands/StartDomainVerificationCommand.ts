// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDomainVerificationRequest, StartDomainVerificationResponse } from "../models/models_0";
import { StartDomainVerification } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDomainVerificationCommand}.
 */
export interface StartDomainVerificationCommandInput extends StartDomainVerificationRequest {}
/**
 * @public
 *
 * The output of {@link StartDomainVerificationCommand}.
 */
export interface StartDomainVerificationCommandOutput extends StartDomainVerificationResponse, __MetadataBearer {}

/**
 * <p> Starts the domain verification process for a custom domain name. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, StartDomainVerificationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, StartDomainVerificationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // StartDomainVerificationRequest
 *   clientToken: "STRING_VALUE",
 *   domainName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartDomainVerificationCommand(input);
 * const response = await client.send(command);
 * // { // StartDomainVerificationResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   domainName: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   txtMethodConfig: { // TxtMethodConfig
 * //     value: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param StartDomainVerificationCommandInput - {@link StartDomainVerificationCommandInput}
 * @returns {@link StartDomainVerificationCommandOutput}
 * @see {@link StartDomainVerificationCommandInput} for command's `input` shape.
 * @see {@link StartDomainVerificationCommandOutput} for command's `response` shape.
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
export class StartDomainVerificationCommand extends $Command
  .classBuilder<
    StartDomainVerificationCommandInput,
    StartDomainVerificationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "StartDomainVerification", {})
  .n("VPCLatticeClient", "StartDomainVerificationCommand")
  .sc(StartDomainVerification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDomainVerificationRequest;
      output: StartDomainVerificationResponse;
    };
    sdk: {
      input: StartDomainVerificationCommandInput;
      output: StartDomainVerificationCommandOutput;
    };
  };
}
