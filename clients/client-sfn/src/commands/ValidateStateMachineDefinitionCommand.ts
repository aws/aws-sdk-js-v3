// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ValidateStateMachineDefinitionInput, ValidateStateMachineDefinitionOutput } from "../models/models_0";
import { ValidateStateMachineDefinition } from "../schemas/schemas_0";
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
 * <p>Validates the syntax of a state machine definition specified in <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> (ASL), a
 *             JSON-based, structured language.</p>
 *          <p>You can validate that a state machine definition is correct without creating a state
 *             machine resource.</p>
 *          <p>Suggested uses for <code>ValidateStateMachineDefinition</code>:</p>
 *          <ul>
 *             <li>
 *                <p>Integrate automated checks into your code review or Continuous Integration
 *                     (CI) process to check state machine definitions before starting
 *                     deployments.</p>
 *             </li>
 *             <li>
 *                <p>Run validation from a Git pre-commit hook to verify the definition before
 *                     committing to your source repository.</p>
 *             </li>
 *          </ul>
 *          <p>Validation will look for problems in your state machine definition and return a
 *             <b>result</b> and a list of <b>diagnostic
 *             elements</b>.</p>
 *          <p>The <b>result</b>  value will be <code>OK</code> when your
 *             workflow definition can be successfully created or updated. Note the result can be
 *             <code>OK</code> even when diagnostic warnings are present in the response. The
 *             <b>result</b> value will be <code>FAIL</code> when the
 *             workflow definition contains errors that would prevent you from creating or updating
 *             your state machine. </p>
 *          <p>The list of <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_ValidateStateMachineDefinitionDiagnostic.html">ValidateStateMachineDefinitionDiagnostic</a> data elements can contain zero or more <b>WARNING</b> and/or <b>ERROR</b> elements.</p>
 *          <note>
 *             <p>The <b>ValidateStateMachineDefinition API</b> might add
 *                 new diagnostics in the future, adjust diagnostic codes, or change the message
 *                 wording. Your automated processes should only rely on the value of the <b>result</b> field value (OK, FAIL). Do <b>not</b> rely on the exact order, count, or
 *                 wording of diagnostic messages.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ValidateStateMachineDefinitionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ValidateStateMachineDefinitionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "ValidateStateMachineDefinition", {})
  .n("SFNClient", "ValidateStateMachineDefinitionCommand")
  .sc(ValidateStateMachineDefinition)
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
