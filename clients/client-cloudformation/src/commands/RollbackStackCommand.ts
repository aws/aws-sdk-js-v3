// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RollbackStackInput, RollbackStackOutput } from "../models/models_1";
import { de_RollbackStackCommand, se_RollbackStackCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RollbackStackCommand}.
 */
export interface RollbackStackCommandInput extends RollbackStackInput {}
/**
 * @public
 *
 * The output of {@link RollbackStackCommand}.
 */
export interface RollbackStackCommandOutput extends RollbackStackOutput, __MetadataBearer {}

/**
 * <p>When specifying <code>RollbackStack</code>, you preserve the state of previously
 *       provisioned resources when an operation fails. You can check the status of the stack through
 *       the <a>DescribeStacks</a> operation.</p>
 *          <p>Rolls back the specified stack to the last known stable state from
 *         <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p>
 *          <p>This operation will delete a stack if it doesn't contain a last known stable state. A last
 *       known stable state includes any status in a <code>*_COMPLETE</code>. This includes the
 *       following stack statuses.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RollbackStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RollbackStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // RollbackStackInput
 *   StackName: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   RetainExceptOnCreate: true || false,
 * };
 * const command = new RollbackStackCommand(input);
 * const response = await client.send(command);
 * // { // RollbackStackOutput
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RollbackStackCommandInput - {@link RollbackStackCommandInput}
 * @returns {@link RollbackStackCommandOutput}
 * @see {@link RollbackStackCommandInput} for command's `input` shape.
 * @see {@link RollbackStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class RollbackStackCommand extends $Command
  .classBuilder<
    RollbackStackCommandInput,
    RollbackStackCommandOutput,
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
  .s("CloudFormation", "RollbackStack", {})
  .n("CloudFormationClient", "RollbackStackCommand")
  .f(void 0, void 0)
  .ser(se_RollbackStackCommand)
  .de(de_RollbackStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackStackInput;
      output: RollbackStackOutput;
    };
    sdk: {
      input: RollbackStackCommandInput;
      output: RollbackStackCommandOutput;
    };
  };
}
