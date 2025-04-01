// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUsagePlanKeyRequest, UsagePlanKey } from "../models/models_0";
import { de_GetUsagePlanKeyCommand, se_GetUsagePlanKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsagePlanKeyCommand}.
 */
export interface GetUsagePlanKeyCommandInput extends GetUsagePlanKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetUsagePlanKeyCommand}.
 */
export interface GetUsagePlanKeyCommandOutput extends UsagePlanKey, __MetadataBearer {}

/**
 * <p>Gets a usage plan key of a given key identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlanKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetUsagePlanKeyRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   keyId: "STRING_VALUE", // required
 * };
 * const command = new GetUsagePlanKeyCommand(input);
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
 * @param GetUsagePlanKeyCommandInput - {@link GetUsagePlanKeyCommandInput}
 * @returns {@link GetUsagePlanKeyCommandOutput}
 * @see {@link GetUsagePlanKeyCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlanKeyCommandOutput} for command's `response` shape.
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
export class GetUsagePlanKeyCommand extends $Command
  .classBuilder<
    GetUsagePlanKeyCommandInput,
    GetUsagePlanKeyCommandOutput,
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
  .s("BackplaneControlService", "GetUsagePlanKey", {})
  .n("APIGatewayClient", "GetUsagePlanKeyCommand")
  .f(void 0, void 0)
  .ser(se_GetUsagePlanKeyCommand)
  .de(de_GetUsagePlanKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsagePlanKeyRequest;
      output: UsagePlanKey;
    };
    sdk: {
      input: GetUsagePlanKeyCommandInput;
      output: GetUsagePlanKeyCommandOutput;
    };
  };
}
