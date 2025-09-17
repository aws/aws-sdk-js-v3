// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessLogSubscriptionRequest, DeleteAccessLogSubscriptionResponse } from "../models/models_0";
import {
  de_DeleteAccessLogSubscriptionCommand,
  se_DeleteAccessLogSubscriptionCommand,
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
 * The input for {@link DeleteAccessLogSubscriptionCommand}.
 */
export interface DeleteAccessLogSubscriptionCommandInput extends DeleteAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessLogSubscriptionCommand}.
 */
export interface DeleteAccessLogSubscriptionCommandOutput
  extends DeleteAccessLogSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified access log subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, DeleteAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, DeleteAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // DeleteAccessLogSubscriptionRequest
 *   accessLogSubscriptionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessLogSubscriptionCommandInput - {@link DeleteAccessLogSubscriptionCommandInput}
 * @returns {@link DeleteAccessLogSubscriptionCommandOutput}
 * @see {@link DeleteAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessLogSubscriptionCommandOutput} for command's `response` shape.
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
export class DeleteAccessLogSubscriptionCommand extends $Command
  .classBuilder<
    DeleteAccessLogSubscriptionCommandInput,
    DeleteAccessLogSubscriptionCommandOutput,
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
  .s("MercuryControlPlane", "DeleteAccessLogSubscription", {})
  .n("VPCLatticeClient", "DeleteAccessLogSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessLogSubscriptionCommand)
  .de(de_DeleteAccessLogSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessLogSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessLogSubscriptionCommandInput;
      output: DeleteAccessLogSubscriptionCommandOutput;
    };
  };
}
