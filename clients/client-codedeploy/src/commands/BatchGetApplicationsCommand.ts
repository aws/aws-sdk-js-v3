// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetApplicationsInput, BatchGetApplicationsOutput } from "../models/models_0";
import { BatchGetApplications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetApplicationsCommand}.
 */
export interface BatchGetApplicationsCommandInput extends BatchGetApplicationsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetApplicationsCommand}.
 */
export interface BatchGetApplicationsCommandOutput extends BatchGetApplicationsOutput, __MetadataBearer {}

/**
 * <p>Gets information about one or more applications. The maximum number of applications
 *             that can be returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetApplicationsInput
 *   applicationNames: [ // ApplicationsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetApplicationsOutput
 * //   applicationsInfo: [ // ApplicationsInfoList
 * //     { // ApplicationInfo
 * //       applicationId: "STRING_VALUE",
 * //       applicationName: "STRING_VALUE",
 * //       createTime: new Date("TIMESTAMP"),
 * //       linkedToGitHub: true || false,
 * //       gitHubAccountName: "STRING_VALUE",
 * //       computePlatform: "Server" || "Lambda" || "ECS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetApplicationsCommandInput - {@link BatchGetApplicationsCommandInput}
 * @returns {@link BatchGetApplicationsCommandOutput}
 * @see {@link BatchGetApplicationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
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
export class BatchGetApplicationsCommand extends $Command
  .classBuilder<
    BatchGetApplicationsCommandInput,
    BatchGetApplicationsCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "BatchGetApplications", {})
  .n("CodeDeployClient", "BatchGetApplicationsCommand")
  .sc(BatchGetApplications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetApplicationsInput;
      output: BatchGetApplicationsOutput;
    };
    sdk: {
      input: BatchGetApplicationsCommandInput;
      output: BatchGetApplicationsCommandOutput;
    };
  };
}
