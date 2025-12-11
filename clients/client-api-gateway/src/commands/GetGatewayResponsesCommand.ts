// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GatewayResponses, GetGatewayResponsesRequest } from "../models/models_0";
import { GetGatewayResponses } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayResponsesCommand}.
 */
export interface GetGatewayResponsesCommandInput extends GetGatewayResponsesRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayResponsesCommand}.
 */
export interface GetGatewayResponsesCommandOutput extends GatewayResponses, __MetadataBearer {}

/**
 * <p>Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponsesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetGatewayResponsesRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetGatewayResponsesCommand(input);
 * const response = await client.send(command);
 * // { // GatewayResponses
 * //   items: [ // ListOfGatewayResponse
 * //     { // GatewayResponse
 * //       responseType: "DEFAULT_4XX" || "DEFAULT_5XX" || "RESOURCE_NOT_FOUND" || "UNAUTHORIZED" || "INVALID_API_KEY" || "ACCESS_DENIED" || "AUTHORIZER_FAILURE" || "AUTHORIZER_CONFIGURATION_ERROR" || "INVALID_SIGNATURE" || "EXPIRED_TOKEN" || "MISSING_AUTHENTICATION_TOKEN" || "INTEGRATION_FAILURE" || "INTEGRATION_TIMEOUT" || "API_CONFIGURATION_ERROR" || "UNSUPPORTED_MEDIA_TYPE" || "BAD_REQUEST_PARAMETERS" || "BAD_REQUEST_BODY" || "REQUEST_TOO_LARGE" || "THROTTLED" || "QUOTA_EXCEEDED" || "WAF_FILTERED",
 * //       statusCode: "STRING_VALUE",
 * //       responseParameters: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       responseTemplates: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       defaultResponse: true || false,
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGatewayResponsesCommandInput - {@link GetGatewayResponsesCommandInput}
 * @returns {@link GetGatewayResponsesCommandOutput}
 * @see {@link GetGatewayResponsesCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponsesCommandOutput} for command's `response` shape.
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
export class GetGatewayResponsesCommand extends $Command
  .classBuilder<
    GetGatewayResponsesCommandInput,
    GetGatewayResponsesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetGatewayResponses", {})
  .n("APIGatewayClient", "GetGatewayResponsesCommand")
  .sc(GetGatewayResponses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGatewayResponsesRequest;
      output: GatewayResponses;
    };
    sdk: {
      input: GetGatewayResponsesCommandInput;
      output: GetGatewayResponsesCommandOutput;
    };
  };
}
