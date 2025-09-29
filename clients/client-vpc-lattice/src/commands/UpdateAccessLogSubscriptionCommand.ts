// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccessLogSubscriptionRequest, UpdateAccessLogSubscriptionResponse } from "../models/models_0";
import {
  de_UpdateAccessLogSubscriptionCommand,
  se_UpdateAccessLogSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessLogSubscriptionCommand}.
 */
export interface UpdateAccessLogSubscriptionCommandInput extends UpdateAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessLogSubscriptionCommand}.
 */
export interface UpdateAccessLogSubscriptionCommandOutput
  extends UpdateAccessLogSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Updates the specified access log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateAccessLogSubscriptionRequest
 *   accessLogSubscriptionIdentifier: "STRING_VALUE", // required
 *   destinationArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessLogSubscriptionResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   resourceId: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   destinationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessLogSubscriptionCommandInput - {@link UpdateAccessLogSubscriptionCommandInput}
 * @returns {@link UpdateAccessLogSubscriptionCommandOutput}
 * @see {@link UpdateAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessLogSubscriptionCommandOutput} for command's `response` shape.
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
export class UpdateAccessLogSubscriptionCommand extends $Command
  .classBuilder<
    UpdateAccessLogSubscriptionCommandInput,
    UpdateAccessLogSubscriptionCommandOutput,
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
  .s("MercuryControlPlane", "UpdateAccessLogSubscription", {})
  .n("VPCLatticeClient", "UpdateAccessLogSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccessLogSubscriptionCommand)
  .de(de_UpdateAccessLogSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessLogSubscriptionRequest;
      output: UpdateAccessLogSubscriptionResponse;
    };
    sdk: {
      input: UpdateAccessLogSubscriptionCommandInput;
      output: UpdateAccessLogSubscriptionCommandOutput;
    };
  };
}
