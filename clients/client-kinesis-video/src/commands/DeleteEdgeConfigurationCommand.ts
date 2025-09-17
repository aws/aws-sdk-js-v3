// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteEdgeConfigurationInput, DeleteEdgeConfigurationOutput } from "../models/models_0";
import { de_DeleteEdgeConfigurationCommand, se_DeleteEdgeConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEdgeConfigurationCommand}.
 */
export interface DeleteEdgeConfigurationCommandInput extends DeleteEdgeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteEdgeConfigurationCommand}.
 */
export interface DeleteEdgeConfigurationCommandOutput extends DeleteEdgeConfigurationOutput, __MetadataBearer {}

/**
 * <p>An asynchronous API that deletes a stream’s existing edge configuration, as well as the corresponding media from the Edge Agent.</p>
 *          <p>When you invoke this API, the sync status is set to <code>DELETING</code>. A deletion process starts, in which active edge jobs are stopped and all media is deleted from the edge device. The time to delete varies, depending on the total amount of stored media. If the deletion process fails, the sync status changes to <code>DELETE_FAILED</code>. You will need to re-try the deletion.</p>
 *          <p>When the deletion process has completed successfully, the edge configuration is no longer accessible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteEdgeConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteEdgeConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DeleteEdgeConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DeleteEdgeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEdgeConfigurationCommandInput - {@link DeleteEdgeConfigurationCommandInput}
 * @returns {@link DeleteEdgeConfigurationCommandOutput}
 * @see {@link DeleteEdgeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEdgeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link StreamEdgeConfigurationNotFoundException} (client fault)
 *  <p>The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration
 *          that you specified. </p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class DeleteEdgeConfigurationCommand extends $Command
  .classBuilder<
    DeleteEdgeConfigurationCommandInput,
    DeleteEdgeConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "DeleteEdgeConfiguration", {})
  .n("KinesisVideoClient", "DeleteEdgeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEdgeConfigurationCommand)
  .de(de_DeleteEdgeConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEdgeConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteEdgeConfigurationCommandInput;
      output: DeleteEdgeConfigurationCommandOutput;
    };
  };
}
