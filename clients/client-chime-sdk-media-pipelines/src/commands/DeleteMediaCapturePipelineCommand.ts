// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMediaCapturePipelineRequest } from "../models/models_0";
import { DeleteMediaCapturePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the media pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, DeleteMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, DeleteMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
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
export class DeleteMediaCapturePipelineCommand extends command<DeleteMediaCapturePipelineCommandInput, DeleteMediaCapturePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMediaCapturePipeline",
  DeleteMediaCapturePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMediaCapturePipelineRequest;
      output: {};
    };
    sdk: {
      input: DeleteMediaCapturePipelineCommandInput;
      output: DeleteMediaCapturePipelineCommandOutput;
    };
  };
}
