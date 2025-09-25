// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { CreatePipeline } from "../schemas/schemas_1_Pipeline";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineResponse, __MetadataBearer {}

/**
 * <p>The CreatePipeline operation creates a pipeline with settings that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreatePipelineCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreatePipelineCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // CreatePipelineRequest
 *   Name: "STRING_VALUE", // required
 *   InputBucket: "STRING_VALUE", // required
 *   OutputBucket: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   AwsKmsKeyArn: "STRING_VALUE",
 *   Notifications: { // Notifications
 *     Progressing: "STRING_VALUE",
 *     Completed: "STRING_VALUE",
 *     Warning: "STRING_VALUE",
 *     Error: "STRING_VALUE",
 *   },
 *   ContentConfig: { // PipelineOutputConfig
 *     Bucket: "STRING_VALUE",
 *     StorageClass: "STRING_VALUE",
 *     Permissions: [ // Permissions
 *       { // Permission
 *         GranteeType: "STRING_VALUE",
 *         Grantee: "STRING_VALUE",
 *         Access: [ // AccessControls
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ThumbnailConfig: {
 *     Bucket: "STRING_VALUE",
 *     StorageClass: "STRING_VALUE",
 *     Permissions: [
 *       {
 *         GranteeType: "STRING_VALUE",
 *         Grantee: "STRING_VALUE",
 *         Access: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipelineResponse
 * //   Pipeline: { // Pipeline
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     InputBucket: "STRING_VALUE",
 * //     OutputBucket: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     AwsKmsKeyArn: "STRING_VALUE",
 * //     Notifications: { // Notifications
 * //       Progressing: "STRING_VALUE",
 * //       Completed: "STRING_VALUE",
 * //       Warning: "STRING_VALUE",
 * //       Error: "STRING_VALUE",
 * //     },
 * //     ContentConfig: { // PipelineOutputConfig
 * //       Bucket: "STRING_VALUE",
 * //       StorageClass: "STRING_VALUE",
 * //       Permissions: [ // Permissions
 * //         { // Permission
 * //           GranteeType: "STRING_VALUE",
 * //           Grantee: "STRING_VALUE",
 * //           Access: [ // AccessControls
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     ThumbnailConfig: {
 * //       Bucket: "STRING_VALUE",
 * //       StorageClass: "STRING_VALUE",
 * //       Permissions: [
 * //         {
 * //           GranteeType: "STRING_VALUE",
 * //           Grantee: "STRING_VALUE",
 * //           Access: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Warnings: [ // Warnings
 * //     { // Warning
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Too many operations for a given AWS account. For example, the number of pipelines
 *             exceeds the maximum allowed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 *
 * @public
 */
export class CreatePipelineCommand extends $Command
  .classBuilder<
    CreatePipelineCommandInput,
    CreatePipelineCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "CreatePipeline", {})
  .n("ElasticTranscoderClient", "CreatePipelineCommand")
  .sc(CreatePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePipelineRequest;
      output: CreatePipelineResponse;
    };
    sdk: {
      input: CreatePipelineCommandInput;
      output: CreatePipelineCommandOutput;
    };
  };
}
