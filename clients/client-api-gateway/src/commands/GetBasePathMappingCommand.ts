// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BasePathMapping, GetBasePathMappingRequest } from "../models/models_0";
import { GetBasePathMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBasePathMappingCommand}.
 */
export interface GetBasePathMappingCommandInput extends GetBasePathMappingRequest {}
/**
 * @public
 *
 * The output of {@link GetBasePathMappingCommand}.
 */
export interface GetBasePathMappingCommandOutput extends BasePathMapping, __MetadataBearer {}

/**
 * Describe a BasePathMapping resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetBasePathMappingRequest
 *   domainName: "STRING_VALUE", // required
 *   domainNameId: "STRING_VALUE",
 *   basePath: "STRING_VALUE", // required
 * };
 * const command = new GetBasePathMappingCommand(input);
 * const response = await client.send(command);
 * // { // BasePathMapping
 * //   basePath: "STRING_VALUE",
 * //   restApiId: "STRING_VALUE",
 * //   stage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBasePathMappingCommandInput - {@link GetBasePathMappingCommandInput}
 * @returns {@link GetBasePathMappingCommandOutput}
 * @see {@link GetBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link GetBasePathMappingCommandOutput} for command's `response` shape.
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
export class GetBasePathMappingCommand extends command<GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput>(
  _ep0,
  _mw0,
  "GetBasePathMapping",
  GetBasePathMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBasePathMappingRequest;
      output: BasePathMapping;
    };
    sdk: {
      input: GetBasePathMappingCommandInput;
      output: GetBasePathMappingCommandOutput;
    };
  };
}
