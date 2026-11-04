// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsToOnPremisesInstancesInput } from "../models/models_0";
import { AddTagsToOnPremisesInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds tags to on-premises instances.
 *
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
 *
 * The maximum number of allowed on-premises instances in a single call was exceeded.
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *
 * An on-premises instance name was not specified.
 *
 * @throws {@link InstanceNotRegisteredException} (client fault)
 *
 * The specified on-premises instance is not registered.
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *
 * The on-premises instance name was specified in an invalid format.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * The tag was specified in an invalid format.
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *
 * The maximum allowed number of tags was exceeded.
 *
 * @throws {@link TagRequiredException} (client fault)
 *
 * A tag was not specified.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class AddTagsToOnPremisesInstancesCommand extends command<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput>(
  _ep0,
  _mw0,
  "AddTagsToOnPremisesInstances",
  AddTagsToOnPremisesInstances$
) {
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
