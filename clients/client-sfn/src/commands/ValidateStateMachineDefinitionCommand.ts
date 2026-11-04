// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidateStateMachineDefinitionInput, ValidateStateMachineDefinitionOutput } from "../models/models_0";
import { ValidateStateMachineDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ValidateStateMachineDefinitionCommandOutput extends ValidateStateMachineDefinitionOutput, __MetadataBearer {}

/**
 * Validates the syntax of a state machine definition specified in [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) (ASL), a JSON-based, structured language.
 *
 * You can validate that a state machine definition is correct without creating a state machine resource.
 *
 * Suggested uses for `ValidateStateMachineDefinition`:
 *
 * - Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments.
 * - Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.
 *
 * Validation will look for problems in your state machine definition and return a **result** and a list of **diagnostic elements**.
 *
 * The **result** value will be `OK` when your workflow definition can be successfully created or updated. Note the result can be `OK` even when diagnostic warnings are present in the response. The **result** value will be `FAIL` when the workflow definition contains errors that would prevent you from creating or updating your state machine.
 *
 * The list of [ValidateStateMachineDefinitionDiagnostic](https://docs.aws.amazon.com/step-functions/latest/apireference/API_ValidateStateMachineDefinitionDiagnostic.html) data elements can contain zero or more **WARNING** and/or **ERROR** elements.
 *
 * > **Note:** The **ValidateStateMachineDefinition API** might add new diagnostics in the future, adjust diagnostic codes, or change the message wording. Your automated processes should only rely on the value of the **result** field value (OK, FAIL). Do **not** rely on the exact order, count, or wording of diagnostic messages.
 *
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
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class ValidateStateMachineDefinitionCommand extends command<ValidateStateMachineDefinitionCommandInput, ValidateStateMachineDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "ValidateStateMachineDefinition",
  ValidateStateMachineDefinition$
) {
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
