// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/models_0";
import { ListServiceQuotas } from "../schemas/schemas_2_Service";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceQuotasCommand}.
 */
export interface ListServiceQuotasCommandInput extends ListServiceQuotasRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotasCommand}.
 */
export interface ListServiceQuotasCommandOutput extends ListServiceQuotasResponse, __MetadataBearer {}

/**
 * <p>Lists the applied quota values for the specified Amazon Web Services service. For some quotas, only
 *             the default values are available. If the applied quota value is not available for a
 *             quota, the quota is not retrieved. Filter responses to return applied quota values at either the account level,
 *             resource level, or all levels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListServiceQuotasRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuotaCode: "STRING_VALUE",
 *   QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * };
 * const command = new ListServiceQuotasCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceQuotasResponse
 * //   NextToken: "STRING_VALUE",
 * //   Quotas: [ // ServiceQuotaListDefinition
 * //     { // ServiceQuota
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       QuotaArn: "STRING_VALUE",
 * //       QuotaCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       Value: Number("double"),
 * //       Unit: "STRING_VALUE",
 * //       Adjustable: true || false,
 * //       GlobalQuota: true || false,
 * //       UsageMetric: { // MetricInfo
 * //         MetricNamespace: "STRING_VALUE",
 * //         MetricName: "STRING_VALUE",
 * //         MetricDimensions: { // MetricDimensionsMapDefinition
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         MetricStatisticRecommendation: "STRING_VALUE",
 * //       },
 * //       Period: { // QuotaPeriod
 * //         PeriodValue: Number("int"),
 * //         PeriodUnit: "MICROSECOND" || "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK",
 * //       },
 * //       ErrorReason: { // ErrorReason
 * //         ErrorCode: "DEPENDENCY_ACCESS_DENIED_ERROR" || "DEPENDENCY_THROTTLING_ERROR" || "DEPENDENCY_SERVICE_ERROR" || "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //       QuotaContext: { // QuotaContextInfo
 * //         ContextScope: "RESOURCE" || "ACCOUNT",
 * //         ContextScopeType: "STRING_VALUE",
 * //         ContextId: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceQuotasCommandInput - {@link ListServiceQuotasCommandInput}
 * @returns {@link ListServiceQuotasCommandOutput}
 * @see {@link ListServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
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
export class ListServiceQuotasCommand extends $Command
  .classBuilder<
    ListServiceQuotasCommandInput,
    ListServiceQuotasCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "ListServiceQuotas", {})
  .n("ServiceQuotasClient", "ListServiceQuotasCommand")
  .sc(ListServiceQuotas)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceQuotasRequest;
      output: ListServiceQuotasResponse;
    };
    sdk: {
      input: ListServiceQuotasCommandInput;
      output: ListServiceQuotasCommandOutput;
    };
  };
}
