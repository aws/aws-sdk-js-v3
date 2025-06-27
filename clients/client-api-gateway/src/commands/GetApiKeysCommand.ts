// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApiKeys, GetApiKeysRequest } from "../models/models_0";
import { de_GetApiKeysCommand, se_GetApiKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiKeysCommand}.
 */
export interface GetApiKeysCommandInput extends GetApiKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetApiKeysCommand}.
 */
export interface GetApiKeysCommandOutput extends ApiKeys, __MetadataBearer {}

/**
 * <p>Gets information about the current ApiKeys resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetApiKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetApiKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetApiKeysRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   nameQuery: "STRING_VALUE",
 *   customerId: "STRING_VALUE",
 *   includeValues: true || false,
 * };
 * const command = new GetApiKeysCommand(input);
 * const response = await client.send(command);
 * // { // ApiKeys
 * //   warnings: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   items: [ // ListOfApiKey
 * //     { // ApiKey
 * //       id: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       customerId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       enabled: true || false,
 * //       createdDate: new Date("TIMESTAMP"),
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       stageKeys: [
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApiKeysCommandInput - {@link GetApiKeysCommandInput}
 * @returns {@link GetApiKeysCommandOutput}
 * @see {@link GetApiKeysCommandInput} for command's `input` shape.
 * @see {@link GetApiKeysCommandOutput} for command's `response` shape.
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
export class GetApiKeysCommand extends $Command
  .classBuilder<
    GetApiKeysCommandInput,
    GetApiKeysCommandOutput,
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
  .s("BackplaneControlService", "GetApiKeys", {})
  .n("APIGatewayClient", "GetApiKeysCommand")
  .f(void 0, void 0)
  .ser(se_GetApiKeysCommand)
  .de(de_GetApiKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiKeysRequest;
      output: ApiKeys;
    };
    sdk: {
      input: GetApiKeysCommandInput;
      output: GetApiKeysCommandOutput;
    };
  };
}
