// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Integration, PutIntegrationRequest } from "../models/models_0";
import { PutIntegration } from "../schemas/schemas_11_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandInput extends PutIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * <p>Sets up a method's integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutIntegrationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutIntegrationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // PutIntegrationRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY", // required
 *   integrationHttpMethod: "STRING_VALUE",
 *   uri: "STRING_VALUE",
 *   connectionType: "INTERNET" || "VPC_LINK",
 *   connectionId: "STRING_VALUE",
 *   credentials: "STRING_VALUE",
 *   requestParameters: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestTemplates: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   passthroughBehavior: "STRING_VALUE",
 *   cacheNamespace: "STRING_VALUE",
 *   cacheKeyParameters: [ // ListOfString
 *     "STRING_VALUE",
 *   ],
 *   contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 *   timeoutInMillis: Number("int"),
 *   tlsConfig: { // TlsConfig
 *     insecureSkipVerification: true || false,
 *   },
 * };
 * const command = new PutIntegrationCommand(input);
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
 * // };
 *
 * ```
 *
 * @param PutIntegrationCommandInput - {@link PutIntegrationCommandInput}
 * @returns {@link PutIntegrationCommandOutput}
 * @see {@link PutIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
export class PutIntegrationCommand extends $Command
  .classBuilder<
    PutIntegrationCommandInput,
    PutIntegrationCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "PutIntegration", {})
  .n("APIGatewayClient", "PutIntegrationCommand")
  .sc(PutIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIntegrationRequest;
      output: Integration;
    };
    sdk: {
      input: PutIntegrationCommandInput;
      output: PutIntegrationCommandOutput;
    };
  };
}
