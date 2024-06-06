// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAuthorizerRequest, GetAuthorizerResponse } from "../models/models_0";
import { de_GetAuthorizerCommand, se_GetAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizerCommand}.
 */
export interface GetAuthorizerCommandInput extends GetAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizerCommand}.
 */
export interface GetAuthorizerCommandOutput extends GetAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Gets an Authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerId: "STRING_VALUE", // required
 * };
 * const command = new GetAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizerResponse
 * //   AuthorizerCredentialsArn: "STRING_VALUE",
 * //   AuthorizerId: "STRING_VALUE",
 * //   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 * //   AuthorizerResultTtlInSeconds: Number("int"),
 * //   AuthorizerType: "REQUEST" || "JWT",
 * //   AuthorizerUri: "STRING_VALUE",
 * //   EnableSimpleResponses: true || false,
 * //   IdentitySource: [ // IdentitySourceList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityValidationExpression: "STRING_VALUE",
 * //   JwtConfiguration: { // JWTConfiguration
 * //     Audience: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Issuer: "STRING_VALUE",
 * //   },
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAuthorizerCommandInput - {@link GetAuthorizerCommandInput}
 * @returns {@link GetAuthorizerCommandOutput}
 * @see {@link GetAuthorizerCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizerCommandOutput} for command's `response` shape.
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
export class GetAuthorizerCommand extends $Command
  .classBuilder<
    GetAuthorizerCommandInput,
    GetAuthorizerCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetAuthorizer", {})
  .n("ApiGatewayV2Client", "GetAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_GetAuthorizerCommand)
  .de(de_GetAuthorizerCommand)
  .build() {}
