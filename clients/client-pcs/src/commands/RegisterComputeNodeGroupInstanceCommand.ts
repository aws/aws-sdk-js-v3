// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterComputeNodeGroupInstanceRequest, RegisterComputeNodeGroupInstanceResponse } from "../models/models_0";
import { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { RegisterComputeNodeGroupInstance } from "../schemas/schemas_2_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterComputeNodeGroupInstanceCommand}.
 */
export interface RegisterComputeNodeGroupInstanceCommandInput extends RegisterComputeNodeGroupInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterComputeNodeGroupInstanceCommand}.
 */
export interface RegisterComputeNodeGroupInstanceCommandOutput
  extends RegisterComputeNodeGroupInstanceResponse,
    __MetadataBearer {}

/**
 * <important> <p>This API action isn't intended for you to use.</p> </important> <p>PCS uses this API action to register the compute nodes it launches in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, RegisterComputeNodeGroupInstanceCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, RegisterComputeNodeGroupInstanceCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // RegisterComputeNodeGroupInstanceRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   bootstrapId: "STRING_VALUE", // required
 * };
 * const command = new RegisterComputeNodeGroupInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterComputeNodeGroupInstanceResponse
 * //   nodeID: "STRING_VALUE", // required
 * //   sharedSecret: "STRING_VALUE", // required
 * //   endpoints: [ // Endpoints // required
 * //     { // Endpoint
 * //       type: "SLURMCTLD" || "SLURMDBD", // required
 * //       privateIpAddress: "STRING_VALUE", // required
 * //       publicIpAddress: "STRING_VALUE",
 * //       ipv6Address: "STRING_VALUE",
 * //       port: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterComputeNodeGroupInstanceCommandInput - {@link RegisterComputeNodeGroupInstanceCommandInput}
 * @returns {@link RegisterComputeNodeGroupInstanceCommandOutput}
 * @see {@link RegisterComputeNodeGroupInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterComputeNodeGroupInstanceCommandOutput} for command's `response` shape.
 * @see {@link PCSClientResolvedConfig | config} for PCSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p> <p> <u>Examples</u> </p> <ul> <li> <p>The launch template instance profile doesn't pass <code>iam:PassRole</code> verification.</p> </li> <li> <p>There is a mismatch between the account ID and cluster ID.</p> </li> <li> <p>The cluster ID doesn't exist.</p> </li> <li> <p>The EC2 instance isn't present.</p> </li> </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>PCS can't process your request right now. Try again later.</p>
 *
 * @throws {@link PCSServiceException}
 * <p>Base exception class for all service exceptions from PCS service.</p>
 *
 *
 * @public
 */
export class RegisterComputeNodeGroupInstanceCommand extends $Command
  .classBuilder<
    RegisterComputeNodeGroupInstanceCommandInput,
    RegisterComputeNodeGroupInstanceCommandOutput,
    PCSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PCSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSParallelComputingService", "RegisterComputeNodeGroupInstance", {})
  .n("PCSClient", "RegisterComputeNodeGroupInstanceCommand")
  .sc(RegisterComputeNodeGroupInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterComputeNodeGroupInstanceRequest;
      output: RegisterComputeNodeGroupInstanceResponse;
    };
    sdk: {
      input: RegisterComputeNodeGroupInstanceCommandInput;
      output: RegisterComputeNodeGroupInstanceCommandOutput;
    };
  };
}
