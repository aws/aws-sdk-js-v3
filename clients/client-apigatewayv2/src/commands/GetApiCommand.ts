// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetApiRequest, GetApiResponse } from "../models/models_0";
import { GetApi } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiCommand}.
 */
export interface GetApiCommandInput extends GetApiRequest {}
/**
 * @public
 *
 * The output of {@link GetApiCommand}.
 */
export interface GetApiCommandOutput extends GetApiResponse, __MetadataBearer {}

/**
 * <p>Gets an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetApiRequest
 *   ApiId: "STRING_VALUE", // required
 * };
 * const command = new GetApiCommand(input);
 * const response = await client.send(command);
 * // { // GetApiResponse
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
 * @param GetApiCommandInput - {@link GetApiCommandInput}
 * @returns {@link GetApiCommandOutput}
 * @see {@link GetApiCommandInput} for command's `input` shape.
 * @see {@link GetApiCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetApiCommand extends $Command
  .classBuilder<
    GetApiCommandInput,
    GetApiCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetApi", {})
  .n("ApiGatewayV2Client", "GetApiCommand")
  .sc(GetApi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiRequest;
      output: GetApiResponse;
    };
    sdk: {
      input: GetApiCommandInput;
      output: GetApiCommandOutput;
    };
  };
}
