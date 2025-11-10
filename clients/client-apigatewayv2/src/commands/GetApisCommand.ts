// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApisRequest, GetApisResponse } from "../models/models_0";
import { GetApis } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApisCommand}.
 */
export interface GetApisCommandInput extends GetApisRequest {}
/**
 * @public
 *
 * The output of {@link GetApisCommand}.
 */
export interface GetApisCommandOutput extends GetApisResponse, __MetadataBearer {}

/**
 * <p>Gets a collection of Api resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApisCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApisCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetApisRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetApisCommand(input);
 * const response = await client.send(command);
 * // { // GetApisResponse
 * //   Items: [ // __listOfApi
 * //     { // Api
 * //       ApiEndpoint: "STRING_VALUE",
 * //       ApiGatewayManaged: true || false,
 * //       ApiId: "STRING_VALUE",
 * //       ApiKeySelectionExpression: "STRING_VALUE",
 * //       CorsConfiguration: { // Cors
 * //         AllowCredentials: true || false,
 * //         AllowHeaders: [ // CorsHeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowMethods: [ // CorsMethodList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowOrigins: [ // CorsOriginList
 * //           "STRING_VALUE",
 * //         ],
 * //         ExposeHeaders: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MaxAge: Number("int"),
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       DisableSchemaValidation: true || false,
 * //       DisableExecuteApiEndpoint: true || false,
 * //       ImportInfo: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack",
 * //       Name: "STRING_VALUE", // required
 * //       ProtocolType: "WEBSOCKET" || "HTTP", // required
 * //       RouteSelectionExpression: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Version: "STRING_VALUE",
 * //       Warnings: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApisCommandInput - {@link GetApisCommandInput}
 * @returns {@link GetApisCommandOutput}
 * @see {@link GetApisCommandInput} for command's `input` shape.
 * @see {@link GetApisCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetApisCommand extends $Command
  .classBuilder<
    GetApisCommandInput,
    GetApisCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetApis", {})
  .n("ApiGatewayV2Client", "GetApisCommand")
  .sc(GetApis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApisRequest;
      output: GetApisResponse;
    };
    sdk: {
      input: GetApisCommandInput;
      output: GetApisCommandOutput;
    };
  };
}
