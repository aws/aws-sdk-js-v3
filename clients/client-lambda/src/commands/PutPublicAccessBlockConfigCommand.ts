// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PutPublicAccessBlockConfigRequest, PutPublicAccessBlockConfigResponse } from "../models/models_0";
import { de_PutPublicAccessBlockConfigCommand, se_PutPublicAccessBlockConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPublicAccessBlockConfigCommand}.
 */
export interface PutPublicAccessBlockConfigCommandInput extends PutPublicAccessBlockConfigRequest {}
/**
 * @public
 *
 * The output of {@link PutPublicAccessBlockConfigCommand}.
 */
export interface PutPublicAccessBlockConfigCommandOutput extends PutPublicAccessBlockConfigResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The option to configure public-access settings, and to use the PutPublicAccessBlock and GetPublicAccessBlock APIs, won't be
 *       available in all Amazon Web Services Regions until September 30, 2024.</p>
 *          </note>
 *          <p>Configure your function's public-access settings.</p>
 *          <p>To control public access to a Lambda function, you can choose whether to allow the creation of
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based policies</a> that
 *       allow public access to that function. You can also block public access to a function, even if it has an existing resource-based
 *     policy that allows it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutPublicAccessBlockConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutPublicAccessBlockConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // PutPublicAccessBlockConfigRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   PublicAccessBlockConfig: { // PublicAccessBlockConfig
 *     BlockPublicPolicy: true || false,
 *     RestrictPublicResource: true || false,
 *   },
 * };
 * const command = new PutPublicAccessBlockConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutPublicAccessBlockConfigResponse
 * //   PublicAccessBlockConfig: { // PublicAccessBlockConfig
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicResource: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutPublicAccessBlockConfigCommandInput - {@link PutPublicAccessBlockConfigCommandInput}
 * @returns {@link PutPublicAccessBlockConfigCommandOutput}
 * @see {@link PutPublicAccessBlockConfigCommandInput} for command's `input` shape.
 * @see {@link PutPublicAccessBlockConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
 * @public
 */
export class PutPublicAccessBlockConfigCommand extends $Command
  .classBuilder<
    PutPublicAccessBlockConfigCommandInput,
    PutPublicAccessBlockConfigCommandOutput,
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
  .s("AWSGirApiService", "PutPublicAccessBlockConfig", {})
  .n("LambdaClient", "PutPublicAccessBlockConfigCommand")
  .f(void 0, void 0)
  .ser(se_PutPublicAccessBlockConfigCommand)
  .de(de_PutPublicAccessBlockConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPublicAccessBlockConfigRequest;
      output: PutPublicAccessBlockConfigResponse;
    };
    sdk: {
      input: PutPublicAccessBlockConfigCommandInput;
      output: PutPublicAccessBlockConfigCommandOutput;
    };
  };
}
