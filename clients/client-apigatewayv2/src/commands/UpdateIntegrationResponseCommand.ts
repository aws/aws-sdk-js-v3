// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIntegrationResponseRequest, UpdateIntegrationResponseResponse } from "../models/models_0";
import { UpdateIntegrationResponse } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIntegrationResponseCommand}.
 */
export interface UpdateIntegrationResponseCommandInput extends UpdateIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIntegrationResponseCommand}.
 */
export interface UpdateIntegrationResponseCommandOutput extends UpdateIntegrationResponseResponse, __MetadataBearer {}

/**
 * <p>Updates an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateIntegrationResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 *   IntegrationId: "STRING_VALUE", // required
 *   IntegrationResponseId: "STRING_VALUE", // required
 *   IntegrationResponseKey: "STRING_VALUE",
 *   ResponseParameters: { // IntegrationParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ResponseTemplates: { // TemplateMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TemplateSelectionExpression: "STRING_VALUE",
 * };
 * const command = new UpdateIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationResponseResponse
 * //   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   IntegrationResponseId: "STRING_VALUE",
 * //   IntegrationResponseKey: "STRING_VALUE",
 * //   ResponseParameters: { // IntegrationParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseTemplates: { // TemplateMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TemplateSelectionExpression: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationResponseCommandInput - {@link UpdateIntegrationResponseCommandInput}
 * @returns {@link UpdateIntegrationResponseCommandOutput}
 * @see {@link UpdateIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationResponseCommandOutput} for command's `response` shape.
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
export class UpdateIntegrationResponseCommand extends $Command
  .classBuilder<
    UpdateIntegrationResponseCommandInput,
    UpdateIntegrationResponseCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateIntegrationResponse", {})
  .n("ApiGatewayV2Client", "UpdateIntegrationResponseCommand")
  .sc(UpdateIntegrationResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegrationResponseRequest;
      output: UpdateIntegrationResponseResponse;
    };
    sdk: {
      input: UpdateIntegrationResponseCommandInput;
      output: UpdateIntegrationResponseCommandOutput;
    };
  };
}
