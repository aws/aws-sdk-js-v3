// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetTypeDefaultVersionInput, SetTypeDefaultVersionOutput } from "../models/models_0";
import { SetTypeDefaultVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetTypeDefaultVersionCommand}.
 */
export interface SetTypeDefaultVersionCommandInput extends SetTypeDefaultVersionInput {}
/**
 * @public
 *
 * The output of {@link SetTypeDefaultVersionCommand}.
 */
export interface SetTypeDefaultVersionCommandOutput extends SetTypeDefaultVersionOutput, __MetadataBearer {}

/**
 * Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SetTypeDefaultVersionCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SetTypeDefaultVersionCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // SetTypeDefaultVersionInput
 *   Arn: "STRING_VALUE",
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 * };
 * const command = new SetTypeDefaultVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetTypeDefaultVersionCommandInput - {@link SetTypeDefaultVersionCommandInput}
 * @returns {@link SetTypeDefaultVersionCommandOutput}
 * @see {@link SetTypeDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link SetTypeDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *
 * An error occurred during a CloudFormation registry operation.
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *
 * The specified extension doesn't exist in the CloudFormation registry.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class SetTypeDefaultVersionCommand extends command<SetTypeDefaultVersionCommandInput, SetTypeDefaultVersionCommandOutput>(
  _ep0,
  _mw0,
  "SetTypeDefaultVersion",
  SetTypeDefaultVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTypeDefaultVersionInput;
      output: {};
    };
    sdk: {
      input: SetTypeDefaultVersionCommandInput;
      output: SetTypeDefaultVersionCommandOutput;
    };
  };
}
