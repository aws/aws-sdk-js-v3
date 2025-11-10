// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIntegrationRequest, CreateIntegrationResult } from "../models/models_0";
import { CreateIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandInput extends CreateIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends CreateIntegrationResult, __MetadataBearer {}

/**
 * <p>Creates an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateIntegrationCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateIntegrationCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateIntegrationRequest
 *   ApiId: "STRING_VALUE", // required
 *   ConnectionId: "STRING_VALUE",
 *   ConnectionType: "INTERNET" || "VPC_LINK",
 *   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 *   CredentialsArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   IntegrationMethod: "STRING_VALUE",
 *   IntegrationSubtype: "STRING_VALUE",
 *   IntegrationType: "AWS" || "HTTP" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY", // required
 *   IntegrationUri: "STRING_VALUE",
 *   PassthroughBehavior: "WHEN_NO_MATCH" || "NEVER" || "WHEN_NO_TEMPLATES",
 *   PayloadFormatVersion: "STRING_VALUE",
 *   RequestParameters: { // IntegrationParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestTemplates: { // TemplateMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ResponseParameters: { // ResponseParameters
 *     "<keys>": {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   TemplateSelectionExpression: "STRING_VALUE",
 *   TimeoutInMillis: Number("int"),
 *   TlsConfig: { // TlsConfigInput
 *     ServerNameToVerify: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationResult
 * //   ApiGatewayManaged: true || false,
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionType: "INTERNET" || "VPC_LINK",
 * //   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   CredentialsArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   IntegrationId: "STRING_VALUE",
 * //   IntegrationMethod: "STRING_VALUE",
 * //   IntegrationResponseSelectionExpression: "STRING_VALUE",
 * //   IntegrationSubtype: "STRING_VALUE",
 * //   IntegrationType: "AWS" || "HTTP" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //   IntegrationUri: "STRING_VALUE",
 * //   PassthroughBehavior: "WHEN_NO_MATCH" || "NEVER" || "WHEN_NO_TEMPLATES",
 * //   PayloadFormatVersion: "STRING_VALUE",
 * //   RequestParameters: { // IntegrationParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RequestTemplates: { // TemplateMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseParameters: { // ResponseParameters
 * //     "<keys>": {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   TemplateSelectionExpression: "STRING_VALUE",
 * //   TimeoutInMillis: Number("int"),
 * //   TlsConfig: { // TlsConfig
 * //     ServerNameToVerify: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
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
export class CreateIntegrationCommand extends $Command
  .classBuilder<
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreateIntegration", {})
  .n("ApiGatewayV2Client", "CreateIntegrationCommand")
  .sc(CreateIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationRequest;
      output: CreateIntegrationResult;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}
