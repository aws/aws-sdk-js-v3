// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAuthorizersRequest, GetAuthorizersResponse } from "../models/models_0";
import { de_GetAuthorizersCommand, se_GetAuthorizersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandInput extends GetAuthorizersRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandOutput extends GetAuthorizersResponse, __MetadataBearer {}

/**
 * <p>Gets the Authorizers for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetAuthorizersCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetAuthorizersCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetAuthorizersRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAuthorizersCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizersResponse
 * //   Items: [ // __listOfAuthorizer
 * //     { // Authorizer
 * //       AuthorizerCredentialsArn: "STRING_VALUE",
 * //       AuthorizerId: "STRING_VALUE",
 * //       AuthorizerPayloadFormatVersion: "STRING_VALUE",
 * //       AuthorizerResultTtlInSeconds: Number("int"),
 * //       AuthorizerType: "REQUEST" || "JWT",
 * //       AuthorizerUri: "STRING_VALUE",
 * //       EnableSimpleResponses: true || false,
 * //       IdentitySource: [ // IdentitySourceList
 * //         "STRING_VALUE",
 * //       ],
 * //       IdentityValidationExpression: "STRING_VALUE",
 * //       JwtConfiguration: { // JWTConfiguration
 * //         Audience: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         Issuer: "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAuthorizersCommandInput - {@link GetAuthorizersCommandInput}
 * @returns {@link GetAuthorizersCommandOutput}
 * @see {@link GetAuthorizersCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetAuthorizersCommand extends $Command
  .classBuilder<
    GetAuthorizersCommandInput,
    GetAuthorizersCommandOutput,
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
  .s("ApiGatewayV2", "GetAuthorizers", {})
  .n("ApiGatewayV2Client", "GetAuthorizersCommand")
  .f(void 0, void 0)
  .ser(se_GetAuthorizersCommand)
  .de(de_GetAuthorizersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAuthorizersRequest;
      output: GetAuthorizersResponse;
    };
    sdk: {
      input: GetAuthorizersCommandInput;
      output: GetAuthorizersCommandOutput;
    };
  };
}
