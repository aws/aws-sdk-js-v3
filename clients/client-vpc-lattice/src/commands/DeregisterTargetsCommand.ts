// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterTargetsRequest, DeregisterTargetsResponse } from "../models/models_0";
import { DeregisterTargets } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandInput extends DeregisterTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandOutput extends DeregisterTargetsResponse, __MetadataBearer {}

/**
 * <p>Deregisters the specified targets from the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeregisterTargetsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeregisterTargetsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeregisterTargetsRequest
 *   targetGroupIdentifier: "STRING_VALUE", // required
 *   targets: [ // TargetList // required
 *     { // Target
 *       id: "STRING_VALUE", // required
 *       port: Number("int"),
 *     },
 *   ],
 * };
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTargetsResponse
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
 * @param DeregisterTargetsCommandInput - {@link DeregisterTargetsCommandInput}
 * @returns {@link DeregisterTargetsCommandOutput}
 * @see {@link DeregisterTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetsCommandOutput} for command's `response` shape.
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
export class DeregisterTargetsCommand extends $Command
  .classBuilder<
    DeregisterTargetsCommandInput,
    DeregisterTargetsCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "DeregisterTargets", {})
  .n("VPCLatticeClient", "DeregisterTargetsCommand")
  .sc(DeregisterTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTargetsRequest;
      output: DeregisterTargetsResponse;
    };
    sdk: {
      input: DeregisterTargetsCommandInput;
      output: DeregisterTargetsCommandOutput;
    };
  };
}
