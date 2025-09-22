// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCommandExecutionsForSandboxInput, ListCommandExecutionsForSandboxOutput } from "../models/models_0";
import { ListCommandExecutionsForSandbox } from "../schemas/schemas_29_Build";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCommandExecutionsForSandboxCommand}.
 */
export interface ListCommandExecutionsForSandboxCommandInput extends ListCommandExecutionsForSandboxInput {}
/**
 * @public
 *
 * The output of {@link ListCommandExecutionsForSandboxCommand}.
 */
export interface ListCommandExecutionsForSandboxCommandOutput
  extends ListCommandExecutionsForSandboxOutput,
    __MetadataBearer {}

/**
 * <p>Gets a list of command executions for a sandbox.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCommandExecutionsForSandboxCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCommandExecutionsForSandboxCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // ListCommandExecutionsForSandboxInput
 *   sandboxId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCommandExecutionsForSandboxCommand(input);
 * const response = await client.send(command);
 * // { // ListCommandExecutionsForSandboxOutput
 * //   commandExecutions: [ // CommandExecutions
 * //     { // CommandExecution
 * //       id: "STRING_VALUE",
 * //       sandboxId: "STRING_VALUE",
 * //       submitTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       command: "STRING_VALUE",
 * //       type: "SHELL",
 * //       exitCode: "STRING_VALUE",
 * //       standardOutputContent: "STRING_VALUE",
 * //       standardErrContent: "STRING_VALUE",
 * //       logs: { // LogsLocation
 * //         groupName: "STRING_VALUE",
 * //         streamName: "STRING_VALUE",
 * //         deepLink: "STRING_VALUE",
 * //         s3DeepLink: "STRING_VALUE",
 * //         cloudWatchLogsArn: "STRING_VALUE",
 * //         s3LogsArn: "STRING_VALUE",
 * //         cloudWatchLogs: { // CloudWatchLogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           groupName: "STRING_VALUE",
 * //           streamName: "STRING_VALUE",
 * //         },
 * //         s3Logs: { // S3LogsConfig
 * //           status: "ENABLED" || "DISABLED", // required
 * //           location: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //           bucketOwnerAccess: "NONE" || "READ_ONLY" || "FULL",
 * //         },
 * //       },
 * //       sandboxArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommandExecutionsForSandboxCommandInput - {@link ListCommandExecutionsForSandboxCommandInput}
 * @returns {@link ListCommandExecutionsForSandboxCommandOutput}
 * @see {@link ListCommandExecutionsForSandboxCommandInput} for command's `input` shape.
 * @see {@link ListCommandExecutionsForSandboxCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListCommandExecutionsForSandboxCommand extends $Command
  .classBuilder<
    ListCommandExecutionsForSandboxCommandInput,
    ListCommandExecutionsForSandboxCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeBuild_20161006", "ListCommandExecutionsForSandbox", {})
  .n("CodeBuildClient", "ListCommandExecutionsForSandboxCommand")
  .sc(ListCommandExecutionsForSandbox)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommandExecutionsForSandboxInput;
      output: ListCommandExecutionsForSandboxOutput;
    };
    sdk: {
      input: ListCommandExecutionsForSandboxCommandInput;
      output: ListCommandExecutionsForSandboxCommandOutput;
    };
  };
}
