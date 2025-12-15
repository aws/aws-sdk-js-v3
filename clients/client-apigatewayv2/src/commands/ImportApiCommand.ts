// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportApiRequest, ImportApiResponse } from "../models/models_0";
import { ImportApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportApiCommand}.
 */
export interface ImportApiCommandInput extends ImportApiRequest {}
/**
 * @public
 *
 * The output of {@link ImportApiCommand}.
 */
export interface ImportApiCommandOutput extends ImportApiResponse, __MetadataBearer {}

/**
 * <p>Imports an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ImportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ImportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ImportApiRequest
 *   Basepath: "STRING_VALUE",
 *   Body: "STRING_VALUE", // required
 *   FailOnWarnings: true || false,
 * };
 * const command = new ImportApiCommand(input);
 * const response = await client.send(command);
 * // { // ImportApiResponse
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
 * @param ImportApiCommandInput - {@link ImportApiCommandInput}
 * @returns {@link ImportApiCommandOutput}
 * @see {@link ImportApiCommandInput} for command's `input` shape.
 * @see {@link ImportApiCommandOutput} for command's `response` shape.
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
export class ImportApiCommand extends $Command
  .classBuilder<
    ImportApiCommandInput,
    ImportApiCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "ImportApi", {})
  .n("ApiGatewayV2Client", "ImportApiCommand")
  .sc(ImportApi$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportApiRequest;
      output: ImportApiResponse;
    };
    sdk: {
      input: ImportApiCommandInput;
      output: ImportApiCommandOutput;
    };
  };
}
