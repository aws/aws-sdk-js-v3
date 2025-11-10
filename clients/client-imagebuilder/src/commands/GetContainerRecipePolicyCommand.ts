// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetContainerRecipePolicyRequest, GetContainerRecipePolicyResponse } from "../models/models_0";
import { GetContainerRecipePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContainerRecipePolicyCommand}.
 */
export interface GetContainerRecipePolicyCommandInput extends GetContainerRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerRecipePolicyCommand}.
 */
export interface GetContainerRecipePolicyCommandOutput extends GetContainerRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetContainerRecipePolicyRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContainerRecipePolicyCommandInput - {@link GetContainerRecipePolicyCommandInput}
 * @returns {@link GetContainerRecipePolicyCommandOutput}
 * @see {@link GetContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
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
export class GetContainerRecipePolicyCommand extends $Command
  .classBuilder<
    GetContainerRecipePolicyCommandInput,
    GetContainerRecipePolicyCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetContainerRecipePolicy", {})
  .n("ImagebuilderClient", "GetContainerRecipePolicyCommand")
  .sc(GetContainerRecipePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerRecipePolicyRequest;
      output: GetContainerRecipePolicyResponse;
    };
    sdk: {
      input: GetContainerRecipePolicyCommandInput;
      output: GetContainerRecipePolicyCommandOutput;
    };
  };
}
