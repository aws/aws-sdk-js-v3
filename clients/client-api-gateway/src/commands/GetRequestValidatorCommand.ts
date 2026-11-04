// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRequestValidatorRequest, RequestValidator } from "../models/models_0";
import { GetRequestValidator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRequestValidatorCommand}.
 */
export interface GetRequestValidatorCommandInput extends GetRequestValidatorRequest {}
/**
 * @public
 *
 * The output of {@link GetRequestValidatorCommand}.
 */
export interface GetRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * Gets a RequestValidator of a given RestApi.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetRequestValidatorRequest
 *   restApiId: "STRING_VALUE", // required
 *   requestValidatorId: "STRING_VALUE", // required
 * };
 * const command = new GetRequestValidatorCommand(input);
 * const response = await client.send(command);
 * // { // RequestValidator
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   validateRequestBody: true || false,
 * //   validateRequestParameters: true || false,
 * // };
 *
 * ```
 *
 * @param GetRequestValidatorCommandInput - {@link GetRequestValidatorCommandInput}
 * @returns {@link GetRequestValidatorCommandOutput}
 * @see {@link GetRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorCommandOutput} for command's `response` shape.
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
export class GetRequestValidatorCommand extends command<GetRequestValidatorCommandInput, GetRequestValidatorCommandOutput>(
  _ep0,
  _mw0,
  "GetRequestValidator",
  GetRequestValidator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestValidatorRequest;
      output: RequestValidator;
    };
    sdk: {
      input: GetRequestValidatorCommandInput;
      output: GetRequestValidatorCommandOutput;
    };
  };
}
