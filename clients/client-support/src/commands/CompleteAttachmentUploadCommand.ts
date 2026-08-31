// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "../models/models_0";
import { CompleteAttachmentUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompleteAttachmentUploadCommand}.
 */
export interface CompleteAttachmentUploadCommandInput extends CompleteAttachmentUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteAttachmentUploadCommand}.
 */
export interface CompleteAttachmentUploadCommandOutput extends CompleteAttachmentUploadResponse, __MetadataBearer {}

/**
 * <p>Completes an attachment upload that was started with <a>GetAttachmentUploadLinks</a>. After you upload a part of the file to its
 *          presigned Amazon S3 URL, call <code>CompleteAttachmentUpload</code> with the
 *             <code>partIndex</code> and <code>eTag</code> of that part. You can include one part per
 *          call, or multiple parts in a single call. After <code>CompleteAttachmentUpload</code> has
 *          been called for every part of the file, the service processes the upload asynchronously. The
 *             <code>attachment-ready</code> status might not be reflected immediately. Use <a>DescribeAttachmentUploadStatus</a> to poll for the <code>uploadStatus</code> to
 *          become <code>attachment-ready</code> before passing the <code>uploadId</code> to <a>CreateCase</a> or <a>AddCommunicationToCase</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, CompleteAttachmentUploadCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, CompleteAttachmentUploadCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // CompleteAttachmentUploadRequest
 *   uploadId: "STRING_VALUE", // required
 *   completedUploads: [ // CompletedUploadList // required
 *     { // CompletedUpload
 *       partIndex: Number("int"), // required
 *       eTag: "STRING_VALUE", // required
 *     },
 *   ],
 *   dryRun: true || false,
 * };
 * const command = new CompleteAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteAttachmentUploadResponse
 * //   uploadStatus: "attachment-ready" || "attachment-not-ready" || "failed", // required
 * // };
 *
 * ```
 *
 * @param CompleteAttachmentUploadCommandInput - {@link CompleteAttachmentUploadCommandInput}
 * @returns {@link CompleteAttachmentUploadCommandOutput}
 * @see {@link CompleteAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The request was valid, but the operation wasn't performed because <code>dryRun</code> was
 *          set to <code>true</code>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link UploadIdNotFound} (client fault)
 *  <p>The specified <code>uploadId</code> couldn't be located.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 *
 * @public
 */
export class CompleteAttachmentUploadCommand extends command<CompleteAttachmentUploadCommandInput, CompleteAttachmentUploadCommandOutput>(
  _ep0,
  _mw0,
  "CompleteAttachmentUpload",
  CompleteAttachmentUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteAttachmentUploadRequest;
      output: CompleteAttachmentUploadResponse;
    };
    sdk: {
      input: CompleteAttachmentUploadCommandInput;
      output: CompleteAttachmentUploadCommandOutput;
    };
  };
}
