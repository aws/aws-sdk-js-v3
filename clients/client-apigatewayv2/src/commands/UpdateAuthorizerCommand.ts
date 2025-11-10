// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAuthorizerRequest, UpdateAuthorizerResponse } from "../models/models_0";
import { UpdateAuthorizer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandInput extends UpdateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandOutput extends UpdateAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Updates an Authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerCredentialsArn: "STRING_VALUE",
 *   AuthorizerId: "STRING_VALUE", // required
 *   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 *   AuthorizerResultTtlInSeconds: Number("int"),
 *   AuthorizerType: "REQUEST" || "JWT",
 *   AuthorizerUri: "STRING_VALUE",
 *   EnableSimpleResponses: true || false,
 *   IdentitySource: [ // IdentitySourceList
 *     "STRING_VALUE",
 *   ],
 *   IdentityValidationExpression: "STRING_VALUE",
 *   JwtConfiguration: { // JWTConfiguration
 *     Audience: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *     Issuer: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAuthorizerResponse
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
 * @param UpdateAuthorizerCommandInput - {@link UpdateAuthorizerCommandInput}
 * @returns {@link UpdateAuthorizerCommandOutput}
 * @see {@link UpdateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
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
 *
 * @public
 */
export class UpdateAuthorizerCommand extends $Command
  .classBuilder<
    UpdateAuthorizerCommandInput,
    UpdateAuthorizerCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateAuthorizer", {})
  .n("ApiGatewayV2Client", "UpdateAuthorizerCommand")
  .sc(UpdateAuthorizer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAuthorizerRequest;
      output: UpdateAuthorizerResponse;
    };
    sdk: {
      input: UpdateAuthorizerCommandInput;
      output: UpdateAuthorizerCommandOutput;
    };
  };
}
