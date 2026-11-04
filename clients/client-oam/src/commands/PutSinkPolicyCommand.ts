// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSinkPolicyInput, PutSinkPolicyOutput } from "../models/models_0";
import { PutSinkPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.
 *
 * You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are:
 *
 * - **Metrics** - Specify with `AWS::CloudWatch::Metric`
 * - **Log groups** - Specify with `AWS::Logs::LogGroup`
 * - **Traces** - Specify with `AWS::XRay::Trace`
 * - **Application Insights - Applications** - Specify with `AWS::ApplicationInsights::Application`
 * - **Internet Monitor** - Specify with `AWS::InternetMonitor::Monitor`
 * - **Application Signals** - Specify with `AWS::ApplicationSignals::Service` and `AWS::ApplicationSignals::ServiceLevelObjective`
 *
 * See the examples in this section to see how to specify permitted source accounts and data types.
 *
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
 *
 * Unexpected error while processing the request. Retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * A required parameter is missing from the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link OAMServiceException}
 *
 * Base exception class for all service exceptions from OAM service.
 *
 * @public
 */
export class PutSinkPolicyCommand extends command<PutSinkPolicyCommandInput, PutSinkPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutSinkPolicy",
  PutSinkPolicy$
) {
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
