// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUsagePlanKeysRequest, UsagePlanKeys } from "../models/models_0";
import { de_GetUsagePlanKeysCommand, se_GetUsagePlanKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsagePlanKeysCommand}.
 */
export interface GetUsagePlanKeysCommandInput extends GetUsagePlanKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetUsagePlanKeysCommand}.
 */
export interface GetUsagePlanKeysCommandOutput extends UsagePlanKeys, __MetadataBearer {}

/**
 * <p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetUsagePlanKeysRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   nameQuery: "STRING_VALUE",
 * };
 * const command = new GetUsagePlanKeysCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlanKeys
 * //   items: [ // ListOfUsagePlanKey
 * //     { // UsagePlanKey
 * //       id: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUsagePlanKeysCommandInput - {@link GetUsagePlanKeysCommandInput}
 * @returns {@link GetUsagePlanKeysCommandOutput}
 * @see {@link GetUsagePlanKeysCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanKeysCommandOutput} for command's `response` shape.
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
export class GetUsagePlanKeysCommand extends $Command
  .classBuilder<
    GetUsagePlanKeysCommandInput,
    GetUsagePlanKeysCommandOutput,
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
  .s("BackplaneControlService", "GetUsagePlanKeys", {})
  .n("APIGatewayClient", "GetUsagePlanKeysCommand")
  .f(void 0, void 0)
  .ser(se_GetUsagePlanKeysCommand)
  .de(de_GetUsagePlanKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsagePlanKeysRequest;
      output: UsagePlanKeys;
    };
    sdk: {
      input: GetUsagePlanKeysCommandInput;
      output: GetUsagePlanKeysCommandOutput;
    };
  };
}
