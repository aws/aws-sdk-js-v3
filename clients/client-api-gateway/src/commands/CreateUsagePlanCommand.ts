// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUsagePlanRequest, UsagePlan } from "../models/models_0";
import { de_CreateUsagePlanCommand, se_CreateUsagePlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUsagePlanCommand}.
 */
export interface CreateUsagePlanCommandInput extends CreateUsagePlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateUsagePlanCommand}.
 */
export interface CreateUsagePlanCommandOutput extends UsagePlan, __MetadataBearer {}

/**
 * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateUsagePlanCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateUsagePlanCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // CreateUsagePlanRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   apiStages: [ // ListOfApiStage
 *     { // ApiStage
 *       apiId: "STRING_VALUE",
 *       stage: "STRING_VALUE",
 *       throttle: { // MapOfApiStageThrottleSettings
 *         "<keys>": { // ThrottleSettings
 *           burstLimit: Number("int"),
 *           rateLimit: Number("double"),
 *         },
 *       },
 *     },
 *   ],
 *   throttle: {
 *     burstLimit: Number("int"),
 *     rateLimit: Number("double"),
 *   },
 *   quota: { // QuotaSettings
 *     limit: Number("int"),
 *     offset: Number("int"),
 *     period: "DAY" || "WEEK" || "MONTH",
 *   },
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUsagePlanCommand(input);
 * const response = await client.send(command);
 * // { // UsagePlan
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   apiStages: [ // ListOfApiStage
 * //     { // ApiStage
 * //       apiId: "STRING_VALUE",
 * //       stage: "STRING_VALUE",
 * //       throttle: { // MapOfApiStageThrottleSettings
 * //         "<keys>": { // ThrottleSettings
 * //           burstLimit: Number("int"),
 * //           rateLimit: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   throttle: {
 * //     burstLimit: Number("int"),
 * //     rateLimit: Number("double"),
 * //   },
 * //   quota: { // QuotaSettings
 * //     limit: Number("int"),
 * //     offset: Number("int"),
 * //     period: "DAY" || "WEEK" || "MONTH",
 * //   },
 * //   productCode: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateUsagePlanCommandInput - {@link CreateUsagePlanCommandInput}
 * @returns {@link CreateUsagePlanCommandOutput}
 * @see {@link CreateUsagePlanCommandInput} for command's `input` shape.
 * @see {@link CreateUsagePlanCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateUsagePlanCommand extends $Command
  .classBuilder<
    CreateUsagePlanCommandInput,
    CreateUsagePlanCommandOutput,
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
  .s("BackplaneControlService", "CreateUsagePlan", {})
  .n("APIGatewayClient", "CreateUsagePlanCommand")
  .f(void 0, void 0)
  .ser(se_CreateUsagePlanCommand)
  .de(de_CreateUsagePlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUsagePlanRequest;
      output: UsagePlan;
    };
    sdk: {
      input: CreateUsagePlanCommandInput;
      output: CreateUsagePlanCommandOutput;
    };
  };
}
