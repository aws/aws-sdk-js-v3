// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProductPagesRequest, ListProductPagesResponse } from "../models/models_0";
import { ListProductPages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProductPagesCommand}.
 */
export interface ListProductPagesCommandInput extends ListProductPagesRequest {}
/**
 * @public
 *
 * The output of {@link ListProductPagesCommand}.
 */
export interface ListProductPagesCommandOutput extends ListProductPagesResponse, __MetadataBearer {}

/**
 * <p>Lists the product pages for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ListProductPagesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ListProductPagesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ListProductPagesRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   PortalProductId: "STRING_VALUE", // required
 *   ResourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new ListProductPagesCommand(input);
 * const response = await client.send(command);
 * // { // ListProductPagesResponse
 * //   Items: [ // __listOfProductPageSummaryNoBody
 * //     { // ProductPageSummaryNoBody
 * //       LastModified: new Date("TIMESTAMP"), // required
 * //       PageTitle: "STRING_VALUE", // required
 * //       ProductPageArn: "STRING_VALUE", // required
 * //       ProductPageId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProductPagesCommandInput - {@link ListProductPagesCommandInput}
 * @returns {@link ListProductPagesCommandOutput}
 * @see {@link ListProductPagesCommandInput} for command's `input` shape.
 * @see {@link ListProductPagesCommandOutput} for command's `response` shape.
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
export class ListProductPagesCommand extends $Command
  .classBuilder<
    ListProductPagesCommandInput,
    ListProductPagesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "ListProductPages", {})
  .n("ApiGatewayV2Client", "ListProductPagesCommand")
  .sc(ListProductPages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductPagesRequest;
      output: ListProductPagesResponse;
    };
    sdk: {
      input: ListProductPagesCommandInput;
      output: ListProductPagesCommandOutput;
    };
  };
}
