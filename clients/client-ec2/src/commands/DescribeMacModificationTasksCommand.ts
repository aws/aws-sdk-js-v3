// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeMacModificationTasksRequest, DescribeMacModificationTasksResult } from "../models/models_4";
import { DescribeMacModificationTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMacModificationTasksCommand}.
 */
export interface DescribeMacModificationTasksCommandInput extends DescribeMacModificationTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMacModificationTasksCommand}.
 */
export interface DescribeMacModificationTasksCommandOutput
  extends DescribeMacModificationTasksResult,
    __MetadataBearer {}

/**
 * <p>Describes a System Integrity Protection (SIP) modification task or volume ownership delegation
 *          task for an Amazon EC2 Mac instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mac-sip-settings.html#mac-sip-configure">Configure
 *             SIP for Amazon EC2 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMacModificationTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMacModificationTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeMacModificationTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MacModificationTaskIds: [ // MacModificationTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMacModificationTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMacModificationTasksResult
 * //   MacModificationTasks: [ // MacModificationTaskList
 * //     { // MacModificationTask
 * //       InstanceId: "STRING_VALUE",
 * //       MacModificationTaskId: "STRING_VALUE",
 * //       MacSystemIntegrityProtectionConfig: { // MacSystemIntegrityProtectionConfiguration
 * //         AppleInternal: "enabled" || "disabled",
 * //         BaseSystem: "enabled" || "disabled",
 * //         DebuggingRestrictions: "enabled" || "disabled",
 * //         DTraceRestrictions: "enabled" || "disabled",
 * //         FilesystemProtections: "enabled" || "disabled",
 * //         KextSigning: "enabled" || "disabled",
 * //         NvramProtections: "enabled" || "disabled",
 * //         Status: "enabled" || "disabled",
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TaskState: "successful" || "failed" || "in-progress" || "pending",
 * //       TaskType: "sip-modification" || "volume-ownership-delegation",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMacModificationTasksCommandInput - {@link DescribeMacModificationTasksCommandInput}
 * @returns {@link DescribeMacModificationTasksCommandOutput}
 * @see {@link DescribeMacModificationTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeMacModificationTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeMacModificationTasksCommand extends $Command
  .classBuilder<
    DescribeMacModificationTasksCommandInput,
    DescribeMacModificationTasksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeMacModificationTasks", {})
  .n("EC2Client", "DescribeMacModificationTasksCommand")
  .sc(DescribeMacModificationTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMacModificationTasksRequest;
      output: DescribeMacModificationTasksResult;
    };
    sdk: {
      input: DescribeMacModificationTasksCommandInput;
      output: DescribeMacModificationTasksCommandOutput;
    };
  };
}
