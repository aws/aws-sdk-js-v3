// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveTagsFromOnPremisesInstancesInput } from "../models/models_0";
import { RemoveTagsFromOnPremisesInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes one or more tags from one or more on-premises instances.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
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
export class RemoveTagsFromOnPremisesInstancesCommand extends command<RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput>(
  _ep0,
  _mw0,
  "RemoveTagsFromOnPremisesInstances",
  RemoveTagsFromOnPremisesInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromOnPremisesInstancesInput;
      output: {};
    };
    sdk: {
      input: RemoveTagsFromOnPremisesInstancesCommandInput;
      output: RemoveTagsFromOnPremisesInstancesCommandOutput;
    };
  };
}
