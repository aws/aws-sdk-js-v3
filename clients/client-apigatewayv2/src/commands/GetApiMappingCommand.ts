// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApiMappingRequest, GetApiMappingResponse } from "../models/models_0";
import { GetApiMapping } from "../schemas/schemas_30_GetApiMapping";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiMappingCommand}.
 */
export interface GetApiMappingCommandInput extends GetApiMappingRequest {}
/**
 * @public
 *
 * The output of {@link GetApiMappingCommand}.
 */
export interface GetApiMappingCommandOutput extends GetApiMappingResponse, __MetadataBearer {}

/**
 * <p>Gets an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetApiMappingRequest
 *   ApiMappingId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetApiMappingCommand(input);
 * const response = await client.send(command);
 * // { // GetApiMappingResponse
 * //   ApiId: "STRING_VALUE",
 * //   ApiMappingId: "STRING_VALUE",
 * //   ApiMappingKey: "STRING_VALUE",
 * //   Stage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApiMappingCommandInput - {@link GetApiMappingCommandInput}
 * @returns {@link GetApiMappingCommandOutput}
 * @see {@link GetApiMappingCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingCommandOutput} for command's `response` shape.
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
export class GetApiMappingCommand extends $Command
  .classBuilder<
    GetApiMappingCommandInput,
    GetApiMappingCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetApiMapping", {})
  .n("ApiGatewayV2Client", "GetApiMappingCommand")
  .sc(GetApiMapping)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiMappingRequest;
      output: GetApiMappingResponse;
    };
    sdk: {
      input: GetApiMappingCommandInput;
      output: GetApiMappingCommandOutput;
    };
  };
}
