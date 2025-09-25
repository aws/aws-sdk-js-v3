// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BasePathMapping, GetBasePathMappingRequest } from "../models/models_0";
import { GetBasePathMapping } from "../schemas/schemas_29_Path";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describe a BasePathMapping resource.</p>
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
export class GetBasePathMappingCommand extends $Command
  .classBuilder<
    GetBasePathMappingCommandInput,
    GetBasePathMappingCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetBasePathMapping", {})
  .n("APIGatewayClient", "GetBasePathMappingCommand")
  .sc(GetBasePathMapping)
  .build() {
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
