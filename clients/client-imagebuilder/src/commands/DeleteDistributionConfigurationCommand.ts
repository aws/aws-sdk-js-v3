// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteDistributionConfigurationRequest,
  DeleteDistributionConfigurationResponse,
} from "../models/models_0";
import { DeleteDistributionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDistributionConfigurationCommand}.
 */
export interface DeleteDistributionConfigurationCommandInput extends DeleteDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDistributionConfigurationCommand}.
 */
export interface DeleteDistributionConfigurationCommandOutput extends DeleteDistributionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes a distribution configuration. You can't delete a configuration
 * 			that an image pipeline still references. The request fails with
 * 			<code>ResourceDependencyException</code>. Update or delete the referencing
 * 			pipelines first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // DeleteDistributionConfigurationRequest
 *   distributionConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDistributionConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   distributionConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDistributionConfigurationCommandInput - {@link DeleteDistributionConfigurationCommandInput}
 * @returns {@link DeleteDistributionConfigurationCommandOutput}
 * @see {@link DeleteDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionConfigurationCommandOutput} for command's `response` shape.
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
 * @example Delete a distribution configuration
 * ```javascript
 * // The following example deletes the specified distribution configuration.
 * const input = {
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution-configuration"
 * };
 * const command = new DeleteDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution-configuration",
 *   requestId: "2b752b77-2038-40f4-996a-0a6da1be5e92"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDistributionConfigurationCommand extends command<DeleteDistributionConfigurationCommandInput, DeleteDistributionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDistributionConfiguration",
  DeleteDistributionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDistributionConfigurationRequest;
      output: DeleteDistributionConfigurationResponse;
    };
    sdk: {
      input: DeleteDistributionConfigurationCommandInput;
      output: DeleteDistributionConfigurationCommandOutput;
    };
  };
}
