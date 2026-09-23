// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteComponentRequest, DeleteComponentResponse } from "../models/models_0";
import { DeleteComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandInput extends DeleteComponentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandOutput extends DeleteComponentResponse, __MetadataBearer {}

/**
 * <p>Deletes a component build version. The request fails with
 * 			<code>ResourceDependencyException</code> if an image recipe or container
 * 			recipe references this component version. It also fails if the component
 * 			build version is shared with other accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteComponentRequest
 *   componentBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteComponentResponse
 * //   requestId: "STRING_VALUE",
 * //   componentBuildVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteComponentCommandInput - {@link DeleteComponentCommandInput}
 * @returns {@link DeleteComponentCommandOutput}
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
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
 * @example Delete a component build version
 * ```javascript
 * // The following example deletes the specified component build version.
 * const input = {
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1"
 * };
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   componentBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1",
 *   requestId: "c75a1764-2ca3-4cb4-9ce9-6d49f87942b0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteComponentCommand extends command<DeleteComponentCommandInput, DeleteComponentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteComponent",
  DeleteComponent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComponentRequest;
      output: DeleteComponentResponse;
    };
    sdk: {
      input: DeleteComponentCommandInput;
      output: DeleteComponentCommandOutput;
    };
  };
}
