// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProductPageRequest, GetProductPageResponse } from "../models/models_0";
import { GetProductPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProductPageCommand}.
 */
export interface GetProductPageCommandInput extends GetProductPageRequest {}
/**
 * @public
 *
 * The output of {@link GetProductPageCommand}.
 */
export interface GetProductPageCommandOutput extends GetProductPageResponse, __MetadataBearer {}

/**
 * <p>Gets a product page of a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetProductPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetProductPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetProductPageRequest
 *   PortalProductId: "STRING_VALUE", // required
 *   ProductPageId: "STRING_VALUE", // required
 *   ResourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new GetProductPageCommand(input);
 * const response = await client.send(command);
 * // { // GetProductPageResponse
 * //   DisplayContent: { // DisplayContent
 * //     Body: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //   },
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ProductPageArn: "STRING_VALUE",
 * //   ProductPageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProductPageCommandInput - {@link GetProductPageCommandInput}
 * @returns {@link GetProductPageCommandOutput}
 * @see {@link GetProductPageCommandInput} for command's `input` shape.
 * @see {@link GetProductPageCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetProductPageCommand extends $Command
  .classBuilder<
    GetProductPageCommandInput,
    GetProductPageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetProductPage", {})
  .n("ApiGatewayV2Client", "GetProductPageCommand")
  .sc(GetProductPage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductPageRequest;
      output: GetProductPageResponse;
    };
    sdk: {
      input: GetProductPageCommandInput;
      output: GetProductPageCommandOutput;
    };
  };
}
