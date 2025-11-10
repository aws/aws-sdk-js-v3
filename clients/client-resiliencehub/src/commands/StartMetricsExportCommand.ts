// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMetricsExportRequest, StartMetricsExportResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { StartMetricsExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMetricsExportCommand}.
 */
export interface StartMetricsExportCommandInput extends StartMetricsExportRequest {}
/**
 * @public
 *
 * The output of {@link StartMetricsExportCommand}.
 */
export interface StartMetricsExportCommandOutput extends StartMetricsExportResponse, __MetadataBearer {}

/**
 * <p>Initiates the export task of metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, StartMetricsExportCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, StartMetricsExportCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // StartMetricsExportRequest
 *   bucketName: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartMetricsExportCommand(input);
 * const response = await client.send(command);
 * // { // StartMetricsExportResponse
 * //   metricsExportId: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * // };
 *
 * ```
 *
 * @param StartMetricsExportCommandInput - {@link StartMetricsExportCommandInput}
 * @returns {@link StartMetricsExportCommandOutput}
 * @see {@link StartMetricsExportCommandInput} for command's `input` shape.
 * @see {@link StartMetricsExportCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class StartMetricsExportCommand extends $Command
  .classBuilder<
    StartMetricsExportCommandInput,
    StartMetricsExportCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "StartMetricsExport", {})
  .n("ResiliencehubClient", "StartMetricsExportCommand")
  .sc(StartMetricsExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetricsExportRequest;
      output: StartMetricsExportResponse;
    };
    sdk: {
      input: StartMetricsExportCommandInput;
      output: StartMetricsExportCommandOutput;
    };
  };
}
