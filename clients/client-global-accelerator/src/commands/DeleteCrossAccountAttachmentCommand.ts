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
import { DeleteCrossAccountAttachmentRequest } from "../models/models_0";
import {
  de_DeleteCrossAccountAttachmentCommand,
  se_DeleteCrossAccountAttachmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCrossAccountAttachmentCommand}.
 */
export interface DeleteCrossAccountAttachmentCommandInput extends DeleteCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCrossAccountAttachmentCommand}.
 */
export interface DeleteCrossAccountAttachmentCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a cross-account attachment. When you delete an attachment, Global Accelerator revokes the permission
 * 			to use the resources in the attachment from all principals in the list of principals. Global Accelerator
 * 			revokes the permission for specific resources.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html">
 * 			Working with cross-account attachments and resources in Global Accelerator</a> in the <i>
 * 				Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteCrossAccountAttachmentRequest
 *   AttachmentArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCrossAccountAttachmentCommandInput - {@link DeleteCrossAccountAttachmentCommandInput}
 * @returns {@link DeleteCrossAccountAttachmentCommandOutput}
 * @see {@link DeleteCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteCrossAccountAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *  <p>No cross-account attachment was found.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class DeleteCrossAccountAttachmentCommand extends $Command
  .classBuilder<
    DeleteCrossAccountAttachmentCommandInput,
    DeleteCrossAccountAttachmentCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "DeleteCrossAccountAttachment", {})
  .n("GlobalAcceleratorClient", "DeleteCrossAccountAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCrossAccountAttachmentCommand)
  .de(de_DeleteCrossAccountAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCrossAccountAttachmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteCrossAccountAttachmentCommandInput;
      output: DeleteCrossAccountAttachmentCommandOutput;
    };
  };
}
