// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourcesRequest, Resources } from "../models/models_0";
import { GetResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandInput extends GetResourcesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandOutput extends Resources, __MetadataBearer {}

/**
 * <p>Lists information about a collection of Resource resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetResourcesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetResourcesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetResourcesRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   embed: [ // ListOfString
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * // { // Resources
 * //   items: [ // ListOfResource
 * //     { // Resource
 * //       id: "STRING_VALUE",
 * //       parentId: "STRING_VALUE",
 * //       pathPart: "STRING_VALUE",
 * //       path: "STRING_VALUE",
 * //       resourceMethods: { // MapOfMethod
 * //         "<keys>": { // Method
 * //           httpMethod: "STRING_VALUE",
 * //           authorizationType: "STRING_VALUE",
 * //           authorizerId: "STRING_VALUE",
 * //           apiKeyRequired: true || false,
 * //           requestValidatorId: "STRING_VALUE",
 * //           operationName: "STRING_VALUE",
 * //           requestParameters: { // MapOfStringToBoolean
 * //             "<keys>": true || false,
 * //           },
 * //           requestModels: { // MapOfStringToString
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           methodResponses: { // MapOfMethodResponse
 * //             "<keys>": { // MethodResponse
 * //               statusCode: "STRING_VALUE",
 * //               responseParameters: {
 * //                 "<keys>": true || false,
 * //               },
 * //               responseModels: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           methodIntegration: { // Integration
 * //             type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //             httpMethod: "STRING_VALUE",
 * //             uri: "STRING_VALUE",
 * //             connectionType: "INTERNET" || "VPC_LINK",
 * //             connectionId: "STRING_VALUE",
 * //             credentials: "STRING_VALUE",
 * //             requestParameters: "<MapOfStringToString>",
 * //             requestTemplates: "<MapOfStringToString>",
 * //             passthroughBehavior: "STRING_VALUE",
 * //             contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //             timeoutInMillis: Number("int"),
 * //             cacheNamespace: "STRING_VALUE",
 * //             cacheKeyParameters: [ // ListOfString
 * //               "STRING_VALUE",
 * //             ],
 * //             integrationResponses: { // MapOfIntegrationResponse
 * //               "<keys>": { // IntegrationResponse
 * //                 statusCode: "STRING_VALUE",
 * //                 selectionPattern: "STRING_VALUE",
 * //                 responseParameters: "<MapOfStringToString>",
 * //                 responseTemplates: "<MapOfStringToString>",
 * //                 contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //               },
 * //             },
 * //             tlsConfig: { // TlsConfig
 * //               insecureSkipVerification: true || false,
 * //             },
 * //             responseTransferMode: "BUFFERED" || "STREAM",
 * //             integrationTarget: "STRING_VALUE",
 * //           },
 * //           authorizationScopes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcesCommandInput - {@link GetResourcesCommandInput}
 * @returns {@link GetResourcesCommandOutput}
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
 *
 * @public
 */
export class GetResourcesCommand extends $Command
  .classBuilder<
    GetResourcesCommandInput,
    GetResourcesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetResources", {})
  .n("APIGatewayClient", "GetResourcesCommand")
  .sc(GetResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesRequest;
      output: Resources;
    };
    sdk: {
      input: GetResourcesCommandInput;
      output: GetResourcesCommandOutput;
    };
  };
}
