// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApiKey, GetApiKeyRequest } from "../models/models_0";
import { de_GetApiKeyCommand, se_GetApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiKeyCommand}.
 */
export interface GetApiKeyCommandInput extends GetApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetApiKeyCommand}.
 */
export interface GetApiKeyCommandOutput extends ApiKey, __MetadataBearer {}

/**
 * <p>Gets information about the current ApiKey resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetApiKeyRequest
 *   apiKey: "STRING_VALUE", // required
 *   includeValue: true || false,
 * };
 * const command = new GetApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // ApiKey
 * //   id: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   customerId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   enabled: true || false,
 * //   createdDate: new Date("TIMESTAMP"),
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   stageKeys: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApiKeyCommandInput - {@link GetApiKeyCommandInput}
 * @returns {@link GetApiKeyCommandOutput}
 * @see {@link GetApiKeyCommandInput} for command's `input` shape.
 * @see {@link GetApiKeyCommandOutput} for command's `response` shape.
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
export class GetApiKeyCommand extends $Command
  .classBuilder<
    GetApiKeyCommandInput,
    GetApiKeyCommandOutput,
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
  .s("BackplaneControlService", "GetApiKey", {})
  .n("APIGatewayClient", "GetApiKeyCommand")
  .f(void 0, void 0)
  .ser(se_GetApiKeyCommand)
  .de(de_GetApiKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiKeyRequest;
      output: ApiKey;
    };
    sdk: {
      input: GetApiKeyCommandInput;
      output: GetApiKeyCommandOutput;
    };
  };
}
