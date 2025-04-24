// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetCommandExecutionsInput,
  BatchGetCommandExecutionsOutput,
  BatchGetCommandExecutionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetCommandExecutionsCommand, se_BatchGetCommandExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCommandExecutionsCommand}.
 */
export interface BatchGetCommandExecutionsCommandInput extends BatchGetCommandExecutionsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCommandExecutionsCommand}.
 */
export interface BatchGetCommandExecutionsCommandOutput extends BatchGetCommandExecutionsOutput, __MetadataBearer {}

/**
 * <p>Gets information about the command executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetCommandExecutionsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetCommandExecutionsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetCommandExecutionsInput
 *   sandboxId: "STRING_VALUE", // required
 *   commandExecutionIds: [ // CommandExecutionIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCommandExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCommandExecutionsOutput
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
 * //   commandExecutionsNotFound: [ // CommandExecutionIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCommandExecutionsCommandInput - {@link BatchGetCommandExecutionsCommandInput}
 * @returns {@link BatchGetCommandExecutionsCommandOutput}
 * @see {@link BatchGetCommandExecutionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCommandExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class BatchGetCommandExecutionsCommand extends $Command
  .classBuilder<
    BatchGetCommandExecutionsCommandInput,
    BatchGetCommandExecutionsCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "BatchGetCommandExecutions", {})
  .n("CodeBuildClient", "BatchGetCommandExecutionsCommand")
  .f(void 0, BatchGetCommandExecutionsOutputFilterSensitiveLog)
  .ser(se_BatchGetCommandExecutionsCommand)
  .de(de_BatchGetCommandExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCommandExecutionsInput;
      output: BatchGetCommandExecutionsOutput;
    };
    sdk: {
      input: BatchGetCommandExecutionsCommandInput;
      output: BatchGetCommandExecutionsCommandOutput;
    };
  };
}
