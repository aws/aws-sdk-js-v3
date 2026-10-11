// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartImagePipelineExecutionRequest, StartImagePipelineExecutionResponse } from "../models/models_0";
import { StartImagePipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartImagePipelineExecutionCommand}.
 */
export interface StartImagePipelineExecutionCommandInput extends StartImagePipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartImagePipelineExecutionCommand}.
 */
export interface StartImagePipelineExecutionCommandOutput extends StartImagePipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Manually triggers a pipeline to create an image. You can start a build
 * 			this way whether the pipeline is enabled or disabled. The response returns
 * 			as soon as Image Builder creates the new image resource and queues the build. Use
 * 			the returned <code>imageBuildVersionArn</code> with
 * 			<a>GetImage</a> to track build progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, StartImagePipelineExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, StartImagePipelineExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // StartImagePipelineExecutionRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartImagePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartImagePipelineExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartImagePipelineExecutionCommandInput - {@link StartImagePipelineExecutionCommandInput}
 * @returns {@link StartImagePipelineExecutionCommandOutput}
 * @see {@link StartImagePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartImagePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Start a pipeline build manually
 * ```javascript
 * // The following example starts a build for the specified pipeline. The response returns the ARN of the new image build version.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE66666",
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline"
 * };
 * const command = new StartImagePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE66666",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "f477f64c-9ece-4478-977d-5821f8ed051b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartImagePipelineExecutionCommand extends command<StartImagePipelineExecutionCommandInput, StartImagePipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartImagePipelineExecution",
  StartImagePipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImagePipelineExecutionRequest;
      output: StartImagePipelineExecutionResponse;
    };
    sdk: {
      input: StartImagePipelineExecutionCommandInput;
      output: StartImagePipelineExecutionCommandOutput;
    };
  };
}
