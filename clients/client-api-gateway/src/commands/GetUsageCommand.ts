// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUsageRequest, Usage } from "../models/models_0";
import { de_GetUsageCommand, se_GetUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsageCommand}.
 */
export interface GetUsageCommandInput extends GetUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageCommand}.
 */
export interface GetUsageCommandOutput extends Usage, __MetadataBearer {}

/**
 * <p>Gets the usage data of a usage plan in a specified time interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetUsageRequest
 *   usagePlanId: "STRING_VALUE", // required
 *   keyId: "STRING_VALUE",
 *   startDate: "STRING_VALUE", // required
 *   endDate: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetUsageCommand(input);
 * const response = await client.send(command);
 * // { // Usage
 * //   usagePlanId: "STRING_VALUE",
 * //   startDate: "STRING_VALUE",
 * //   endDate: "STRING_VALUE",
 * //   items: { // MapOfKeyUsages
 * //     "<keys>": [ // ListOfUsage
 * //       [ // ListOfLong
 * //         Number("long"),
 * //       ],
 * //     ],
 * //   },
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUsageCommandInput - {@link GetUsageCommandInput}
 * @returns {@link GetUsageCommandOutput}
 * @see {@link GetUsageCommandInput} for command's `input` shape.
 * @see {@link GetUsageCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetUsageCommand extends $Command
  .classBuilder<
    GetUsageCommandInput,
    GetUsageCommandOutput,
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
  .s("BackplaneControlService", "GetUsage", {})
  .n("APIGatewayClient", "GetUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetUsageCommand)
  .de(de_GetUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageRequest;
      output: Usage;
    };
    sdk: {
      input: GetUsageCommandInput;
      output: GetUsageCommandOutput;
    };
  };
}
