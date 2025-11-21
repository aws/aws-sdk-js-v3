// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIntegrationRequest, Integration } from "../models/models_0";
import { GetIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * <p>Get the integration settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetIntegrationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetIntegrationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetIntegrationRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //   httpMethod: "STRING_VALUE",
 * //   uri: "STRING_VALUE",
 * //   connectionType: "INTERNET" || "VPC_LINK",
 * //   connectionId: "STRING_VALUE",
 * //   credentials: "STRING_VALUE",
 * //   requestParameters: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   requestTemplates: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   passthroughBehavior: "STRING_VALUE",
 * //   contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   timeoutInMillis: Number("int"),
 * //   cacheNamespace: "STRING_VALUE",
 * //   cacheKeyParameters: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   integrationResponses: { // MapOfIntegrationResponse
 * //     "<keys>": { // IntegrationResponse
 * //       statusCode: "STRING_VALUE",
 * //       selectionPattern: "STRING_VALUE",
 * //       responseParameters: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       responseTemplates: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //     },
 * //   },
 * //   tlsConfig: { // TlsConfig
 * //     insecureSkipVerification: true || false,
 * //   },
 * //   responseTransferMode: "BUFFERED" || "STREAM",
 * //   integrationTarget: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
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
export class GetIntegrationCommand extends $Command
  .classBuilder<
    GetIntegrationCommandInput,
    GetIntegrationCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetIntegration", {})
  .n("APIGatewayClient", "GetIntegrationCommand")
  .sc(GetIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationRequest;
      output: Integration;
    };
    sdk: {
      input: GetIntegrationCommandInput;
      output: GetIntegrationCommandOutput;
    };
  };
}
