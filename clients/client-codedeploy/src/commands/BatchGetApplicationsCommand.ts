// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetApplicationsInput, BatchGetApplicationsOutput } from "../models/models_0";
import { BatchGetApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about one or more applications. The maximum number of applications that can be returned is 100.
 *
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
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *
 * The maximum number of names or IDs allowed for this request (100) was exceeded.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class BatchGetApplicationsCommand extends command<BatchGetApplicationsCommandInput, BatchGetApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetApplications",
  BatchGetApplications$
) {
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
