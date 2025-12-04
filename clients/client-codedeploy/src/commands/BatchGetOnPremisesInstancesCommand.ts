// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetOnPremisesInstancesInput, BatchGetOnPremisesInstancesOutput } from "../models/models_0";
import { BatchGetOnPremisesInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetOnPremisesInstancesCommand}.
 */
export interface BatchGetOnPremisesInstancesCommandInput extends BatchGetOnPremisesInstancesInput {}
/**
 * @public
 *
 * The output of {@link BatchGetOnPremisesInstancesCommand}.
 */
export interface BatchGetOnPremisesInstancesCommandOutput extends BatchGetOnPremisesInstancesOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more on-premises instances. The maximum number of
 *             on-premises instances that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetOnPremisesInstancesInput
 *   instanceNames: [ // InstanceNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetOnPremisesInstancesOutput
 * //   instanceInfos: [ // InstanceInfoList
 * //     { // InstanceInfo
 * //       instanceName: "STRING_VALUE",
 * //       iamSessionArn: "STRING_VALUE",
 * //       iamUserArn: "STRING_VALUE",
 * //       instanceArn: "STRING_VALUE",
 * //       registerTime: new Date("TIMESTAMP"),
 * //       deregisterTime: new Date("TIMESTAMP"),
 * //       tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetOnPremisesInstancesCommandInput - {@link BatchGetOnPremisesInstancesCommandInput}
 * @returns {@link BatchGetOnPremisesInstancesCommandOutput}
 * @see {@link BatchGetOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link BatchGetOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class BatchGetOnPremisesInstancesCommand extends $Command
  .classBuilder<
    BatchGetOnPremisesInstancesCommandInput,
    BatchGetOnPremisesInstancesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "BatchGetOnPremisesInstances", {})
  .n("CodeDeployClient", "BatchGetOnPremisesInstancesCommand")
  .sc(BatchGetOnPremisesInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetOnPremisesInstancesInput;
      output: BatchGetOnPremisesInstancesOutput;
    };
    sdk: {
      input: BatchGetOnPremisesInstancesCommandInput;
      output: BatchGetOnPremisesInstancesCommandOutput;
    };
  };
}
