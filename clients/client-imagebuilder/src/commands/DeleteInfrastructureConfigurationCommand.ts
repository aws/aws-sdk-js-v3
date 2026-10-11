// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteInfrastructureConfigurationRequest,
  DeleteInfrastructureConfigurationResponse,
} from "../models/models_0";
import { DeleteInfrastructureConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInfrastructureConfigurationCommand}.
 */
export interface DeleteInfrastructureConfigurationCommandInput extends DeleteInfrastructureConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInfrastructureConfigurationCommand}.
 */
export interface DeleteInfrastructureConfigurationCommandOutput extends DeleteInfrastructureConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes an infrastructure configuration. You can't delete a configuration
 * 			that an image pipeline still references. The request fails with
 * 			<code>ResourceDependencyException</code>. Update or delete the referencing
 * 			pipelines first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteInfrastructureConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteInfrastructureConfigurationRequest
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInfrastructureConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   infrastructureConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteInfrastructureConfigurationCommandInput - {@link DeleteInfrastructureConfigurationCommandInput}
 * @returns {@link DeleteInfrastructureConfigurationCommandOutput}
 * @see {@link DeleteInfrastructureConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInfrastructureConfigurationCommandOutput} for command's `response` shape.
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
 * @example Delete an infrastructure configuration
 * ```javascript
 * // The following example deletes the infrastructure configuration with the specified ARN.
 * const input = {
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure"
 * };
 * const command = new DeleteInfrastructureConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   requestId: "fbae57f4-59fc-48ab-a25e-c67b0d9b454c"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteInfrastructureConfigurationCommand extends command<DeleteInfrastructureConfigurationCommandInput, DeleteInfrastructureConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInfrastructureConfiguration",
  DeleteInfrastructureConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInfrastructureConfigurationRequest;
      output: DeleteInfrastructureConfigurationResponse;
    };
    sdk: {
      input: DeleteInfrastructureConfigurationCommandInput;
      output: DeleteInfrastructureConfigurationCommandOutput;
    };
  };
}
