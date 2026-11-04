// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMultipartReadSetUploadRequest, CreateMultipartReadSetUploadResponse } from "../models/models_0";
import { CreateMultipartReadSetUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandInput extends CreateMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandOutput extends CreateMultipartReadSetUploadResponse, __MetadataBearer {}

/**
 * Initiates a multipart read set upload for uploading partitioned source files into a sequence store. You can directly import source files from an EC2 instance and other local compute, or from an S3 bucket. To separate these source files into parts, use the `split` operation. Each part cannot be larger than 100 MB. If the operation is successful, it provides an `uploadId` which is required by the `UploadReadSetPart` API operation to upload parts into a sequence store.
 *
 * To continue uploading a multipart read set into your sequence store, you must use the `UploadReadSetPart` API operation to upload each part individually following the steps below:
 *
 * - Specify the `uploadId` obtained from the previous call to `CreateMultipartReadSetUpload`.
 * - Upload parts for that `uploadId`.
 *
 * When you have finished uploading parts, use the `CompleteMultipartReadSetUpload` API to complete the multipart read set upload and to retrieve the final read set IDs in the response.
 *
 * To learn more about creating parts and the `split` operation, see [Direct upload to a sequence store](https://docs.aws.amazon.com/omics/latest/dev/synchronous-uploads.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sourceFileType: "STRING_VALUE", // required
 *   subjectId: "STRING_VALUE", // required
 *   sampleId: "STRING_VALUE", // required
 *   generatedFrom: "STRING_VALUE",
 *   referenceArn: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultipartReadSetUploadResponse
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   uploadId: "STRING_VALUE", // required
 * //   sourceFileType: "STRING_VALUE", // required
 * //   subjectId: "STRING_VALUE", // required
 * //   sampleId: "STRING_VALUE", // required
 * //   generatedFrom: "STRING_VALUE",
 * //   referenceArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateMultipartReadSetUploadCommandInput - {@link CreateMultipartReadSetUploadCommandInput}
 * @returns {@link CreateMultipartReadSetUploadCommandOutput}
 * @see {@link CreateMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link CreateMultipartReadSetUploadCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *
 * The operation is not supported by Amazon Omics, or the API does not exist.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CreateMultipartReadSetUploadCommand extends command<CreateMultipartReadSetUploadCommandInput, CreateMultipartReadSetUploadCommandOutput>(
  _ep0,
  _mw0,
  "CreateMultipartReadSetUpload",
  CreateMultipartReadSetUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultipartReadSetUploadRequest;
      output: CreateMultipartReadSetUploadResponse;
    };
    sdk: {
      input: CreateMultipartReadSetUploadCommandInput;
      output: CreateMultipartReadSetUploadCommandOutput;
    };
  };
}
