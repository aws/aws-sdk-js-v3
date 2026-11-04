// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagLogGroupRequest } from "../models/models_1";
import { UntagLogGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** The UntagLogGroup operation is on the path to deprecation. We recommend that you use [UntagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html) instead.
 *
 * Removes the specified tags from the specified log group.
 *
 * To list the tags for a log group, use [ListTagsForResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html). To add tags, use [TagResource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html).
 *
 * When using IAM policies to control tag management for CloudWatch Logs log groups, the condition keys `aws:Resource/key-name` and `aws:TagKeys` cannot be used to restrict which tags users can assign.
 *
 * @deprecated Please use the generic tagging API UntagResource.
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
 *
 * The specified resource does not exist.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class UntagLogGroupCommand extends command<UntagLogGroupCommandInput, UntagLogGroupCommandOutput>(
  _ep0,
  _mw0,
  "UntagLogGroup",
  UntagLogGroup$
) {
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
