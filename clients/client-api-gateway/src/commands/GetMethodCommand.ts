// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMethodRequest, Method } from "../models/models_0";
import { de_GetMethodCommand, se_GetMethodCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMethodCommand}.
 */
export interface GetMethodCommandInput extends GetMethodRequest {}
/**
 * @public
 *
 * The output of {@link GetMethodCommand}.
 */
export interface GetMethodCommandOutput extends Method, __MetadataBearer {}

/**
 * <p>Describe an existing Method resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetMethodRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 * };
 * const command = new GetMethodCommand(input);
 * const response = await client.send(command);
 * // { // Method
 * //   httpMethod: "STRING_VALUE",
 * //   authorizationType: "STRING_VALUE",
 * //   authorizerId: "STRING_VALUE",
 * //   apiKeyRequired: true || false,
 * //   requestValidatorId: "STRING_VALUE",
 * //   operationName: "STRING_VALUE",
 * //   requestParameters: { // MapOfStringToBoolean
 * //     "<keys>": true || false,
 * //   },
 * //   requestModels: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   methodResponses: { // MapOfMethodResponse
 * //     "<keys>": { // MethodResponse
 * //       statusCode: "STRING_VALUE",
 * //       responseParameters: {
 * //         "<keys>": true || false,
 * //       },
 * //       responseModels: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   methodIntegration: { // Integration
 * //     type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //     httpMethod: "STRING_VALUE",
 * //     uri: "STRING_VALUE",
 * //     connectionType: "INTERNET" || "VPC_LINK",
 * //     connectionId: "STRING_VALUE",
 * //     credentials: "STRING_VALUE",
 * //     requestParameters: "<MapOfStringToString>",
 * //     requestTemplates: "<MapOfStringToString>",
 * //     passthroughBehavior: "STRING_VALUE",
 * //     contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //     timeoutInMillis: Number("int"),
 * //     cacheNamespace: "STRING_VALUE",
 * //     cacheKeyParameters: [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //     integrationResponses: { // MapOfIntegrationResponse
 * //       "<keys>": { // IntegrationResponse
 * //         statusCode: "STRING_VALUE",
 * //         selectionPattern: "STRING_VALUE",
 * //         responseParameters: "<MapOfStringToString>",
 * //         responseTemplates: "<MapOfStringToString>",
 * //         contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //       },
 * //     },
 * //     tlsConfig: { // TlsConfig
 * //       insecureSkipVerification: true || false,
 * //     },
 * //   },
 * //   authorizationScopes: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMethodCommandInput - {@link GetMethodCommandInput}
 * @returns {@link GetMethodCommandOutput}
 * @see {@link GetMethodCommandInput} for command's `input` shape.
 * @see {@link GetMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class GetMethodCommand extends $Command
  .classBuilder<
    GetMethodCommandInput,
    GetMethodCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetMethod", {})
  .n("APIGatewayClient", "GetMethodCommand")
  .f(void 0, void 0)
  .ser(se_GetMethodCommand)
  .de(de_GetMethodCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMethodRequest;
      output: Method;
    };
    sdk: {
      input: GetMethodCommandInput;
      output: GetMethodCommandOutput;
    };
  };
}
