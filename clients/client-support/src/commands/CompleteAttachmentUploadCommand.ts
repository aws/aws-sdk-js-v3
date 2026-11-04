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
 * Completes an attachment upload that was started with GetAttachmentUploadLinks. After you upload a part of the file to its presigned Amazon S3 URL, call `CompleteAttachmentUpload` with the `partIndex` and `eTag` of that part. You can include one part per call, or multiple parts in a single call. After `CompleteAttachmentUpload` has been called for every part of the file, the service processes the upload asynchronously. The `attachment-ready` status might not be reflected immediately. Use DescribeAttachmentUploadStatus to poll for the `uploadStatus` to become `attachment-ready` before passing the `uploadId` to CreateCase or AddCommunicationToCase.
 *
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
 *
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link UploadIdNotFound} (client fault)
 *
 * The specified `uploadId` couldn't be located.
 *
 * @throws {@link SupportServiceException}
 *
 * Base exception class for all service exceptions from Support service.
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
