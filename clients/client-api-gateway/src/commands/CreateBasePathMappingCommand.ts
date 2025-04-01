// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BasePathMapping, CreateBasePathMappingRequest } from "../models/models_0";
import { de_CreateBasePathMappingCommand, se_CreateBasePathMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new BasePathMapping resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
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
export class CreateBasePathMappingCommand extends $Command
  .classBuilder<
    CreateBasePathMappingCommandInput,
    CreateBasePathMappingCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "CreateBasePathMapping", {})
  .n("APIGatewayClient", "CreateBasePathMappingCommand")
  .f(void 0, void 0)
  .ser(se_CreateBasePathMappingCommand)
  .de(de_CreateBasePathMappingCommand)
  .build() {
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
