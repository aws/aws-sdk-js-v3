// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/models_0";
import { ListOnPremisesInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOnPremisesInstancesCommand}.
 */
export interface ListOnPremisesInstancesCommandInput extends ListOnPremisesInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListOnPremisesInstancesCommand}.
 */
export interface ListOnPremisesInstancesCommandOutput extends ListOnPremisesInstancesOutput, __MetadataBearer {}

/**
 * Gets a list of names for one or more on-premises instances.
 *
 * Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListOnPremisesInstancesInput
 *   registrationStatus: "Registered" || "Deregistered",
 *   tagFilters: [ // TagFilterList
 *     { // TagFilter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       Type: "KEY_ONLY" || "VALUE_ONLY" || "KEY_AND_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListOnPremisesInstancesOutput
 * //   instanceNames: [ // InstanceNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOnPremisesInstancesCommandInput - {@link ListOnPremisesInstancesCommandInput}
 * @returns {@link ListOnPremisesInstancesCommandOutput}
 * @see {@link ListOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link ListOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The next token was specified in an invalid format.
 *
 * @throws {@link InvalidRegistrationStatusException} (client fault)
 *
 * The registration status was specified in an invalid format.
 *
 * @throws {@link InvalidTagFilterException} (client fault)
 *
 * The tag filter was specified in an invalid format.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class ListOnPremisesInstancesCommand extends command<ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput>(
  _ep0,
  _mw0,
  "ListOnPremisesInstances",
  ListOnPremisesInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOnPremisesInstancesInput;
      output: ListOnPremisesInstancesOutput;
    };
    sdk: {
      input: ListOnPremisesInstancesCommandInput;
      output: ListOnPremisesInstancesCommandOutput;
    };
  };
}
