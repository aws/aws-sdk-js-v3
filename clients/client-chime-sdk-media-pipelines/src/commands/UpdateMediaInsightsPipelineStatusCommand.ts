// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMediaInsightsPipelineStatusRequest } from "../models/models_0";
import { UpdateMediaInsightsPipelineStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the status of a media insights pipeline.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMediaPipelines service.
 *
 * @public
 */
export class UpdateMediaInsightsPipelineStatusCommand extends command<UpdateMediaInsightsPipelineStatusCommandInput, UpdateMediaInsightsPipelineStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMediaInsightsPipelineStatus",
  UpdateMediaInsightsPipelineStatus$
) {
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
