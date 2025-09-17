// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetComponentPolicyRequest, GetComponentPolicyResponse } from "../models/models_0";
import { de_GetComponentPolicyCommand, se_GetComponentPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComponentPolicyCommand}.
 */
export interface GetComponentPolicyCommandInput extends GetComponentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentPolicyCommand}.
 */
export interface GetComponentPolicyCommandOutput extends GetComponentPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets a component policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetComponentPolicyRequest
 *   componentArn: "STRING_VALUE", // required
 * };
 * const command = new GetComponentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentPolicyResponse
 * //   requestId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComponentPolicyCommandInput - {@link GetComponentPolicyCommandInput}
 * @returns {@link GetComponentPolicyCommandOutput}
 * @see {@link GetComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetComponentPolicyCommandOutput} for command's `response` shape.
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
export class GetComponentPolicyCommand extends $Command
  .classBuilder<
    GetComponentPolicyCommandInput,
    GetComponentPolicyCommandOutput,
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
  .s("imagebuilder", "GetComponentPolicy", {})
  .n("ImagebuilderClient", "GetComponentPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetComponentPolicyCommand)
  .de(de_GetComponentPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentPolicyRequest;
      output: GetComponentPolicyResponse;
    };
    sdk: {
      input: GetComponentPolicyCommandInput;
      output: GetComponentPolicyCommandOutput;
    };
  };
}
