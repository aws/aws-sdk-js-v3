// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UntagLogGroupRequest } from "../models/models_0";
import { UntagLogGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagLogGroupCommand}.
 */
export interface UntagLogGroupCommandInput extends UntagLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link UntagLogGroupCommand}.
 */
export interface UntagLogGroupCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use
 *           <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p>
 *          </important>
 *          <p>Removes the specified tags from the specified log group.</p>
 *          <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 *          <p>When using IAM policies to control tag management for CloudWatch Logs log groups, the
 *       condition keys <code>aws:Resource/key-name</code> and <code>aws:TagKeys</code> cannot be used
 *       to restrict which tags users can assign. </p>
 *
 * @deprecated Please use the generic tagging API UntagResource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UntagLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UntagLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UntagLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 *   tags: [ // TagList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagLogGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagLogGroupCommandInput - {@link UntagLogGroupCommandInput}
 * @returns {@link UntagLogGroupCommandOutput}
 * @see {@link UntagLogGroupCommandInput} for command's `input` shape.
 * @see {@link UntagLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class UntagLogGroupCommand extends $Command
  .classBuilder<
    UntagLogGroupCommandInput,
    UntagLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "UntagLogGroup", {})
  .n("CloudWatchLogsClient", "UntagLogGroupCommand")
  .sc(UntagLogGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagLogGroupRequest;
      output: {};
    };
    sdk: {
      input: UntagLogGroupCommandInput;
      output: UntagLogGroupCommandOutput;
    };
  };
}
