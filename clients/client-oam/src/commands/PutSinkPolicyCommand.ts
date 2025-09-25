// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutSinkPolicyInput, PutSinkPolicyOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { PutSinkPolicy } from "../schemas/schemas_1_Sink";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSinkPolicyCommand}.
 */
export interface PutSinkPolicyCommandInput extends PutSinkPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutSinkPolicyCommand}.
 */
export interface PutSinkPolicyCommandOutput extends PutSinkPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> <li> <p> <b>Application Insights - Applications</b> - Specify with <code>AWS::ApplicationInsights::Application</code> </p> </li> <li> <p> <b>Internet Monitor</b> - Specify with <code>AWS::InternetMonitor::Monitor</code> </p> </li> <li> <p> <b>Application Signals</b> - Specify with <code>AWS::ApplicationSignals::Service</code> and <code>AWS::ApplicationSignals::ServiceLevelObjective</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, PutSinkPolicyCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, PutSinkPolicyCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // PutSinkPolicyInput
 *   SinkIdentifier: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutSinkPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutSinkPolicyOutput
 * //   SinkArn: "STRING_VALUE",
 * //   SinkId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSinkPolicyCommandInput - {@link PutSinkPolicyCommandInput}
 * @returns {@link PutSinkPolicyCommandOutput}
 * @see {@link PutSinkPolicyCommandInput} for command's `input` shape.
 * @see {@link PutSinkPolicyCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class PutSinkPolicyCommand extends $Command
  .classBuilder<
    PutSinkPolicyCommandInput,
    PutSinkPolicyCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "PutSinkPolicy", {})
  .n("OAMClient", "PutSinkPolicyCommand")
  .sc(PutSinkPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSinkPolicyInput;
      output: PutSinkPolicyOutput;
    };
    sdk: {
      input: PutSinkPolicyCommandInput;
      output: PutSinkPolicyCommandOutput;
    };
  };
}
