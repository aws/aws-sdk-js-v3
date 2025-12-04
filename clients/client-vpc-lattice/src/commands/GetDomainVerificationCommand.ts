// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainVerificationRequest, GetDomainVerificationResponse } from "../models/models_0";
import { GetDomainVerification } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainVerificationCommand}.
 */
export interface GetDomainVerificationCommandInput extends GetDomainVerificationRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainVerificationCommand}.
 */
export interface GetDomainVerificationCommandOutput extends GetDomainVerificationResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a domain verification.ß </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetDomainVerificationCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetDomainVerificationCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // GetDomainVerificationRequest
 *   domainVerificationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetDomainVerificationCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainVerificationResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   domainName: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   txtMethodConfig: { // TxtMethodConfig
 * //     value: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastVerifiedTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainVerificationCommandInput - {@link GetDomainVerificationCommandInput}
 * @returns {@link GetDomainVerificationCommandOutput}
 * @see {@link GetDomainVerificationCommandInput} for command's `input` shape.
 * @see {@link GetDomainVerificationCommandOutput} for command's `response` shape.
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
export class GetDomainVerificationCommand extends $Command
  .classBuilder<
    GetDomainVerificationCommandInput,
    GetDomainVerificationCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "GetDomainVerification", {})
  .n("VPCLatticeClient", "GetDomainVerificationCommand")
  .sc(GetDomainVerification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainVerificationRequest;
      output: GetDomainVerificationResponse;
    };
    sdk: {
      input: GetDomainVerificationCommandInput;
      output: GetDomainVerificationCommandOutput;
    };
  };
}
