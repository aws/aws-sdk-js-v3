// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { PutContainerRecipePolicyRequest, PutContainerRecipePolicyResponse } from "../models/models_0";
import { de_PutContainerRecipePolicyCommand, se_PutContainerRecipePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutContainerRecipePolicyCommand}.
 */
export interface PutContainerRecipePolicyCommandInput extends PutContainerRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutContainerRecipePolicyCommand}.
 */
export interface PutContainerRecipePolicyCommandOutput extends PutContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Applies a policy to a container image. We recommend that you call the RAM API
 * 			CreateResourceShare
 * 			(https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share
 * 			resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also
 * 			call the RAM API PromoteResourceShareCreatedFromPolicy
 * 			(https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html)
 * 			in order for the resource to be visible to all principals with whom the resource is
 * 			shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // PutContainerRecipePolicyRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutContainerRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   containerRecipeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutContainerRecipePolicyCommandInput - {@link PutContainerRecipePolicyCommandInput}
 * @returns {@link PutContainerRecipePolicyCommandOutput}
 * @see {@link PutContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerRecipePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
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
export class PutContainerRecipePolicyCommand extends $Command
  .classBuilder<
    PutContainerRecipePolicyCommandInput,
    PutContainerRecipePolicyCommandOutput,
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
  .s("imagebuilder", "PutContainerRecipePolicy", {})
  .n("ImagebuilderClient", "PutContainerRecipePolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutContainerRecipePolicyCommand)
  .de(de_PutContainerRecipePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutContainerRecipePolicyRequest;
      output: PutContainerRecipePolicyResponse;
    };
    sdk: {
      input: PutContainerRecipePolicyCommandInput;
      output: PutContainerRecipePolicyCommandOutput;
    };
  };
}
