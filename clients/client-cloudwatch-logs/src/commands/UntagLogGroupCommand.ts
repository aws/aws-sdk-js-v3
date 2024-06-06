// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UntagLogGroupRequest } from "../models/models_0";
import { de_UntagLogGroupCommand, se_UntagLogGroupCommand } from "../protocols/Aws_json1_1";

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
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p>
 *          </important>
 *          <p>Removes the specified tags from the specified log group.</p>
 *          <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>.
 *       To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 *          <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to
 *       log groups using the <code>aws:Resource/<i>key-name</i>
 *             </code> or <code>aws:TagKeys</code> condition keys.
 *      </p>
 *
 * @deprecated Please use the generic tagging API UntagResource
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UntagLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UntagLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "UntagLogGroup", {})
  .n("CloudWatchLogsClient", "UntagLogGroupCommand")
  .f(void 0, void 0)
  .ser(se_UntagLogGroupCommand)
  .de(de_UntagLogGroupCommand)
  .build() {}
