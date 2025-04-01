// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BasePathMapping, UpdateBasePathMappingRequest } from "../models/models_0";
import { de_UpdateBasePathMappingCommand, se_UpdateBasePathMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBasePathMappingCommand}.
 */
export interface UpdateBasePathMappingCommandInput extends UpdateBasePathMappingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBasePathMappingCommand}.
 */
export interface UpdateBasePathMappingCommandOutput extends BasePathMapping, __MetadataBearer {}

/**
 * <p>Changes information about the BasePathMapping resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateBasePathMappingRequest
 *   domainName: "STRING_VALUE", // required
 *   domainNameId: "STRING_VALUE",
 *   basePath: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateBasePathMappingCommand(input);
 * const response = await client.send(command);
 * // { // BasePathMapping
 * //   basePath: "STRING_VALUE",
 * //   restApiId: "STRING_VALUE",
 * //   stage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBasePathMappingCommandInput - {@link UpdateBasePathMappingCommandInput}
 * @returns {@link UpdateBasePathMappingCommandOutput}
 * @see {@link UpdateBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateBasePathMappingCommandOutput} for command's `response` shape.
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
export class UpdateBasePathMappingCommand extends $Command
  .classBuilder<
    UpdateBasePathMappingCommandInput,
    UpdateBasePathMappingCommandOutput,
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
  .s("BackplaneControlService", "UpdateBasePathMapping", {})
  .n("APIGatewayClient", "UpdateBasePathMappingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBasePathMappingCommand)
  .de(de_UpdateBasePathMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBasePathMappingRequest;
      output: BasePathMapping;
    };
    sdk: {
      input: UpdateBasePathMappingCommandInput;
      output: UpdateBasePathMappingCommandOutput;
    };
  };
}
