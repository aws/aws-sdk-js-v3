// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAWSDefaultServiceQuotaRequest, GetAWSDefaultServiceQuotaResponse } from "../models/models_0";
import { GetAWSDefaultServiceQuota$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAWSDefaultServiceQuotaCommand}.
 */
export interface GetAWSDefaultServiceQuotaCommandInput extends GetAWSDefaultServiceQuotaRequest {}
/**
 * @public
 *
 * The output of {@link GetAWSDefaultServiceQuotaCommand}.
 */
export interface GetAWSDefaultServiceQuotaCommandOutput extends GetAWSDefaultServiceQuotaResponse, __MetadataBearer {}

/**
 * <p>Retrieves the default value for the specified quota. The default value does not
 *             reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetAWSDefaultServiceQuotaRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 * };
 * const command = new GetAWSDefaultServiceQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetAWSDefaultServiceQuotaResponse
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
 * @param GetAWSDefaultServiceQuotaCommandInput - {@link GetAWSDefaultServiceQuotaCommandInput}
 * @returns {@link GetAWSDefaultServiceQuotaCommandOutput}
 * @see {@link GetAWSDefaultServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetAWSDefaultServiceQuotaCommandOutput} for command's `response` shape.
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
export class GetAWSDefaultServiceQuotaCommand extends command<GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput>(
  _ep0,
  _mw0,
  "GetAWSDefaultServiceQuota",
  GetAWSDefaultServiceQuota$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAWSDefaultServiceQuotaRequest;
      output: GetAWSDefaultServiceQuotaResponse;
    };
    sdk: {
      input: GetAWSDefaultServiceQuotaCommandInput;
      output: GetAWSDefaultServiceQuotaCommandOutput;
    };
  };
}
