// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProductPageRequest, CreateProductPageResponse } from "../models/models_0";
import { CreateProductPage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProductPageCommand}.
 */
export interface CreateProductPageCommandInput extends CreateProductPageRequest {}
/**
 * @public
 *
 * The output of {@link CreateProductPageCommand}.
 */
export interface CreateProductPageCommandOutput extends CreateProductPageResponse, __MetadataBearer {}

/**
 * <p>Creates a new product page for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateProductPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateProductPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateProductPageRequest
 *   DisplayContent: { // DisplayContent
 *     Body: "STRING_VALUE", // required
 *     Title: "STRING_VALUE", // required
 *   },
 *   PortalProductId: "STRING_VALUE", // required
 * };
 * const command = new CreateProductPageCommand(input);
 * const response = await client.send(command);
 * // { // CreateProductPageResponse
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
 * @param CreateProductPageCommandInput - {@link CreateProductPageCommandInput}
 * @returns {@link CreateProductPageCommandOutput}
 * @see {@link CreateProductPageCommandInput} for command's `input` shape.
 * @see {@link CreateProductPageCommandOutput} for command's `response` shape.
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
export class CreateProductPageCommand extends $Command
  .classBuilder<
    CreateProductPageCommandInput,
    CreateProductPageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreateProductPage", {})
  .n("ApiGatewayV2Client", "CreateProductPageCommand")
  .sc(CreateProductPage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProductPageRequest;
      output: CreateProductPageResponse;
    };
    sdk: {
      input: CreateProductPageCommandInput;
      output: CreateProductPageCommandOutput;
    };
  };
}
