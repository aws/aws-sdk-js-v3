// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ValidateStateMachineDefinitionInput,
  ValidateStateMachineDefinitionInputFilterSensitiveLog,
  ValidateStateMachineDefinitionOutput,
} from "../models/models_0";
import {
  de_ValidateStateMachineDefinitionCommand,
  se_ValidateStateMachineDefinitionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateStateMachineDefinitionCommand}.
 */
export interface ValidateStateMachineDefinitionCommandInput extends ValidateStateMachineDefinitionInput {}
/**
 * @public
 *
 * The output of {@link ValidateStateMachineDefinitionCommand}.
 */
export interface ValidateStateMachineDefinitionCommandOutput
  extends ValidateStateMachineDefinitionOutput,
    __MetadataBearer {}

/**
 * <p>Validates the syntax of a state machine definition.</p>
 *          <p>You can validate that a state machine definition is correct without
 *             creating a state machine resource. Step Functions will implicitly perform the same
 *             syntax check when you invoke <code>CreateStateMachine</code> and
 *                 <code>UpdateStateMachine</code>. State machine definitions are specified using a
 *             JSON-based, structured language. For more information on Amazon States Language see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> (ASL). </p>
 *          <p>Suggested uses for <code>ValidateStateMachineDefinition</code>:</p>
 *          <ul>
 *             <li>
 *                <p>Integrate automated checks into your code review or Continuous Integration
 *                     (CI) process to validate state machine definitions before starting
 *                     deployments.</p>
 *             </li>
 *             <li>
 *                <p>Run the validation from a Git pre-commit hook to check your state machine
 *                     definitions before committing them to your source repository.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Errors found in the state machine definition will be returned in the response as a list of <b>diagnostic elements</b>, rather than raise an exception.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ValidateStateMachineDefinitionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ValidateStateMachineDefinitionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // ValidateStateMachineDefinitionInput
 *   definition: "STRING_VALUE", // required
 *   type: "STANDARD" || "EXPRESS",
 *   severity: "ERROR" || "WARNING",
 *   maxResults: Number("int"),
 * };
 * const command = new ValidateStateMachineDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // ValidateStateMachineDefinitionOutput
 * //   result: "OK" || "FAIL", // required
 * //   diagnostics: [ // ValidateStateMachineDefinitionDiagnosticList // required
 * //     { // ValidateStateMachineDefinitionDiagnostic
 * //       severity: "ERROR" || "WARNING", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   truncated: true || false,
 * // };
 *
 * ```
 *
 * @param ValidateStateMachineDefinitionCommandInput - {@link ValidateStateMachineDefinitionCommandInput}
 * @returns {@link ValidateStateMachineDefinitionCommandOutput}
 * @see {@link ValidateStateMachineDefinitionCommandInput} for command's `input` shape.
 * @see {@link ValidateStateMachineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class ValidateStateMachineDefinitionCommand extends $Command
  .classBuilder<
    ValidateStateMachineDefinitionCommandInput,
    ValidateStateMachineDefinitionCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "ValidateStateMachineDefinition", {})
  .n("SFNClient", "ValidateStateMachineDefinitionCommand")
  .f(ValidateStateMachineDefinitionInputFilterSensitiveLog, void 0)
  .ser(se_ValidateStateMachineDefinitionCommand)
  .de(de_ValidateStateMachineDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateStateMachineDefinitionInput;
      output: ValidateStateMachineDefinitionOutput;
    };
    sdk: {
      input: ValidateStateMachineDefinitionCommandInput;
      output: ValidateStateMachineDefinitionCommandOutput;
    };
  };
}
