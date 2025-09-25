// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMediaInsightsPipelineStatusRequest } from "../models/models_0";
import { UpdateMediaInsightsPipelineStatus } from "../schemas/schemas_7_Media";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMediaInsightsPipelineStatusCommand}.
 */
export interface UpdateMediaInsightsPipelineStatusCommandInput extends UpdateMediaInsightsPipelineStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMediaInsightsPipelineStatusCommand}.
 */
export interface UpdateMediaInsightsPipelineStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the status of a media insights pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, UpdateMediaInsightsPipelineStatusCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, UpdateMediaInsightsPipelineStatusCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // UpdateMediaInsightsPipelineStatusRequest
 *   Identifier: "STRING_VALUE", // required
 *   UpdateStatus: "Pause" || "Resume", // required
 * };
 * const command = new UpdateMediaInsightsPipelineStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMediaInsightsPipelineStatusCommandInput - {@link UpdateMediaInsightsPipelineStatusCommandInput}
 * @returns {@link UpdateMediaInsightsPipelineStatusCommandOutput}
 * @see {@link UpdateMediaInsightsPipelineStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaInsightsPipelineStatusCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 *
 * @public
 */
export class UpdateMediaInsightsPipelineStatusCommand extends $Command
  .classBuilder<
    UpdateMediaInsightsPipelineStatusCommandInput,
    UpdateMediaInsightsPipelineStatusCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "UpdateMediaInsightsPipelineStatus", {})
  .n("ChimeSDKMediaPipelinesClient", "UpdateMediaInsightsPipelineStatusCommand")
  .sc(UpdateMediaInsightsPipelineStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMediaInsightsPipelineStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateMediaInsightsPipelineStatusCommandInput;
      output: UpdateMediaInsightsPipelineStatusCommandOutput;
    };
  };
}
