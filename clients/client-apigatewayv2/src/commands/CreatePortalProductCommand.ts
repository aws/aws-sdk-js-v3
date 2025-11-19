// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePortalProductRequest, CreatePortalProductResponse } from "../models/models_0";
import { CreatePortalProduct } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePortalProductCommand}.
 */
export interface CreatePortalProductCommandInput extends CreatePortalProductRequest {}
/**
 * @public
 *
 * The output of {@link CreatePortalProductCommand}.
 */
export interface CreatePortalProductCommandOutput extends CreatePortalProductResponse, __MetadataBearer {}

/**
 * <p>Creates a new portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreatePortalProductCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreatePortalProductCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreatePortalProductRequest
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePortalProductCommand(input);
 * const response = await client.send(command);
 * // { // CreatePortalProductResponse
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
 * @param CreatePortalProductCommandInput - {@link CreatePortalProductCommandInput}
 * @returns {@link CreatePortalProductCommandOutput}
 * @see {@link CreatePortalProductCommandInput} for command's `input` shape.
 * @see {@link CreatePortalProductCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class CreatePortalProductCommand extends $Command
  .classBuilder<
    CreatePortalProductCommandInput,
    CreatePortalProductCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreatePortalProduct", {})
  .n("ApiGatewayV2Client", "CreatePortalProductCommand")
  .sc(CreatePortalProduct)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortalProductRequest;
      output: CreatePortalProductResponse;
    };
    sdk: {
      input: CreatePortalProductCommandInput;
      output: CreatePortalProductCommandOutput;
    };
  };
}
