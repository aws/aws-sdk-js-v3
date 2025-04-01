// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRecipePolicyRequest, GetImageRecipePolicyResponse } from "../models/models_0";
import { de_GetImageRecipePolicyCommand, se_GetImageRecipePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageRecipePolicyCommand}.
 */
export interface GetImageRecipePolicyCommandInput extends GetImageRecipePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetImageRecipePolicyCommand}.
 */
export interface GetImageRecipePolicyCommandOutput extends GetImageRecipePolicyResponse, __MetadataBearer {}

/**
 * <p>Gets an image recipe policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImageRecipePolicyRequest
 *   imageRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetImageRecipePolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageRecipePolicyCommandInput - {@link GetImageRecipePolicyCommandInput}
 * @returns {@link GetImageRecipePolicyCommandOutput}
 * @see {@link GetImageRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipePolicyCommandOutput} for command's `response` shape.
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
export class GetImageRecipePolicyCommand extends $Command
  .classBuilder<
    GetImageRecipePolicyCommandInput,
    GetImageRecipePolicyCommandOutput,
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
  .s("imagebuilder", "GetImageRecipePolicy", {})
  .n("ImagebuilderClient", "GetImageRecipePolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetImageRecipePolicyCommand)
  .de(de_GetImageRecipePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageRecipePolicyRequest;
      output: GetImageRecipePolicyResponse;
    };
    sdk: {
      input: GetImageRecipePolicyCommandInput;
      output: GetImageRecipePolicyCommandOutput;
    };
  };
}
