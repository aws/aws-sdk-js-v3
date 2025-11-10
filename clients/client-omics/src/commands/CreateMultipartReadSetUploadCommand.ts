// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMultipartReadSetUploadRequest, CreateMultipartReadSetUploadResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { CreateMultipartReadSetUpload } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateMultipartReadSetUploadCommandOutput
  extends CreateMultipartReadSetUploadResponse,
    __MetadataBearer {}

/**
 * <p>Initiates a multipart read set upload for uploading partitioned source files into a sequence store. You can directly import source files from an EC2 instance and other local compute, or from an S3 bucket. To separate these source files into parts, use the <code>split</code> operation. Each part cannot be larger than 100 MB. If the operation is successful, it provides an <code>uploadId</code> which is required by the <code>UploadReadSetPart</code> API operation to upload parts into a sequence store.</p> <p>To continue uploading a multipart read set into your sequence store, you must use the <code>UploadReadSetPart</code> API operation to upload each part individually following the steps below:</p> <ul> <li> <p>Specify the <code>uploadId</code> obtained from the previous call to <code>CreateMultipartReadSetUpload</code>.</p> </li> <li> <p>Upload parts for that <code>uploadId</code>.</p> </li> </ul> <p>When you have finished uploading parts, use the <code>CompleteMultipartReadSetUpload</code> API to complete the multipart read set upload and to retrieve the final read set IDs in the response.</p> <p>To learn more about creating parts and the <code>split</code> operation, see <a href="https://docs.aws.amazon.com/omics/latest/dev/synchronous-uploads.html">Direct upload to a sequence store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class CreateMultipartReadSetUploadCommand extends $Command
  .classBuilder<
    CreateMultipartReadSetUploadCommandInput,
    CreateMultipartReadSetUploadCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "CreateMultipartReadSetUpload", {})
  .n("OmicsClient", "CreateMultipartReadSetUploadCommand")
  .sc(CreateMultipartReadSetUpload)
  .build() {
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
