// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateApiRequest, UpdateApiResponse } from "../models/models_0";
import { UpdateApi } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandInput extends UpdateApiRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandOutput extends UpdateApiResponse, __MetadataBearer {}

/**
 * <p>Updates an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateApiRequest
 *   ApiId: "STRING_VALUE", // required
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
 *   Name: "STRING_VALUE",
 *   RouteKey: "STRING_VALUE",
 *   RouteSelectionExpression: "STRING_VALUE",
 *   Target: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdateApiCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiResponse
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
 * @param UpdateApiCommandInput - {@link UpdateApiCommandInput}
 * @returns {@link UpdateApiCommandOutput}
 * @see {@link UpdateApiCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCommandOutput} for command's `response` shape.
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
export class UpdateApiCommand extends $Command
  .classBuilder<
    UpdateApiCommandInput,
    UpdateApiCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateApi", {})
  .n("ApiGatewayV2Client", "UpdateApiCommand")
  .sc(UpdateApi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiRequest;
      output: UpdateApiResponse;
    };
    sdk: {
      input: UpdateApiCommandInput;
      output: UpdateApiCommandOutput;
    };
  };
}
