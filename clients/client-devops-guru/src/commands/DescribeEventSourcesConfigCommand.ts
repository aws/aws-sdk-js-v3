// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventSourcesConfigRequest, DescribeEventSourcesConfigResponse } from "../models/models_0";
import { de_DescribeEventSourcesConfigCommand, se_DescribeEventSourcesConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventSourcesConfigCommand}.
 */
export interface DescribeEventSourcesConfigCommandInput extends DescribeEventSourcesConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventSourcesConfigCommand}.
 */
export interface DescribeEventSourcesConfigCommandOutput extends DescribeEventSourcesConfigResponse, __MetadataBearer {}

/**
 * <p>Returns the integration status of services that are integrated with DevOps Guru as Consumer
 * 			via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
 * 			Profiler, which can produce proactive recommendations which can be stored and viewed in
 * 			DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DevOpsGuruClient(config);
 * const input = {};
 * const command = new DescribeEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventSourcesConfigResponse
 * //   EventSources: { // EventSourcesConfig
 * //     AmazonCodeGuruProfiler: { // AmazonCodeGuruProfilerIntegration
 * //       Status: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEventSourcesConfigCommandInput - {@link DescribeEventSourcesConfigCommandInput}
 * @returns {@link DescribeEventSourcesConfigCommandOutput}
 * @see {@link DescribeEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourcesConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 * @public
 */
export class DescribeEventSourcesConfigCommand extends $Command
  .classBuilder<
    DescribeEventSourcesConfigCommandInput,
    DescribeEventSourcesConfigCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "DescribeEventSourcesConfig", {})
  .n("DevOpsGuruClient", "DescribeEventSourcesConfigCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventSourcesConfigCommand)
  .de(de_DescribeEventSourcesConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEventSourcesConfigResponse;
    };
    sdk: {
      input: DescribeEventSourcesConfigCommandInput;
      output: DescribeEventSourcesConfigCommandOutput;
    };
  };
}
