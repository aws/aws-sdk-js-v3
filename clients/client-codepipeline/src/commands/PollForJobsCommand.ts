// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PollForJobsInput, PollForJobsOutput, PollForJobsOutputFilterSensitiveLog } from "../models/models_0";
import { de_PollForJobsCommand, se_PollForJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PollForJobsCommand}.
 */
export interface PollForJobsCommandInput extends PollForJobsInput {}
/**
 * @public
 *
 * The output of {@link PollForJobsCommand}.
 */
export interface PollForJobsCommandOutput extends PollForJobsOutput, __MetadataBearer {}

/**
 * <p>Returns information about any jobs for CodePipeline to act on.
 *                 <code>PollForJobs</code> is valid only for action types with "Custom" in the owner
 *             field. If the action type contains <code>AWS</code> or <code>ThirdParty</code> in the
 *             owner field, the <code>PollForJobs</code> action returns an error.</p>
 *          <important>
 *             <p>When this API is called, CodePipeline returns temporary credentials for
 *                 the S3 bucket used to store artifacts for the pipeline, if the action requires
 *                 access to that S3 bucket for input or output artifacts. This API also returns any
 *                 secret values defined for the action.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PollForJobsInput
 *   actionTypeId: { // ActionTypeId
 *     category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *     owner: "AWS" || "ThirdParty" || "Custom", // required
 *     provider: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   maxBatchSize: Number("int"),
 *   queryParam: { // QueryParamMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PollForJobsCommand(input);
 * const response = await client.send(command);
 * // { // PollForJobsOutput
 * //   jobs: [ // JobList
 * //     { // Job
 * //       id: "STRING_VALUE",
 * //       data: { // JobData
 * //         actionTypeId: { // ActionTypeId
 * //           category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //           owner: "AWS" || "ThirdParty" || "Custom", // required
 * //           provider: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //         actionConfiguration: { // ActionConfiguration
 * //           configuration: { // ActionConfigurationMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         pipelineContext: { // PipelineContext
 * //           pipelineName: "STRING_VALUE",
 * //           stage: { // StageContext
 * //             name: "STRING_VALUE",
 * //           },
 * //           action: { // ActionContext
 * //             name: "STRING_VALUE",
 * //             actionExecutionId: "STRING_VALUE",
 * //           },
 * //           pipelineArn: "STRING_VALUE",
 * //           pipelineExecutionId: "STRING_VALUE",
 * //         },
 * //         inputArtifacts: [ // ArtifactList
 * //           { // Artifact
 * //             name: "STRING_VALUE",
 * //             revision: "STRING_VALUE",
 * //             location: { // ArtifactLocation
 * //               type: "S3",
 * //               s3Location: { // S3ArtifactLocation
 * //                 bucketName: "STRING_VALUE", // required
 * //                 objectKey: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         outputArtifacts: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             revision: "STRING_VALUE",
 * //             location: {
 * //               type: "S3",
 * //               s3Location: {
 * //                 bucketName: "STRING_VALUE", // required
 * //                 objectKey: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         artifactCredentials: { // AWSSessionCredentials
 * //           accessKeyId: "STRING_VALUE", // required
 * //           secretAccessKey: "STRING_VALUE", // required
 * //           sessionToken: "STRING_VALUE", // required
 * //         },
 * //         continuationToken: "STRING_VALUE",
 * //         encryptionKey: { // EncryptionKey
 * //           id: "STRING_VALUE", // required
 * //           type: "KMS", // required
 * //         },
 * //       },
 * //       nonce: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PollForJobsCommandInput - {@link PollForJobsCommandInput}
 * @returns {@link PollForJobsCommandOutput}
 * @see {@link PollForJobsCommandInput} for command's `input` shape.
 * @see {@link PollForJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class PollForJobsCommand extends $Command
  .classBuilder<
    PollForJobsCommandInput,
    PollForJobsCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "PollForJobs", {})
  .n("CodePipelineClient", "PollForJobsCommand")
  .f(void 0, PollForJobsOutputFilterSensitiveLog)
  .ser(se_PollForJobsCommand)
  .de(de_PollForJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PollForJobsInput;
      output: PollForJobsOutput;
    };
    sdk: {
      input: PollForJobsCommandInput;
      output: PollForJobsCommandOutput;
    };
  };
}
