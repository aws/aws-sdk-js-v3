// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BasePathMappings, GetBasePathMappingsRequest } from "../models/models_0";
import { GetBasePathMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBasePathMappingsCommand}.
 */
export interface GetBasePathMappingsCommandInput extends GetBasePathMappingsRequest {}
/**
 * @public
 *
 * The output of {@link GetBasePathMappingsCommand}.
 */
export interface GetBasePathMappingsCommandOutput extends BasePathMappings, __MetadataBearer {}

/**
 * Represents a collection of BasePathMapping resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetBasePathMappingsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetBasePathMappingsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetBasePathMappingsRequest
 *   domainName: "STRING_VALUE", // required
 *   domainNameId: "STRING_VALUE",
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetBasePathMappingsCommand(input);
 * const response = await client.send(command);
 * // { // BasePathMappings
 * //   items: [ // ListOfBasePathMapping
 * //     { // BasePathMapping
 * //       basePath: "STRING_VALUE",
 * //       restApiId: "STRING_VALUE",
 * //       stage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBasePathMappingsCommandInput - {@link GetBasePathMappingsCommandInput}
 * @returns {@link GetBasePathMappingsCommandOutput}
 * @see {@link GetBasePathMappingsCommandInput} for command's `input` shape.
 * @see {@link GetBasePathMappingsCommandOutput} for command's `response` shape.
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
export class GetBasePathMappingsCommand extends command<GetBasePathMappingsCommandInput, GetBasePathMappingsCommandOutput>(
  _ep0,
  _mw0,
  "GetBasePathMappings",
  GetBasePathMappings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBasePathMappingsRequest;
      output: BasePathMappings;
    };
    sdk: {
      input: GetBasePathMappingsCommandInput;
      output: GetBasePathMappingsCommandOutput;
    };
  };
}
