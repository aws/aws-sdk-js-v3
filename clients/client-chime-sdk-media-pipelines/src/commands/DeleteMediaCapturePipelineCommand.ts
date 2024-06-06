// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMediaCapturePipelineRequest } from "../models/models_0";
import { de_DeleteMediaCapturePipelineCommand, se_DeleteMediaCapturePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMediaCapturePipelineCommand}.
 */
export interface DeleteMediaCapturePipelineCommandInput extends DeleteMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMediaCapturePipelineCommand}.
 */
export interface DeleteMediaCapturePipelineCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, DeleteMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, DeleteMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // DeleteMediaCapturePipelineRequest
 *   MediaPipelineId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMediaCapturePipelineCommandInput - {@link DeleteMediaCapturePipelineCommandInput}
 * @returns {@link DeleteMediaCapturePipelineCommandOutput}
 * @see {@link DeleteMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 * @public
 */
export class DeleteMediaCapturePipelineCommand extends $Command
  .classBuilder<
    DeleteMediaCapturePipelineCommandInput,
    DeleteMediaCapturePipelineCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "DeleteMediaCapturePipeline", {})
  .n("ChimeSDKMediaPipelinesClient", "DeleteMediaCapturePipelineCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMediaCapturePipelineCommand)
  .de(de_DeleteMediaCapturePipelineCommand)
  .build() {}
