// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetEnabledBaselineInput, ResetEnabledBaselineOutput } from "../models/models_0";
import { de_ResetEnabledBaselineCommand, se_ResetEnabledBaselineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetEnabledBaselineCommand}.
 */
export interface ResetEnabledBaselineCommandInput extends ResetEnabledBaselineInput {}
/**
 * @public
 *
 * The output of {@link ResetEnabledBaselineCommand}.
 */
export interface ResetEnabledBaselineCommandOutput extends ResetEnabledBaselineOutput, __MetadataBearer {}

/**
 * <p>Re-enables an <code>EnabledBaseline</code> resource. For example, this API can re-apply the existing <code>Baseline</code> after a new member account is moved to the target OU. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ResetEnabledBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ResetEnabledBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ControlTowerClient(config);
 * const input = { // ResetEnabledBaselineInput
 *   enabledBaselineIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResetEnabledBaselineCommand(input);
 * const response = await client.send(command);
 * // { // ResetEnabledBaselineOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResetEnabledBaselineCommandInput - {@link ResetEnabledBaselineCommandInput}
 * @returns {@link ResetEnabledBaselineCommandOutput}
 * @see {@link ResetEnabledBaselineCommandInput} for command's `input` shape.
 * @see {@link ResetEnabledBaselineCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. The limit is 10 concurrent operations.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 * @public
 */
export class ResetEnabledBaselineCommand extends $Command
  .classBuilder<
    ResetEnabledBaselineCommandInput,
    ResetEnabledBaselineCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "ResetEnabledBaseline", {})
  .n("ControlTowerClient", "ResetEnabledBaselineCommand")
  .f(void 0, void 0)
  .ser(se_ResetEnabledBaselineCommand)
  .de(de_ResetEnabledBaselineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetEnabledBaselineInput;
      output: ResetEnabledBaselineOutput;
    };
    sdk: {
      input: ResetEnabledBaselineCommandInput;
      output: ResetEnabledBaselineCommandOutput;
    };
  };
}
