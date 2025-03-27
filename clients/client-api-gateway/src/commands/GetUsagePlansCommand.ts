// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUsagePlansRequest, UsagePlans } from "../models/models_0";
import { de_GetUsagePlansCommand, se_GetUsagePlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsagePlansCommand}.
 */
export interface GetUsagePlansCommandInput extends GetUsagePlansRequest {}
/**
 * @public
 *
 * The output of {@link GetUsagePlansCommand}.
 */
export interface GetUsagePlansCommandOutput extends UsagePlans, __MetadataBearer {}

/**
 * <p>Gets all the usage plans of the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlansCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetUsagePlansCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetUsagePlansRequest
 *   position: "STRING_VALUE",
 *   keyId: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetUsagePlansCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlans
 * //   items: [ // ListOfUsagePlan
 * //     { // UsagePlan
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       apiStages: [ // ListOfApiStage
 * //         { // ApiStage
 * //           apiId: "STRING_VALUE",
 * //           stage: "STRING_VALUE",
 * //           throttle: { // MapOfApiStageThrottleSettings
 * //             "<keys>": { // ThrottleSettings
 * //               burstLimit: Number("int"),
 * //               rateLimit: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       throttle: {
 * //         burstLimit: Number("int"),
 * //         rateLimit: Number("double"),
 * //       },
 * //       quota: { // QuotaSettings
 * //         limit: Number("int"),
 * //         offset: Number("int"),
 * //         period: "DAY" || "WEEK" || "MONTH",
 * //       },
 * //       productCode: "STRING_VALUE",
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
 * @param GetUsagePlansCommandInput - {@link GetUsagePlansCommandInput}
 * @returns {@link GetUsagePlansCommandOutput}
 * @see {@link GetUsagePlansCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlansCommandOutput} for command's `response` shape.
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
export class GetUsagePlansCommand extends $Command
  .classBuilder<
    GetUsagePlansCommandInput,
    GetUsagePlansCommandOutput,
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
  .s("BackplaneControlService", "GetUsagePlans", {})
  .n("APIGatewayClient", "GetUsagePlansCommand")
  .f(void 0, void 0)
  .ser(se_GetUsagePlansCommand)
  .de(de_GetUsagePlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsagePlansRequest;
      output: UsagePlans;
    };
    sdk: {
      input: GetUsagePlansCommandInput;
      output: GetUsagePlansCommandOutput;
    };
  };
}
