// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import { CreateUsagePlanKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUsagePlanKeyCommand}.
 */
export interface CreateUsagePlanKeyCommandInput extends CreateUsagePlanKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateUsagePlanKeyCommand}.
 */
export interface CreateUsagePlanKeyCommandOutput extends UsagePlanKey, __MetadataBearer {}

/**
 * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateUsagePlanKeyRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   keyId: "STRING_VALUE", // required
 *   keyType: "STRING_VALUE", // required
 * };
 * const command = new CreateUsagePlanKeyCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlanKey
 * //   id: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUsagePlanKeyCommandInput - {@link CreateUsagePlanKeyCommandInput}
 * @returns {@link CreateUsagePlanKeyCommandOutput}
 * @see {@link CreateUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanKeyCommandOutput} for command's `response` shape.
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
export class CreateUsagePlanKeyCommand extends $Command
  .classBuilder<
    CreateUsagePlanKeyCommandInput,
    CreateUsagePlanKeyCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "CreateUsagePlanKey", {})
  .n("APIGatewayClient", "CreateUsagePlanKeyCommand")
  .sc(CreateUsagePlanKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUsagePlanKeyRequest;
      output: UsagePlanKey;
    };
    sdk: {
      input: CreateUsagePlanKeyCommandInput;
      output: CreateUsagePlanKeyCommandOutput;
    };
  };
}
