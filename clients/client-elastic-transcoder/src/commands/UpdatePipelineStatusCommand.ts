// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePipelineStatusRequest, UpdatePipelineStatusResponse } from "../models/models_0";
import { UpdatePipelineStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineStatusCommand}.
 */
export interface UpdatePipelineStatusCommandInput extends UpdatePipelineStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineStatusCommand}.
 */
export interface UpdatePipelineStatusCommandOutput extends UpdatePipelineStatusResponse, __MetadataBearer {}

/**
 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
 *             stops or restarts the processing of jobs.</p>
 *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
 *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
 *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
 *             to cancel, and to send a <a>CancelJob</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // UpdatePipelineStatusRequest
 *   Id: "STRING_VALUE", // required
 *   Status: "STRING_VALUE", // required
 * };
 * const command = new UpdatePipelineStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineStatusResponse
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
 * // };
 *
 * ```
 *
 * @param UpdatePipelineStatusCommandInput - {@link UpdatePipelineStatusCommandInput}
 * @returns {@link UpdatePipelineStatusCommandOutput}
 * @see {@link UpdatePipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource you are attempting to change is in use. For example, you are attempting
 *             to delete a pipeline that is currently in use.</p>
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
export class UpdatePipelineStatusCommand extends $Command
  .classBuilder<
    UpdatePipelineStatusCommandInput,
    UpdatePipelineStatusCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "UpdatePipelineStatus", {})
  .n("ElasticTranscoderClient", "UpdatePipelineStatusCommand")
  .sc(UpdatePipelineStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineStatusRequest;
      output: UpdatePipelineStatusResponse;
    };
    sdk: {
      input: UpdatePipelineStatusCommandInput;
      output: UpdatePipelineStatusCommandOutput;
    };
  };
}
