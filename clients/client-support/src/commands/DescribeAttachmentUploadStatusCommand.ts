// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAttachmentUploadStatusRequest, DescribeAttachmentUploadStatusResponse } from "../models/models_0";
import { DescribeAttachmentUploadStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAttachmentUploadStatusCommand}.
 */
export interface DescribeAttachmentUploadStatusCommandInput extends DescribeAttachmentUploadStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttachmentUploadStatusCommand}.
 */
export interface DescribeAttachmentUploadStatusCommandOutput extends DescribeAttachmentUploadStatusResponse, __MetadataBearer {}

/**
 * Returns the current status, file name, and progress of a multipart attachment upload that was started with GetAttachmentUploadLinks. Use this operation to track where an upload is in the workflow. While parts are still being uploaded and reported through CompleteAttachmentUpload, the `uploadStatus` is `attachment-not-ready` and `uploadProgress` reports the total number of parts and how many have been completed so far. After every part has been reported and the service finishes processing the upload asynchronously, the `uploadStatus` becomes `attachment-ready` and the `uploadId` can be attached to a case through CreateCase or AddCommunicationToCase.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeAttachmentUploadStatusCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeAttachmentUploadStatusCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeAttachmentUploadStatusRequest
 *   uploadId: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new DescribeAttachmentUploadStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttachmentUploadStatusResponse
 * //   uploadStatus: "attachment-ready" || "attachment-not-ready" || "failed", // required
 * //   fileName: "STRING_VALUE", // required
 * //   uploadProgress: { // UploadProgress
 * //     totalParts: Number("int"),
 * //     completedPartsCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAttachmentUploadStatusCommandInput - {@link DescribeAttachmentUploadStatusCommandInput}
 * @returns {@link DescribeAttachmentUploadStatusCommandOutput}
 * @see {@link DescribeAttachmentUploadStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAttachmentUploadStatusCommandOutput} for command's `response` shape.
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
export class DescribeAttachmentUploadStatusCommand extends command<DescribeAttachmentUploadStatusCommandInput, DescribeAttachmentUploadStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAttachmentUploadStatus",
  DescribeAttachmentUploadStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAttachmentUploadStatusRequest;
      output: DescribeAttachmentUploadStatusResponse;
    };
    sdk: {
      input: DescribeAttachmentUploadStatusCommandInput;
      output: DescribeAttachmentUploadStatusCommandOutput;
    };
  };
}
