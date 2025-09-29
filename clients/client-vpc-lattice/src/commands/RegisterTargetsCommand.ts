// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterTargetsRequest, RegisterTargetsResponse } from "../models/models_0";
import { de_RegisterTargetsCommand, se_RegisterTargetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandInput extends RegisterTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandOutput extends RegisterTargetsResponse, __MetadataBearer {}

/**
 * <p>Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, RegisterTargetsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, RegisterTargetsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // RegisterTargetsRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   targets: [ // TargetList // required
 *     { // Target
 *       id: "STRING_VALUE", // required
 *       port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTargetsResponse
 * //   successful: [ // TargetList
 * //     { // Target
 * //       id: "STRING_VALUE", // required
 * //       port: Number("int"),
 * //     },
 * //   ],
 * //   unsuccessful: [ // TargetFailureList
 * //     { // TargetFailure
 * //       id: "STRING_VALUE",
 * //       port: Number("int"),
 * //       failureCode: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterTargetsCommandInput - {@link RegisterTargetsCommandInput}
 * @returns {@link RegisterTargetsCommandOutput}
 * @see {@link RegisterTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetsCommandOutput} for command's `response` shape.
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
export class RegisterTargetsCommand extends $Command
  .classBuilder<
    RegisterTargetsCommandInput,
    RegisterTargetsCommandOutput,
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
  .s("MercuryControlPlane", "RegisterTargets", {})
  .n("VPCLatticeClient", "RegisterTargetsCommand")
  .f(void 0, void 0)
  .ser(se_RegisterTargetsCommand)
  .de(de_RegisterTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTargetsRequest;
      output: RegisterTargetsResponse;
    };
    sdk: {
      input: RegisterTargetsCommandInput;
      output: RegisterTargetsCommandOutput;
    };
  };
}
