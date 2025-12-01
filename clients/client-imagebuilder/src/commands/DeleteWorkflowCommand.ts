// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/models_0";
import { DeleteWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandInput extends DeleteWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandOutput extends DeleteWorkflowResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific workflow resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteWorkflowCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteWorkflowCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteWorkflowRequest
 *   workflowBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkflowResponse
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteWorkflowCommandInput - {@link DeleteWorkflowCommandInput}
 * @returns {@link DeleteWorkflowCommandOutput}
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceDependencyException} (client fault)
 *  <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class DeleteWorkflowCommand extends $Command
  .classBuilder<
    DeleteWorkflowCommandInput,
    DeleteWorkflowCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "DeleteWorkflow", {})
  .n("ImagebuilderClient", "DeleteWorkflowCommand")
  .sc(DeleteWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowRequest;
      output: DeleteWorkflowResponse;
    };
    sdk: {
      input: DeleteWorkflowCommandInput;
      output: DeleteWorkflowCommandOutput;
    };
  };
}
