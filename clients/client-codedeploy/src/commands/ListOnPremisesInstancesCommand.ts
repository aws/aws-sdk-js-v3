// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/models_0";
import { ListOnPremisesInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a list of names for one or more on-premises instances.</p>
 *          <p>Unless otherwise specified, both registered and deregistered on-premises instance
 *             names are listed. To list only registered or deregistered on-premises instance names,
 *             use the registration status parameter.</p>
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
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRegistrationStatusException} (client fault)
 *  <p>The registration status was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTagFilterException} (client fault)
 *  <p>The tag filter was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ListOnPremisesInstancesCommand extends $Command
  .classBuilder<
    ListOnPremisesInstancesCommandInput,
    ListOnPremisesInstancesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "ListOnPremisesInstances", {})
  .n("CodeDeployClient", "ListOnPremisesInstancesCommand")
  .sc(ListOnPremisesInstances$)
  .build() {
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
