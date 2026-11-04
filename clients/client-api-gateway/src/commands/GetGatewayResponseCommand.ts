// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GatewayResponse, GetGatewayResponseRequest } from "../models/models_0";
import { GetGatewayResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGatewayResponseCommand}.
 */
export interface GetGatewayResponseCommandInput extends GetGatewayResponseRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayResponseCommand}.
 */
export interface GetGatewayResponseCommandOutput extends GatewayResponse, __MetadataBearer {}

/**
 * Gets a GatewayResponse of a specified response type on the given RestApi.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetGatewayResponseRequest
 *   restApiId: "STRING_VALUE", // required
 *   responseType: "DEFAULT_4XX" || "DEFAULT_5XX" || "RESOURCE_NOT_FOUND" || "UNAUTHORIZED" || "INVALID_API_KEY" || "ACCESS_DENIED" || "AUTHORIZER_FAILURE" || "AUTHORIZER_CONFIGURATION_ERROR" || "INVALID_SIGNATURE" || "EXPIRED_TOKEN" || "MISSING_AUTHENTICATION_TOKEN" || "INTEGRATION_FAILURE" || "INTEGRATION_TIMEOUT" || "API_CONFIGURATION_ERROR" || "UNSUPPORTED_MEDIA_TYPE" || "BAD_REQUEST_PARAMETERS" || "BAD_REQUEST_BODY" || "REQUEST_TOO_LARGE" || "THROTTLED" || "QUOTA_EXCEEDED" || "WAF_FILTERED", // required
 * };
 * const command = new GetGatewayResponseCommand(input);
 * const response = await client.send(command);
 * // { // GatewayResponse
 * //   responseType: "DEFAULT_4XX" || "DEFAULT_5XX" || "RESOURCE_NOT_FOUND" || "UNAUTHORIZED" || "INVALID_API_KEY" || "ACCESS_DENIED" || "AUTHORIZER_FAILURE" || "AUTHORIZER_CONFIGURATION_ERROR" || "INVALID_SIGNATURE" || "EXPIRED_TOKEN" || "MISSING_AUTHENTICATION_TOKEN" || "INTEGRATION_FAILURE" || "INTEGRATION_TIMEOUT" || "API_CONFIGURATION_ERROR" || "UNSUPPORTED_MEDIA_TYPE" || "BAD_REQUEST_PARAMETERS" || "BAD_REQUEST_BODY" || "REQUEST_TOO_LARGE" || "THROTTLED" || "QUOTA_EXCEEDED" || "WAF_FILTERED",
 * //   statusCode: "STRING_VALUE",
 * //   responseParameters: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   responseTemplates: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   defaultResponse: true || false,
 * // };
 *
 * ```
 *
 * @param GetGatewayResponseCommandInput - {@link GetGatewayResponseCommandInput}
 * @returns {@link GetGatewayResponseCommandOutput}
 * @see {@link GetGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource is not found. Make sure that the request URI is correct.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request has reached its throttling limit. Retry after the specified time period.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is denied because the caller has insufficient permissions.
 *
 * @throws {@link APIGatewayServiceException}
 *
 * Base exception class for all service exceptions from APIGateway service.
 *
 * @public
 */
export class GetGatewayResponseCommand extends command<GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput>(
  _ep0,
  _mw0,
  "GetGatewayResponse",
  GetGatewayResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGatewayResponseRequest;
      output: GatewayResponse;
    };
    sdk: {
      input: GetGatewayResponseCommandInput;
      output: GetGatewayResponseCommandOutput;
    };
  };
}
