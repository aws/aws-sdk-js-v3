// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCrossAccountAttachmentRequest } from "../models/models_0";
import { DeleteCrossAccountAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Delete a cross-account attachment. When you delete an attachment, Global Accelerator revokes the permission to use the resources in the attachment from all principals in the list of principals. Global Accelerator revokes the permission for specific resources.
 *
 * For more information, see [Working with cross-account attachments and resources in Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the *Global Accelerator Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
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
 *
 * You don't have access permission.
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *
 * No cross-account attachment was found.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * There's already a transaction in progress. Another transaction can't be processed.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class DeleteCrossAccountAttachmentCommand extends command<DeleteCrossAccountAttachmentCommandInput, DeleteCrossAccountAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCrossAccountAttachment",
  DeleteCrossAccountAttachment$
) {
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
