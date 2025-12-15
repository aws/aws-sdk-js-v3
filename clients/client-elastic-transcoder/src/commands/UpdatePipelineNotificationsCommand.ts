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
import type { UpdatePipelineNotificationsRequest, UpdatePipelineNotificationsResponse } from "../models/models_0";
import { UpdatePipelineNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineNotificationsCommand}.
 */
export interface UpdatePipelineNotificationsCommandInput extends UpdatePipelineNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineNotificationsCommand}.
 */
export interface UpdatePipelineNotificationsCommandOutput
  extends UpdatePipelineNotificationsResponse,
    __MetadataBearer {}

/**
 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
 *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * // import type { ElasticTranscoderClientConfig } from "@aws-sdk/client-elastic-transcoder";
 * const config = {}; // type is ElasticTranscoderClientConfig
 * const client = new ElasticTranscoderClient(config);
 * const input = { // UpdatePipelineNotificationsRequest
 *   Id: "STRING_VALUE", // required
 *   Notifications: { // Notifications
 *     Progressing: "STRING_VALUE",
 *     Completed: "STRING_VALUE",
 *     Warning: "STRING_VALUE",
 *     Error: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePipelineNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineNotificationsResponse
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
 * @param UpdatePipelineNotificationsCommandInput - {@link UpdatePipelineNotificationsCommandInput}
 * @returns {@link UpdatePipelineNotificationsCommandOutput}
 * @see {@link UpdatePipelineNotificationsCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineNotificationsCommandOutput} for command's `response` shape.
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
export class UpdatePipelineNotificationsCommand extends $Command
  .classBuilder<
    UpdatePipelineNotificationsCommandInput,
    UpdatePipelineNotificationsCommandOutput,
    ElasticTranscoderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticTranscoderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EtsCustomerService", "UpdatePipelineNotifications", {})
  .n("ElasticTranscoderClient", "UpdatePipelineNotificationsCommand")
  .sc(UpdatePipelineNotifications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineNotificationsRequest;
      output: UpdatePipelineNotificationsResponse;
    };
    sdk: {
      input: UpdatePipelineNotificationsCommandInput;
      output: UpdatePipelineNotificationsCommandOutput;
    };
  };
}
