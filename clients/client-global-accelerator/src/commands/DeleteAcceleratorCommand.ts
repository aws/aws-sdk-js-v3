// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DeleteAcceleratorRequest } from "../models/models_0";
import { de_DeleteAcceleratorCommand, se_DeleteAcceleratorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAcceleratorCommand}.
 */
export interface DeleteAcceleratorCommandInput extends DeleteAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAcceleratorCommand}.
 */
export interface DeleteAcceleratorCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 			(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 *          <important>
 *             <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	        Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
 * 		</p>
 *             <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in
 * 		    the <i>Global Accelerator Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAcceleratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAcceleratorCommandInput - {@link DeleteAcceleratorCommandInput}
 * @returns {@link DeleteAcceleratorCommandOutput}
 * @see {@link DeleteAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DeleteAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotDisabledException} (client fault)
 *  <p>The accelerator that you specified could not be disabled.</p>
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AssociatedListenerFoundException} (client fault)
 *  <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an
 * 			accelerator before you can delete it.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class DeleteAcceleratorCommand extends $Command
  .classBuilder<
    DeleteAcceleratorCommandInput,
    DeleteAcceleratorCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "DeleteAccelerator", {})
  .n("GlobalAcceleratorClient", "DeleteAcceleratorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAcceleratorCommand)
  .de(de_DeleteAcceleratorCommand)
  .build() {}
