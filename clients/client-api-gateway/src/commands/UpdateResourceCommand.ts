// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Resource, UpdateResourceRequest } from "../models/models_0";
import { de_UpdateResourceCommand, se_UpdateResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandInput extends UpdateResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandOutput extends Resource, __MetadataBearer {}

/**
 * <p>Changes information about a Resource resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateResourceCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateResourceCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateResourceRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * // { // Resource
 * //   id: "STRING_VALUE",
 * //   parentId: "STRING_VALUE",
 * //   pathPart: "STRING_VALUE",
 * //   path: "STRING_VALUE",
 * //   resourceMethods: { // MapOfMethod
 * //     "<keys>": { // Method
 * //       httpMethod: "STRING_VALUE",
 * //       authorizationType: "STRING_VALUE",
 * //       authorizerId: "STRING_VALUE",
 * //       apiKeyRequired: true || false,
 * //       requestValidatorId: "STRING_VALUE",
 * //       operationName: "STRING_VALUE",
 * //       requestParameters: { // MapOfStringToBoolean
 * //         "<keys>": true || false,
 * //       },
 * //       requestModels: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       methodResponses: { // MapOfMethodResponse
 * //         "<keys>": { // MethodResponse
 * //           statusCode: "STRING_VALUE",
 * //           responseParameters: {
 * //             "<keys>": true || false,
 * //           },
 * //           responseModels: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       methodIntegration: { // Integration
 * //         type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //         httpMethod: "STRING_VALUE",
 * //         uri: "STRING_VALUE",
 * //         connectionType: "INTERNET" || "VPC_LINK",
 * //         connectionId: "STRING_VALUE",
 * //         credentials: "STRING_VALUE",
 * //         requestParameters: "<MapOfStringToString>",
 * //         requestTemplates: "<MapOfStringToString>",
 * //         passthroughBehavior: "STRING_VALUE",
 * //         contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //         timeoutInMillis: Number("int"),
 * //         cacheNamespace: "STRING_VALUE",
 * //         cacheKeyParameters: [ // ListOfString
 * //           "STRING_VALUE",
 * //         ],
 * //         integrationResponses: { // MapOfIntegrationResponse
 * //           "<keys>": { // IntegrationResponse
 * //             statusCode: "STRING_VALUE",
 * //             selectionPattern: "STRING_VALUE",
 * //             responseParameters: "<MapOfStringToString>",
 * //             responseTemplates: "<MapOfStringToString>",
 * //             contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //           },
 * //         },
 * //         tlsConfig: { // TlsConfig
 * //           insecureSkipVerification: true || false,
 * //         },
 * //       },
 * //       authorizationScopes: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResourceCommandInput - {@link UpdateResourceCommandInput}
 * @returns {@link UpdateResourceCommandOutput}
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
export class UpdateResourceCommand extends $Command
  .classBuilder<
    UpdateResourceCommandInput,
    UpdateResourceCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "UpdateResource", {})
  .n("APIGatewayClient", "UpdateResourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceCommand)
  .de(de_UpdateResourceCommand)
  .build() {}
