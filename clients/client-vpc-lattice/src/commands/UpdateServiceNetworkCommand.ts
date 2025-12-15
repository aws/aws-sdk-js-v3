// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceNetworkRequest, UpdateServiceNetworkResponse } from "../models/models_0";
import { UpdateServiceNetwork$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceNetworkCommand}.
 */
export interface UpdateServiceNetworkCommandInput extends UpdateServiceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceNetworkCommand}.
 */
export interface UpdateServiceNetworkCommandOutput extends UpdateServiceNetworkResponse, __MetadataBearer {}

/**
 * <p>Updates the specified service network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateServiceNetworkCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateServiceNetworkCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateServiceNetworkRequest
 *   serviceNetworkIdentifier: "STRING_VALUE", // required
 *   authType: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceNetworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceNetworkResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   authType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateServiceNetworkCommandInput - {@link UpdateServiceNetworkCommandInput}
 * @returns {@link UpdateServiceNetworkCommandOutput}
 * @see {@link UpdateServiceNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceNetworkCommandOutput} for command's `response` shape.
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
export class UpdateServiceNetworkCommand extends $Command
  .classBuilder<
    UpdateServiceNetworkCommandInput,
    UpdateServiceNetworkCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "UpdateServiceNetwork", {})
  .n("VPCLatticeClient", "UpdateServiceNetworkCommand")
  .sc(UpdateServiceNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceNetworkRequest;
      output: UpdateServiceNetworkResponse;
    };
    sdk: {
      input: UpdateServiceNetworkCommandInput;
      output: UpdateServiceNetworkCommandOutput;
    };
  };
}
