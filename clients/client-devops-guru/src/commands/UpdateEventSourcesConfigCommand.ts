// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateEventSourcesConfigRequest, UpdateEventSourcesConfigResponse } from "../models/models_0";
import { UpdateEventSourcesConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandInput extends UpdateEventSourcesConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandOutput extends UpdateEventSourcesConfigResponse, __MetadataBearer {}

/**
 * <p>Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * 			one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which
 * 			can produce proactive recommendations which can be stored and viewed in DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // UpdateEventSourcesConfigRequest
 *   EventSources: { // EventSourcesConfig
 *     AmazonCodeGuruProfiler: { // AmazonCodeGuruProfilerIntegration
 *       Status: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new UpdateEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventSourcesConfigCommandInput - {@link UpdateEventSourcesConfigCommandInput}
 * @returns {@link UpdateEventSourcesConfigCommandOutput}
 * @see {@link UpdateEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourcesConfigCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateEventSourcesConfigCommand extends $Command
  .classBuilder<
    UpdateEventSourcesConfigCommandInput,
    UpdateEventSourcesConfigCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "UpdateEventSourcesConfig", {})
  .n("DevOpsGuruClient", "UpdateEventSourcesConfigCommand")
  .sc(UpdateEventSourcesConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventSourcesConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventSourcesConfigCommandInput;
      output: UpdateEventSourcesConfigCommandOutput;
    };
  };
}
