// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveTagsFromOnPremisesInstancesInput } from "../models/models_0";
import {
  de_RemoveTagsFromOnPremisesInstancesCommand,
  se_RemoveTagsFromOnPremisesInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromOnPremisesInstancesCommand}.
 */
export interface RemoveTagsFromOnPremisesInstancesCommandInput extends RemoveTagsFromOnPremisesInstancesInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromOnPremisesInstancesCommand}.
 */
export interface RemoveTagsFromOnPremisesInstancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes one or more tags from one or more on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // RemoveTagsFromOnPremisesInstancesInput
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
 * const command = new RemoveTagsFromOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromOnPremisesInstancesCommandInput - {@link RemoveTagsFromOnPremisesInstancesCommandInput}
 * @returns {@link RemoveTagsFromOnPremisesInstancesCommandOutput}
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RemoveTagsFromOnPremisesInstancesCommand extends $Command
  .classBuilder<
    RemoveTagsFromOnPremisesInstancesCommandInput,
    RemoveTagsFromOnPremisesInstancesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "RemoveTagsFromOnPremisesInstances", {})
  .n("CodeDeployClient", "RemoveTagsFromOnPremisesInstancesCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTagsFromOnPremisesInstancesCommand)
  .de(de_RemoveTagsFromOnPremisesInstancesCommand)
  .build() {}
