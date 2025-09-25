// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTopicsDetectionJobRequest, StartTopicsDetectionJobResponse } from "../models/models_0";
import { StartTopicsDetectionJob } from "../schemas/schemas_16_StartTopicsDetectionJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTopicsDetectionJobCommand}.
 */
export interface StartTopicsDetectionJobCommandInput extends StartTopicsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTopicsDetectionJobCommand}.
 */
export interface StartTopicsDetectionJobCommandOutput extends StartTopicsDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous topic detection job. Use the
 *         <code>DescribeTopicDetectionJob</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartTopicsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartTopicsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StartTopicsDetectionJobRequest
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
 *   JobName: "STRING_VALUE",
 *   NumberOfTopics: Number("int"),
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
 * };
 * const command = new StartTopicsDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTopicsDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobArn: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartTopicsDetectionJobCommandInput - {@link StartTopicsDetectionJobCommandInput}
 * @returns {@link StartTopicsDetectionJobCommandOutput}
 * @see {@link StartTopicsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartTopicsDetectionJobCommandOutput} for command's `response` shape.
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
export class StartTopicsDetectionJobCommand extends $Command
  .classBuilder<
    StartTopicsDetectionJobCommandInput,
    StartTopicsDetectionJobCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "StartTopicsDetectionJob", {})
  .n("ComprehendClient", "StartTopicsDetectionJobCommand")
  .sc(StartTopicsDetectionJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTopicsDetectionJobRequest;
      output: StartTopicsDetectionJobResponse;
    };
    sdk: {
      input: StartTopicsDetectionJobCommandInput;
      output: StartTopicsDetectionJobCommandOutput;
    };
  };
}
