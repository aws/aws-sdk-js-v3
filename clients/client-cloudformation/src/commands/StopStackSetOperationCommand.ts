// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopStackSetOperationInput, StopStackSetOperationOutput } from "../models/models_0";
import { StopStackSetOperation$ } from "../schemas/schemas_0";

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
 * <p>Stops an in-progress operation on a StackSet and its associated stack instances. StackSets
 *    will cancel all the unstarted stack instance deployments and wait for those are in-progress to
 *    complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StopStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StopStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
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
 *  <p>The specified StackSet doesn't exist.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "StopStackSetOperation", {})
  .n("CloudFormationClient", "StopStackSetOperationCommand")
  .sc(StopStackSetOperation$)
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
