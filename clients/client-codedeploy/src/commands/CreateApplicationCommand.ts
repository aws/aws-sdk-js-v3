// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApplicationInput, CreateApplicationOutput } from "../models/models_0";
import { CreateApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationInput {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationOutput, __MetadataBearer {}

/**
 * <p>Creates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateApplicationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateApplicationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // CreateApplicationInput
 *   applicationName: "STRING_VALUE", // required
 *   computePlatform: "Server" || "Lambda" || "ECS",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationOutput
 * //   applicationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationAlreadyExistsException} (client fault)
 *  <p>An application with the specified name with the user or Amazon Web Services account
 *             already exists.</p>
 *
 * @throws {@link ApplicationLimitExceededException} (client fault)
 *  <p>More applications were attempted to be created than are allowed.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidTagsToAddException} (client fault)
 *  <p> The specified tags are not valid. </p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "CreateApplication", {})
  .n("CodeDeployClient", "CreateApplicationCommand")
  .sc(CreateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationInput;
      output: CreateApplicationOutput;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
