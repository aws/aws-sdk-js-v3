// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetQuotaUtilizationReportRequest, GetQuotaUtilizationReportResponse } from "../models/models_0";
import { GetQuotaUtilizationReport } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQuotaUtilizationReportCommand}.
 */
export interface GetQuotaUtilizationReportCommandInput extends GetQuotaUtilizationReportRequest {}
/**
 * @public
 *
 * The output of {@link GetQuotaUtilizationReportCommand}.
 */
export interface GetQuotaUtilizationReportCommandOutput extends GetQuotaUtilizationReportResponse, __MetadataBearer {}

/**
 * <p>Retrieves the quota utilization report for your Amazon Web Services account. This operation returns
 *             paginated results showing your quota usage across all Amazon Web Services services, sorted by utilization
 *             percentage in descending order (highest utilization first).</p>
 *          <p>You must first initiate a report using the <code>StartQuotaUtilizationReport</code>
 *             operation. The report generation process is asynchronous and may take several seconds to
 *             complete. Poll this operation periodically to check the status and retrieve results when
 *             the report is ready.</p>
 *          <p>Each report contains up to 1,000 quota records per page. Use the <code>NextToken</code>
 *             parameter to retrieve additional pages of results. Reports are automatically deleted after
 *             15 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetQuotaUtilizationReportCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetQuotaUtilizationReportCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetQuotaUtilizationReportRequest
 *   ReportId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetQuotaUtilizationReportCommand(input);
 * const response = await client.send(command);
 * // { // GetQuotaUtilizationReportResponse
 * //   ReportId: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //   GeneratedAt: new Date("TIMESTAMP"),
 * //   TotalCount: Number("int"),
 * //   Quotas: [ // QuotaUtilizationInfoList
 * //     { // QuotaUtilizationInfo
 * //       QuotaCode: "STRING_VALUE",
 * //       ServiceCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //       Utilization: Number("double"),
 * //       DefaultValue: Number("double"),
 * //       AppliedValue: Number("double"),
 * //       ServiceName: "STRING_VALUE",
 * //       Adjustable: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ErrorCode: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQuotaUtilizationReportCommandInput - {@link GetQuotaUtilizationReportCommandInput}
 * @returns {@link GetQuotaUtilizationReportCommandOutput}
 * @see {@link GetQuotaUtilizationReportCommandInput} for command's `input` shape.
 * @see {@link GetQuotaUtilizationReportCommandOutput} for command's `response` shape.
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
export class GetQuotaUtilizationReportCommand extends $Command
  .classBuilder<
    GetQuotaUtilizationReportCommandInput,
    GetQuotaUtilizationReportCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "GetQuotaUtilizationReport", {})
  .n("ServiceQuotasClient", "GetQuotaUtilizationReportCommand")
  .sc(GetQuotaUtilizationReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQuotaUtilizationReportRequest;
      output: GetQuotaUtilizationReportResponse;
    };
    sdk: {
      input: GetQuotaUtilizationReportCommandInput;
      output: GetQuotaUtilizationReportCommandOutput;
    };
  };
}
