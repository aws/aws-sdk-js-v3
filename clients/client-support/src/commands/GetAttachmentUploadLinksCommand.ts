// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAttachmentUploadLinksRequest, GetAttachmentUploadLinksResponse } from "../models/models_0";
import { GetAttachmentUploadLinks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAttachmentUploadLinksCommand}.
 */
export interface GetAttachmentUploadLinksCommandInput extends GetAttachmentUploadLinksRequest {}
/**
 * @public
 *
 * The output of {@link GetAttachmentUploadLinksCommand}.
 */
export interface GetAttachmentUploadLinksCommandOutput extends GetAttachmentUploadLinksResponse, __MetadataBearer {}

/**
 * Returns one or more presigned upload URLs for uploading a large file attachment to a support case by using a multipart upload workflow. The maximum file size that you can upload with this workflow is 150 MB, and parts can be up to 100 MB each. Initiate a new upload by providing `fileName` and `fileSizeBytes`; the response returns a unique `uploadId`, the part size, the total number of parts, and a list of presigned upload URLs for the requested range of parts. A maximum of 10 upload URLs are returned per call. To retrieve more upload URLs for an upload that's already in progress, call `GetAttachmentUploadLinks` again with the existing `uploadId` and a new `uploadRange`.
 *
 * Upload each part to its presigned URL by using HTTP `PUT` and capture the ETag from the response. After you upload all parts, call CompleteAttachmentUpload with the `uploadId` and the list of part indexes and ETags to finalize the upload. You can then attach the upload to a case by passing the `uploadId` in the `uploadIds` parameter of CreateCase or AddCommunicationToCase. To monitor progress before completion, call DescribeAttachmentUploadStatus.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, GetAttachmentUploadLinksCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, GetAttachmentUploadLinksCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // GetAttachmentUploadLinksRequest
 *   fileName: "STRING_VALUE", // required
 *   fileSizeBytes: Number("long"),
 *   uploadId: "STRING_VALUE",
 *   uploadRange: { // UploadRange
 *     startIndex: Number("int"), // required
 *     endIndex: Number("int"),
 *   },
 *   dryRun: true || false,
 * };
 * const command = new GetAttachmentUploadLinksCommand(input);
 * const response = await client.send(command);
 * // { // GetAttachmentUploadLinksResponse
 * //   uploadId: "STRING_VALUE", // required
 * //   partSizeBytes: Number("long"), // required
 * //   totalParts: Number("int"), // required
 * //   nextIndex: Number("int"),
 * //   uploadUrls: [ // UploadUrlList // required
 * //     { // UploadUrl
 * //       url: "STRING_VALUE", // required
 * //       partIndex: Number("int"), // required
 * //       expiryDate: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAttachmentUploadLinksCommandInput - {@link GetAttachmentUploadLinksCommandInput}
 * @returns {@link GetAttachmentUploadLinksCommandOutput}
 * @see {@link GetAttachmentUploadLinksCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentUploadLinksCommandOutput} for command's `response` shape.
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
export class GetAttachmentUploadLinksCommand extends command<GetAttachmentUploadLinksCommandInput, GetAttachmentUploadLinksCommandOutput>(
  _ep0,
  _mw0,
  "GetAttachmentUploadLinks",
  GetAttachmentUploadLinks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttachmentUploadLinksRequest;
      output: GetAttachmentUploadLinksResponse;
    };
    sdk: {
      input: GetAttachmentUploadLinksCommandInput;
      output: GetAttachmentUploadLinksCommandOutput;
    };
  };
}
