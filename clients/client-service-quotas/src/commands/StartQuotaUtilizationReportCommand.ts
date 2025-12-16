// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartQuotaUtilizationReportRequest, StartQuotaUtilizationReportResponse } from "../models/models_0";
import { StartQuotaUtilizationReport$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQuotaUtilizationReportCommand}.
 */
export interface StartQuotaUtilizationReportCommandInput extends StartQuotaUtilizationReportRequest {}
/**
 * @public
 *
 * The output of {@link StartQuotaUtilizationReportCommand}.
 */
export interface StartQuotaUtilizationReportCommandOutput
  extends StartQuotaUtilizationReportResponse,
    __MetadataBearer {}

/**
 * <p>Initiates the generation of a quota utilization report for your Amazon Web Services account. This
 *             asynchronous operation analyzes your quota usage across all Amazon Web Services services and returns
 *             a unique report identifier that you can use to retrieve the results.</p>
 *          <p>The report generation process may take several seconds to complete, depending on the
 *             number of quotas in your account. Use the <code>GetQuotaUtilizationReport</code> operation
 *             to check the status and retrieve the results when the report is ready.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, StartQuotaUtilizationReportCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, StartQuotaUtilizationReportCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new StartQuotaUtilizationReportCommand(input);
 * const response = await client.send(command);
 * // { // StartQuotaUtilizationReportResponse
 * //   ReportId: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartQuotaUtilizationReportCommandInput - {@link StartQuotaUtilizationReportCommandInput}
 * @returns {@link StartQuotaUtilizationReportCommandOutput}
 * @see {@link StartQuotaUtilizationReportCommandInput} for command's `input` shape.
 * @see {@link StartQuotaUtilizationReportCommandOutput} for command's `response` shape.
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
export class StartQuotaUtilizationReportCommand extends $Command
  .classBuilder<
    StartQuotaUtilizationReportCommandInput,
    StartQuotaUtilizationReportCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "StartQuotaUtilizationReport", {})
  .n("ServiceQuotasClient", "StartQuotaUtilizationReportCommand")
  .sc(StartQuotaUtilizationReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: StartQuotaUtilizationReportResponse;
    };
    sdk: {
      input: StartQuotaUtilizationReportCommandInput;
      output: StartQuotaUtilizationReportCommandOutput;
    };
  };
}
