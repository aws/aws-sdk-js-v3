// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopStackSetOperationInput, StopStackSetOperationOutput } from "../models/models_1";
import { de_StopStackSetOperationCommand, se_StopStackSetOperationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopStackSetOperationCommand}.
 */
export interface StopStackSetOperationCommandInput extends StopStackSetOperationInput {}
/**
 * @public
 *
 * The output of {@link StopStackSetOperationCommand}.
 */
export interface StopStackSetOperationCommandOutput extends StopStackSetOperationOutput, __MetadataBearer {}

/**
 * <p>Stops an in-progress operation on a stack set and its associated stack instances. StackSets
 *    will cancel all the unstarted stack instance deployments and wait for those are in-progress to
 *    complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StopStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StopStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // StopStackSetOperationInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new StopStackSetOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStackSetOperationCommandInput - {@link StopStackSetOperationCommandInput}
 * @returns {@link StopStackSetOperationCommandOutput}
 * @see {@link StopStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link StopStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class StopStackSetOperationCommand extends $Command
  .classBuilder<
    StopStackSetOperationCommandInput,
    StopStackSetOperationCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "StopStackSetOperation", {})
  .n("CloudFormationClient", "StopStackSetOperationCommand")
  .f(void 0, void 0)
  .ser(se_StopStackSetOperationCommand)
  .de(de_StopStackSetOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopStackSetOperationInput;
      output: {};
    };
    sdk: {
      input: StopStackSetOperationCommandInput;
      output: StopStackSetOperationCommandOutput;
    };
  };
}
