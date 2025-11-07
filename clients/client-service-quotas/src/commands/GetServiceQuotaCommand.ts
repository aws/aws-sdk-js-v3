// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceQuotaRequest, GetServiceQuotaResponse } from "../models/models_0";
import { GetServiceQuota } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceQuotaCommand}.
 */
export interface GetServiceQuotaCommandInput extends GetServiceQuotaRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceQuotaCommand}.
 */
export interface GetServiceQuotaCommandOutput extends GetServiceQuotaResponse, __MetadataBearer {}

/**
 * <p>Retrieves the applied quota value for the specified account-level or resource-level
 *             quota. For some quotas, only the default values are available. If the applied quota
 *             value is not available for a quota, the quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetServiceQuotaRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   ContextId: "STRING_VALUE",
 * };
 * const command = new GetServiceQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceQuotaResponse
 * //   Quota: { // ServiceQuota
 * //     ServiceCode: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     QuotaArn: "STRING_VALUE",
 * //     QuotaCode: "STRING_VALUE",
 * //     QuotaName: "STRING_VALUE",
 * //     Value: Number("double"),
 * //     Unit: "STRING_VALUE",
 * //     Adjustable: true || false,
 * //     GlobalQuota: true || false,
 * //     UsageMetric: { // MetricInfo
 * //       MetricNamespace: "STRING_VALUE",
 * //       MetricName: "STRING_VALUE",
 * //       MetricDimensions: { // MetricDimensionsMapDefinition
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MetricStatisticRecommendation: "STRING_VALUE",
 * //     },
 * //     Period: { // QuotaPeriod
 * //       PeriodValue: Number("int"),
 * //       PeriodUnit: "MICROSECOND" || "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK",
 * //     },
 * //     ErrorReason: { // ErrorReason
 * //       ErrorCode: "DEPENDENCY_ACCESS_DENIED_ERROR" || "DEPENDENCY_THROTTLING_ERROR" || "DEPENDENCY_SERVICE_ERROR" || "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //     QuotaContext: { // QuotaContextInfo
 * //       ContextScope: "RESOURCE" || "ACCOUNT",
 * //       ContextScopeType: "STRING_VALUE",
 * //       ContextId: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceQuotaCommandInput - {@link GetServiceQuotaCommandInput}
 * @returns {@link GetServiceQuotaCommandOutput}
 * @see {@link GetServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 *
 * @public
 */
export class GetServiceQuotaCommand extends $Command
  .classBuilder<
    GetServiceQuotaCommandInput,
    GetServiceQuotaCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "GetServiceQuota", {})
  .n("ServiceQuotasClient", "GetServiceQuotaCommand")
  .sc(GetServiceQuota)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceQuotaRequest;
      output: GetServiceQuotaResponse;
    };
    sdk: {
      input: GetServiceQuotaCommandInput;
      output: GetServiceQuotaCommandOutput;
    };
  };
}
