// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApiRequest, CreateApiResponse } from "../models/models_0";
import { CreateApi } from "../schemas/schemas_1_Api";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiCommand}.
 */
export interface CreateApiCommandInput extends CreateApiRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiCommand}.
 */
export interface CreateApiCommandOutput extends CreateApiResponse, __MetadataBearer {}

/**
 * <p>Creates an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateApiRequest
 *   ApiKeySelectionExpression: "STRING_VALUE",
 *   CorsConfiguration: { // Cors
 *     AllowCredentials: true || false,
 *     AllowHeaders: [ // CorsHeaderList
 *       "STRING_VALUE",
 *     ],
 *     AllowMethods: [ // CorsMethodList
 *       "STRING_VALUE",
 *     ],
 *     AllowOrigins: [ // CorsOriginList
 *       "STRING_VALUE",
 *     ],
 *     ExposeHeaders: [
 *       "STRING_VALUE",
 *     ],
 *     MaxAge: Number("int"),
 *   },
 *   CredentialsArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DisableSchemaValidation: true || false,
 *   DisableExecuteApiEndpoint: true || false,
 *   IpAddressType: "ipv4" || "dualstack",
 *   Name: "STRING_VALUE", // required
 *   ProtocolType: "WEBSOCKET" || "HTTP", // required
 *   RouteKey: "STRING_VALUE",
 *   RouteSelectionExpression: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Target: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 * };
 * const command = new CreateApiCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiResponse
 * //   ApiEndpoint: "STRING_VALUE",
 * //   ApiGatewayManaged: true || false,
 * //   ApiId: "STRING_VALUE",
 * //   ApiKeySelectionExpression: "STRING_VALUE",
 * //   CorsConfiguration: { // Cors
 * //     AllowCredentials: true || false,
 * //     AllowHeaders: [ // CorsHeaderList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowMethods: [ // CorsMethodList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowOrigins: [ // CorsOriginList
 * //       "STRING_VALUE",
 * //     ],
 * //     ExposeHeaders: [
 * //       "STRING_VALUE",
 * //     ],
 * //     MaxAge: Number("int"),
 * //   },
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   DisableSchemaValidation: true || false,
 * //   DisableExecuteApiEndpoint: true || false,
 * //   ImportInfo: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   IpAddressType: "ipv4" || "dualstack",
 * //   Name: "STRING_VALUE",
 * //   ProtocolType: "WEBSOCKET" || "HTTP",
 * //   RouteSelectionExpression: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Version: "STRING_VALUE",
 * //   Warnings: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateApiCommandInput - {@link CreateApiCommandInput}
 * @returns {@link CreateApiCommandOutput}
 * @see {@link CreateApiCommandInput} for command's `input` shape.
 * @see {@link CreateApiCommandOutput} for command's `response` shape.
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
export class CreateApiCommand extends $Command
  .classBuilder<
    CreateApiCommandInput,
    CreateApiCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreateApi", {})
  .n("ApiGatewayV2Client", "CreateApiCommand")
  .sc(CreateApi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApiRequest;
      output: CreateApiResponse;
    };
    sdk: {
      input: CreateApiCommandInput;
      output: CreateApiCommandOutput;
    };
  };
}
