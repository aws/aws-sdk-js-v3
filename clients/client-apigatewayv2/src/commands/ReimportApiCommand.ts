// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReimportApiRequest, ReimportApiResponse } from "../models/models_0";
import { de_ReimportApiCommand, se_ReimportApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReimportApiCommand}.
 */
export interface ReimportApiCommandInput extends ReimportApiRequest {}
/**
 * @public
 *
 * The output of {@link ReimportApiCommand}.
 */
export interface ReimportApiCommandOutput extends ReimportApiResponse, __MetadataBearer {}

/**
 * <p>Puts an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ReimportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ReimportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ReimportApiRequest
 *   ApiId: "STRING_VALUE", // required
 *   Basepath: "STRING_VALUE",
 *   Body: "STRING_VALUE", // required
 *   FailOnWarnings: true || false,
 * };
 * const command = new ReimportApiCommand(input);
 * const response = await client.send(command);
 * // { // ReimportApiResponse
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
 * @param ReimportApiCommandInput - {@link ReimportApiCommandInput}
 * @returns {@link ReimportApiCommandOutput}
 * @see {@link ReimportApiCommandInput} for command's `input` shape.
 * @see {@link ReimportApiCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ReimportApiCommand extends $Command
  .classBuilder<
    ReimportApiCommandInput,
    ReimportApiCommandOutput,
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
  .s("ApiGatewayV2", "ReimportApi", {})
  .n("ApiGatewayV2Client", "ReimportApiCommand")
  .f(void 0, void 0)
  .ser(se_ReimportApiCommand)
  .de(de_ReimportApiCommand)
  .build() {}
