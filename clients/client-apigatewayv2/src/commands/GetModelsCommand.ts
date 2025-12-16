// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetModelsRequest, GetModelsResponse } from "../models/models_0";
import { GetModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelsCommand}.
 */
export interface GetModelsCommandInput extends GetModelsRequest {}
/**
 * @public
 *
 * The output of {@link GetModelsCommand}.
 */
export interface GetModelsCommandOutput extends GetModelsResponse, __MetadataBearer {}

/**
 * <p>Gets the Models for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetModelsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetModelsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetModelsRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetModelsCommand(input);
 * const response = await client.send(command);
 * // { // GetModelsResponse
 * //   Items: [ // __listOfModel
 * //     { // Model
 * //       ContentType: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ModelId: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       Schema: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelsCommandInput - {@link GetModelsCommandInput}
 * @returns {@link GetModelsCommandOutput}
 * @see {@link GetModelsCommandInput} for command's `input` shape.
 * @see {@link GetModelsCommandOutput} for command's `response` shape.
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
export class GetModelsCommand extends $Command
  .classBuilder<
    GetModelsCommandInput,
    GetModelsCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetModels", {})
  .n("ApiGatewayV2Client", "GetModelsCommand")
  .sc(GetModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelsRequest;
      output: GetModelsResponse;
    };
    sdk: {
      input: GetModelsCommandInput;
      output: GetModelsCommandOutput;
    };
  };
}
