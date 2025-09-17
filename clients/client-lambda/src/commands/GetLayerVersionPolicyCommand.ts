// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from "../models/models_0";
import { de_GetLayerVersionPolicyCommand, se_GetLayerVersionPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLayerVersionPolicyCommand}.
 */
export interface GetLayerVersionPolicyCommandInput extends GetLayerVersionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLayerVersionPolicyCommand}.
 */
export interface GetLayerVersionPolicyCommandOutput extends GetLayerVersionPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionPolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetLayerVersionPolicyRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 * };
 * const command = new GetLayerVersionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLayerVersionPolicyResponse
 * //   Policy: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLayerVersionPolicyCommandInput - {@link GetLayerVersionPolicyCommandInput}
 * @returns {@link GetLayerVersionPolicyCommandOutput}
 * @see {@link GetLayerVersionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionPolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class GetLayerVersionPolicyCommand extends $Command
  .classBuilder<
    GetLayerVersionPolicyCommandInput,
    GetLayerVersionPolicyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetLayerVersionPolicy", {})
  .n("LambdaClient", "GetLayerVersionPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetLayerVersionPolicyCommand)
  .de(de_GetLayerVersionPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLayerVersionPolicyRequest;
      output: GetLayerVersionPolicyResponse;
    };
    sdk: {
      input: GetLayerVersionPolicyCommandInput;
      output: GetLayerVersionPolicyCommandOutput;
    };
  };
}
