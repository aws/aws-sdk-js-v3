// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelRequest, GetModelResponse } from "../models/models_0";
import { de_GetModelCommand, se_GetModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelCommand}.
 */
export interface GetModelCommandInput extends GetModelRequest {}
/**
 * @public
 *
 * The output of {@link GetModelCommand}.
 */
export interface GetModelCommandOutput extends GetModelResponse, __MetadataBearer {}

/**
 * <p>Gets a Model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetModelCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetModelCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetModelRequest
 *   ApiId: "STRING_VALUE", // required
 *   ModelId: "STRING_VALUE", // required
 * };
 * const command = new GetModelCommand(input);
 * const response = await client.send(command);
 * // { // GetModelResponse
 * //   ContentType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ModelId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelCommandInput - {@link GetModelCommandInput}
 * @returns {@link GetModelCommandOutput}
 * @see {@link GetModelCommandInput} for command's `input` shape.
 * @see {@link GetModelCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 * @public
 */
export class GetModelCommand extends $Command
  .classBuilder<
    GetModelCommandInput,
    GetModelCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetModel", {})
  .n("ApiGatewayV2Client", "GetModelCommand")
  .f(void 0, void 0)
  .ser(se_GetModelCommand)
  .de(de_GetModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelRequest;
      output: GetModelResponse;
    };
    sdk: {
      input: GetModelCommandInput;
      output: GetModelCommandOutput;
    };
  };
}
