// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPortalProductRequest, GetPortalProductResponse } from "../models/models_0";
import { GetPortalProduct } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPortalProductCommand}.
 */
export interface GetPortalProductCommandInput extends GetPortalProductRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalProductCommand}.
 */
export interface GetPortalProductCommandOutput extends GetPortalProductResponse, __MetadataBearer {}

/**
 * <p>Gets a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetPortalProductCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetPortalProductCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetPortalProductRequest
 *   PortalProductId: "STRING_VALUE", // required
 *   ResourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new GetPortalProductCommand(input);
 * const response = await client.send(command);
 * // { // GetPortalProductResponse
 * //   Description: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   DisplayOrder: { // DisplayOrder
 * //     Contents: [ // __listOfSection
 * //       { // Section
 * //         ProductRestEndpointPageArns: [ // __listOf__stringMin20Max2048 // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SectionName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     OverviewPageArn: "STRING_VALUE",
 * //     ProductPageArns: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   LastModified: new Date("TIMESTAMP"),
 * //   PortalProductArn: "STRING_VALUE",
 * //   PortalProductId: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPortalProductCommandInput - {@link GetPortalProductCommandInput}
 * @returns {@link GetPortalProductCommandOutput}
 * @see {@link GetPortalProductCommandInput} for command's `input` shape.
 * @see {@link GetPortalProductCommandOutput} for command's `response` shape.
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
export class GetPortalProductCommand extends $Command
  .classBuilder<
    GetPortalProductCommandInput,
    GetPortalProductCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetPortalProduct", {})
  .n("ApiGatewayV2Client", "GetPortalProductCommand")
  .sc(GetPortalProduct)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPortalProductRequest;
      output: GetPortalProductResponse;
    };
    sdk: {
      input: GetPortalProductCommandInput;
      output: GetPortalProductCommandOutput;
    };
  };
}
