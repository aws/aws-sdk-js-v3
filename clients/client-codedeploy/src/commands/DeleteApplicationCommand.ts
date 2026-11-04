// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationInput } from "../models/models_0";
import { DeleteApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandInput extends DeleteApplicationInput {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandOutput extends __MetadataBearer {}

/**
 * Deletes an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteApplicationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteApplicationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteApplicationInput
 *   applicationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCommandInput - {@link DeleteApplicationCommandInput}
 * @returns {@link DeleteApplicationCommandOutput}
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class DeleteApplicationCommand extends command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplication",
  DeleteApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationInput;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCommandInput;
      output: DeleteApplicationCommandOutput;
    };
  };
}
