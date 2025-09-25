// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApplicationInput } from "../models/models_0";
import { UpdateApplication } from "../schemas/schemas_17_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationInput {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the name of an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, UpdateApplicationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, UpdateApplicationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // UpdateApplicationInput
 *   applicationName: "STRING_VALUE",
 *   newApplicationName: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationAlreadyExistsException} (client fault)
 *  <p>An application with the specified name with the user or Amazon Web Services account
 *             already exists.</p>
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "UpdateApplication", {})
  .n("CodeDeployClient", "UpdateApplicationCommand")
  .sc(UpdateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationInput;
      output: {};
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
