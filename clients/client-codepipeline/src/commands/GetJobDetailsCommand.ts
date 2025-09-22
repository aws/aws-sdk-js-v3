// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobDetailsInput, GetJobDetailsOutput } from "../models/models_0";
import { GetJobDetails } from "../schemas/schemas_2_Action";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobDetailsCommand}.
 */
export interface GetJobDetailsCommandInput extends GetJobDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetJobDetailsCommand}.
 */
export interface GetJobDetailsCommandOutput extends GetJobDetailsOutput, __MetadataBearer {}

/**
 * <p>Returns information about a job. Used for custom actions only.</p>
 *          <important>
 *             <p>When this API is called, CodePipeline returns temporary credentials for
 *                 the S3 bucket used to store artifacts for the pipeline, if the action requires
 *                 access to that S3 bucket for input or output artifacts. This API also returns any
 *                 secret values defined for the action.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // GetJobDetailsInput
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetJobDetailsOutput
 * //   jobDetails: { // JobDetails
 * //     id: "STRING_VALUE",
 * //     data: { // JobData
 * //       actionTypeId: { // ActionTypeId
 * //         category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //         owner: "AWS" || "ThirdParty" || "Custom", // required
 * //         provider: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       actionConfiguration: { // ActionConfiguration
 * //         configuration: { // ActionConfigurationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       pipelineContext: { // PipelineContext
 * //         pipelineName: "STRING_VALUE",
 * //         stage: { // StageContext
 * //           name: "STRING_VALUE",
 * //         },
 * //         action: { // ActionContext
 * //           name: "STRING_VALUE",
 * //           actionExecutionId: "STRING_VALUE",
 * //         },
 * //         pipelineArn: "STRING_VALUE",
 * //         pipelineExecutionId: "STRING_VALUE",
 * //       },
 * //       inputArtifacts: [ // ArtifactList
 * //         { // Artifact
 * //           name: "STRING_VALUE",
 * //           revision: "STRING_VALUE",
 * //           location: { // ArtifactLocation
 * //             type: "S3",
 * //             s3Location: { // S3ArtifactLocation
 * //               bucketName: "STRING_VALUE", // required
 * //               objectKey: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       outputArtifacts: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           revision: "STRING_VALUE",
 * //           location: {
 * //             type: "S3",
 * //             s3Location: {
 * //               bucketName: "STRING_VALUE", // required
 * //               objectKey: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       artifactCredentials: { // AWSSessionCredentials
 * //         accessKeyId: "STRING_VALUE", // required
 * //         secretAccessKey: "STRING_VALUE", // required
 * //         sessionToken: "STRING_VALUE", // required
 * //       },
 * //       continuationToken: "STRING_VALUE",
 * //       encryptionKey: { // EncryptionKey
 * //         id: "STRING_VALUE", // required
 * //         type: "KMS", // required
 * //       },
 * //     },
 * //     accountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobDetailsCommandInput - {@link GetJobDetailsCommandInput}
 * @returns {@link GetJobDetailsCommandOutput}
 * @see {@link GetJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
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
export class GetJobDetailsCommand extends $Command
  .classBuilder<
    GetJobDetailsCommandInput,
    GetJobDetailsCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "GetJobDetails", {})
  .n("CodePipelineClient", "GetJobDetailsCommand")
  .sc(GetJobDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobDetailsInput;
      output: GetJobDetailsOutput;
    };
    sdk: {
      input: GetJobDetailsCommandInput;
      output: GetJobDetailsCommandOutput;
    };
  };
}
