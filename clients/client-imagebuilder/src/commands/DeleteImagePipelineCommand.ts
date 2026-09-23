// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImagePipelineRequest, DeleteImagePipelineResponse } from "../models/models_0";
import { DeleteImagePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImagePipelineCommand}.
 */
export interface DeleteImagePipelineCommandInput extends DeleteImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImagePipelineCommand}.
 */
export interface DeleteImagePipelineCommandOutput extends DeleteImagePipelineResponse, __MetadataBearer {}

/**
 * <p>Deletes an image pipeline. Images that the pipeline created aren't
 * 			deleted - remove those separately with <a>DeleteImage</a>. You
 * 			can delete a pipeline while a build that it started is still running. The
 * 			build continues independently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteImagePipelineRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteImagePipelineCommandInput - {@link DeleteImagePipelineCommandInput}
 * @returns {@link DeleteImagePipelineCommandOutput}
 * @see {@link DeleteImagePipelineCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceDependencyException} (client fault)
 *  <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
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
 * @example Delete an image pipeline
 * ```javascript
 * // The following example deletes an image pipeline.
 * const input = {
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline"
 * };
 * const command = new DeleteImagePipelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *   requestId: "0536e4e9-5331-493a-921e-e8f86d367043"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteImagePipelineCommand extends command<DeleteImagePipelineCommandInput, DeleteImagePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImagePipeline",
  DeleteImagePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImagePipelineRequest;
      output: DeleteImagePipelineResponse;
    };
    sdk: {
      input: DeleteImagePipelineCommandInput;
      output: DeleteImagePipelineCommandOutput;
    };
  };
}
