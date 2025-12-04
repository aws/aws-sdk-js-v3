// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDocumentClassificationJobRequest, StartDocumentClassificationJobResponse } from "../models/models_0";
import { StartDocumentClassificationJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDocumentClassificationJobCommand}.
 */
export interface StartDocumentClassificationJobCommandInput extends StartDocumentClassificationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDocumentClassificationJobCommand}.
 */
export interface StartDocumentClassificationJobCommandOutput
  extends StartDocumentClassificationJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts an asynchronous document classification job using a custom classification model.  Use the
 *       <code>DescribeDocumentClassificationJob</code>
 *           operation to track the progress of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartDocumentClassificationJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartDocumentClassificationJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StartDocumentClassificationJobRequest
 *   JobName: "STRING_VALUE",
 *   DocumentClassifierArn: "STRING_VALUE",
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *     DocumentReaderConfig: { // DocumentReaderConfig
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   VolumeKmsKeyId: "STRING_VALUE",
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   FlywheelArn: "STRING_VALUE",
 * };
 * const command = new StartDocumentClassificationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDocumentClassificationJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobArn: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //   DocumentClassifierArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDocumentClassificationJobCommandInput - {@link StartDocumentClassificationJobCommandInput}
 * @returns {@link StartDocumentClassificationJobCommandOutput}
 * @see {@link StartDocumentClassificationJobCommandInput} for command's `input` shape.
 * @see {@link StartDocumentClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class StartDocumentClassificationJobCommand extends $Command
  .classBuilder<
    StartDocumentClassificationJobCommandInput,
    StartDocumentClassificationJobCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "StartDocumentClassificationJob", {})
  .n("ComprehendClient", "StartDocumentClassificationJobCommand")
  .sc(StartDocumentClassificationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDocumentClassificationJobRequest;
      output: StartDocumentClassificationJobResponse;
    };
    sdk: {
      input: StartDocumentClassificationJobCommandInput;
      output: StartDocumentClassificationJobCommandOutput;
    };
  };
}
