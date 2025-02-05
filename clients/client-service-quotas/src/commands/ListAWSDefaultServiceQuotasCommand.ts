// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/models_0";
import { de_ListAWSDefaultServiceQuotasCommand, se_ListAWSDefaultServiceQuotasCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAWSDefaultServiceQuotasCommand}.
 */
export interface ListAWSDefaultServiceQuotasCommandInput extends ListAWSDefaultServiceQuotasRequest {}
/**
 * @public
 *
 * The output of {@link ListAWSDefaultServiceQuotasCommand}.
 */
export interface ListAWSDefaultServiceQuotasCommandOutput
  extends ListAWSDefaultServiceQuotasResponse,
    __MetadataBearer {}

/**
 * <p>Lists the default values for the quotas for the specified Amazon Web Service. A default
 *             value does not reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListAWSDefaultServiceQuotasRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAWSDefaultServiceQuotasCommand(input);
 * const response = await client.send(command);
 * // { // ListAWSDefaultServiceQuotasResponse
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
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAWSDefaultServiceQuotasCommandInput - {@link ListAWSDefaultServiceQuotasCommandInput}
 * @returns {@link ListAWSDefaultServiceQuotasCommandOutput}
 * @see {@link ListAWSDefaultServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListAWSDefaultServiceQuotasCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAWSDefaultServiceQuotasCommand extends $Command
  .classBuilder<
    ListAWSDefaultServiceQuotasCommandInput,
    ListAWSDefaultServiceQuotasCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServiceQuotasV20190624", "ListAWSDefaultServiceQuotas", {})
  .n("ServiceQuotasClient", "ListAWSDefaultServiceQuotasCommand")
  .f(void 0, void 0)
  .ser(se_ListAWSDefaultServiceQuotasCommand)
  .de(de_ListAWSDefaultServiceQuotasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAWSDefaultServiceQuotasRequest;
      output: ListAWSDefaultServiceQuotasResponse;
    };
    sdk: {
      input: ListAWSDefaultServiceQuotasCommandInput;
      output: ListAWSDefaultServiceQuotasCommandOutput;
    };
  };
}
