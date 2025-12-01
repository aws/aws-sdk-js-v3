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
import type { ExecuteStackRefactorInput } from "../models/models_0";
import { ExecuteStackRefactor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteStackRefactorCommand}.
 */
export interface ExecuteStackRefactorCommandInput extends ExecuteStackRefactorInput {}
/**
 * @public
 *
 * The output of {@link ExecuteStackRefactorCommand}.
 */
export interface ExecuteStackRefactorCommandOutput extends __MetadataBearer {}

/**
 * <p>Executes the stack refactor operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ExecuteStackRefactorCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ExecuteStackRefactorCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ExecuteStackRefactorInput
 *   StackRefactorId: "STRING_VALUE", // required
 * };
 * const command = new ExecuteStackRefactorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteStackRefactorCommandInput - {@link ExecuteStackRefactorCommandInput}
 * @returns {@link ExecuteStackRefactorCommandOutput}
 * @see {@link ExecuteStackRefactorCommandInput} for command's `input` shape.
 * @see {@link ExecuteStackRefactorCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ExecuteStackRefactorCommand extends $Command
  .classBuilder<
    ExecuteStackRefactorCommandInput,
    ExecuteStackRefactorCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ExecuteStackRefactor", {})
  .n("CloudFormationClient", "ExecuteStackRefactorCommand")
  .sc(ExecuteStackRefactor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteStackRefactorInput;
      output: {};
    };
    sdk: {
      input: ExecuteStackRefactorCommandInput;
      output: ExecuteStackRefactorCommandOutput;
    };
  };
}
