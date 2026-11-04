// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagLogGroupRequest } from "../models/models_1";
import { TagLogGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagLogGroupCommand}.
 */
export interface TagLogGroupCommandInput extends TagLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link TagLogGroupCommand}.
 */
export interface TagLogGroupCommandOutput extends __MetadataBearer {}

/**
 * > **Important:** The TagLogGroup operation is on the path to deprecation. We recommend that you use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html) instead.
 *
 * Adds or updates the specified tags for the specified log group.
 *
 * To list the tags for a log group, use [ListTagsForResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html). To remove tags, use [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html).
 *
 * For more information about tags, see [Tag Log Groups in Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging) in the *Amazon CloudWatch Logs User Guide*.
 *
 * CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified tags to log groups using the `aws:Resource/key-name` or `aws:TagKeys` condition keys. For more information about using tags to control access, see [Controlling access to Amazon Web Services resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
 *
 * @deprecated Please use the generic tagging API TagResource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, TagLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, TagLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // TagLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 *   tags: { // Tags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagLogGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagLogGroupCommandInput - {@link TagLogGroupCommandInput}
 * @returns {@link TagLogGroupCommandOutput}
 * @see {@link TagLogGroupCommandInput} for command's `input` shape.
 * @see {@link TagLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class TagLogGroupCommand extends command<TagLogGroupCommandInput, TagLogGroupCommandOutput>(
  _ep0,
  _mw0,
  "TagLogGroup",
  TagLogGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagLogGroupRequest;
      output: {};
    };
    sdk: {
      input: TagLogGroupCommandInput;
      output: TagLogGroupCommandOutput;
    };
  };
}
