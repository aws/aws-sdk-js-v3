// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { DeleteDistributionConfigurationRequest, DeleteDistributionConfigurationResponse } from "../models/models_0";
import {
  de_DeleteDistributionConfigurationCommand,
  se_DeleteDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteDistributionConfigurationCommandOutput
  extends DeleteDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
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
export class DeleteDistributionConfigurationCommand extends $Command
  .classBuilder<
    DeleteDistributionConfigurationCommandInput,
    DeleteDistributionConfigurationCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "DeleteDistributionConfiguration", {})
  .n("ImagebuilderClient", "DeleteDistributionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDistributionConfigurationCommand)
  .de(de_DeleteDistributionConfigurationCommand)
  .build() {
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
