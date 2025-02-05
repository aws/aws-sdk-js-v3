// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMetricsExportRequest, DescribeMetricsExportResponse } from "../models/models_0";
import { de_DescribeMetricsExportCommand, se_DescribeMetricsExportCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricsExportCommand}.
 */
export interface DescribeMetricsExportCommandInput extends DescribeMetricsExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricsExportCommand}.
 */
export interface DescribeMetricsExportCommandOutput extends DescribeMetricsExportResponse, __MetadataBearer {}

/**
 * <p>Describes the metrics of the application configuration being exported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeMetricsExportCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeMetricsExportCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeMetricsExportRequest
 *   metricsExportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeMetricsExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricsExportResponse
 * //   metricsExportId: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //   exportLocation: { // S3Location
 * //     bucket: "STRING_VALUE",
 * //     prefix: "STRING_VALUE",
 * //   },
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetricsExportCommandInput - {@link DescribeMetricsExportCommandInput}
 * @returns {@link DescribeMetricsExportCommandOutput}
 * @see {@link DescribeMetricsExportCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricsExportCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
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
 * @public
 */
export class DescribeMetricsExportCommand extends $Command
  .classBuilder<
    DescribeMetricsExportCommandInput,
    DescribeMetricsExportCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DescribeMetricsExport", {})
  .n("ResiliencehubClient", "DescribeMetricsExportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMetricsExportCommand)
  .de(de_DescribeMetricsExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetricsExportRequest;
      output: DescribeMetricsExportResponse;
    };
    sdk: {
      input: DescribeMetricsExportCommandInput;
      output: DescribeMetricsExportCommandOutput;
    };
  };
}
