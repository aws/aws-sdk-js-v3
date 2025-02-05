// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIntegrationResponsesRequest, GetIntegrationResponsesResponse } from "../models/models_0";
import { de_GetIntegrationResponsesCommand, se_GetIntegrationResponsesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationResponsesCommand}.
 */
export interface GetIntegrationResponsesCommandInput extends GetIntegrationResponsesRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationResponsesCommand}.
 */
export interface GetIntegrationResponsesCommandOutput extends GetIntegrationResponsesResponse, __MetadataBearer {}

/**
 * <p>Gets the IntegrationResponses for an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetIntegrationResponsesRequest
 *   ApiId: "STRING_VALUE", // required
 *   IntegrationId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIntegrationResponsesCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResponsesResponse
 * //   Items: [ // __listOfIntegrationResponse
 * //     { // IntegrationResponse
 * //       ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //       IntegrationResponseId: "STRING_VALUE",
 * //       IntegrationResponseKey: "STRING_VALUE", // required
 * //       ResponseParameters: { // IntegrationParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResponseTemplates: { // TemplateMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TemplateSelectionExpression: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntegrationResponsesCommandInput - {@link GetIntegrationResponsesCommandInput}
 * @returns {@link GetIntegrationResponsesCommandOutput}
 * @see {@link GetIntegrationResponsesCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponsesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetIntegrationResponsesCommand extends $Command
  .classBuilder<
    GetIntegrationResponsesCommandInput,
    GetIntegrationResponsesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetIntegrationResponses", {})
  .n("ApiGatewayV2Client", "GetIntegrationResponsesCommand")
  .f(void 0, void 0)
  .ser(se_GetIntegrationResponsesCommand)
  .de(de_GetIntegrationResponsesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationResponsesRequest;
      output: GetIntegrationResponsesResponse;
    };
    sdk: {
      input: GetIntegrationResponsesCommandInput;
      output: GetIntegrationResponsesCommandOutput;
    };
  };
}
