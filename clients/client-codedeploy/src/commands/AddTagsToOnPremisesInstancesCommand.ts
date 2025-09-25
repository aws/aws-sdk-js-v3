// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddTagsToOnPremisesInstancesInput } from "../models/models_0";
import { AddTagsToOnPremisesInstances } from "../schemas/schemas_9_OnPremises";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToOnPremisesInstancesCommand}.
 */
export interface AddTagsToOnPremisesInstancesCommandInput extends AddTagsToOnPremisesInstancesInput {}
/**
 * @public
 *
 * The output of {@link AddTagsToOnPremisesInstancesCommand}.
 */
export interface AddTagsToOnPremisesInstancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds tags to on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // AddTagsToOnPremisesInstancesInput
 *   tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   instanceNames: [ // InstanceNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddTagsToOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToOnPremisesInstancesCommandInput - {@link AddTagsToOnPremisesInstancesCommandInput}
 * @returns {@link AddTagsToOnPremisesInstancesCommandOutput}
 * @see {@link AddTagsToOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link AddTagsToOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InstanceLimitExceededException} (client fault)
 *  <p>The maximum number of allowed on-premises instances in a single call was
 *             exceeded.</p>
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InstanceNotRegisteredException} (client fault)
 *  <p>The specified on-premises instance is not registered.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *  <p>The maximum allowed number of tags was exceeded.</p>
 *
 * @throws {@link TagRequiredException} (client fault)
 *  <p>A tag was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class AddTagsToOnPremisesInstancesCommand extends $Command
  .classBuilder<
    AddTagsToOnPremisesInstancesCommandInput,
    AddTagsToOnPremisesInstancesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "AddTagsToOnPremisesInstances", {})
  .n("CodeDeployClient", "AddTagsToOnPremisesInstancesCommand")
  .sc(AddTagsToOnPremisesInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToOnPremisesInstancesInput;
      output: {};
    };
    sdk: {
      input: AddTagsToOnPremisesInstancesCommandInput;
      output: AddTagsToOnPremisesInstancesCommandOutput;
    };
  };
}
