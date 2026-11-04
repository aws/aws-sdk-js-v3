// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BasePathMapping, CreateBasePathMappingRequest } from "../models/models_0";
import { CreateBasePathMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBasePathMappingCommand}.
 */
export interface CreateBasePathMappingCommandInput extends CreateBasePathMappingRequest {}
/**
 * @public
 *
 * The output of {@link CreateBasePathMappingCommand}.
 */
export interface CreateBasePathMappingCommandOutput extends BasePathMapping, __MetadataBearer {}

/**
 * Creates a new BasePathMapping resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateBasePathMappingRequest
 *   domainName: "STRING_VALUE", // required
 *   domainNameId: "STRING_VALUE",
 *   basePath: "STRING_VALUE",
 *   restApiId: "STRING_VALUE", // required
 *   stage: "STRING_VALUE",
 * };
 * const command = new CreateBasePathMappingCommand(input);
 * const response = await client.send(command);
 * // { // BasePathMapping
 * //   basePath: "STRING_VALUE",
 * //   restApiId: "STRING_VALUE",
 * //   stage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBasePathMappingCommandInput - {@link CreateBasePathMappingCommandInput}
 * @returns {@link CreateBasePathMappingCommandOutput}
 * @see {@link CreateBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link CreateBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded the rate limit. Retry after the specified time period.
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
export class CreateBasePathMappingCommand extends command<CreateBasePathMappingCommandInput, CreateBasePathMappingCommandOutput>(
  _ep0,
  _mw0,
  "CreateBasePathMapping",
  CreateBasePathMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBasePathMappingRequest;
      output: BasePathMapping;
    };
    sdk: {
      input: CreateBasePathMappingCommandInput;
      output: CreateBasePathMappingCommandOutput;
    };
  };
}
