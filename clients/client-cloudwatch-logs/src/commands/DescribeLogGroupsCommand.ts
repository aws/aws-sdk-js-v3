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
import type { DescribeLogGroupsRequest, DescribeLogGroupsResponse } from "../models/models_0";
import { DescribeLogGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLogGroupsCommand}.
 */
export interface DescribeLogGroupsCommandInput extends DescribeLogGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLogGroupsCommand}.
 */
export interface DescribeLogGroupsCommandOutput extends DescribeLogGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns information about log groups. You can return all your log groups or filter the
 *       results by prefix. The results are ASCII-sorted by log group name.</p>
 *          <p>CloudWatch Logs doesn't support IAM policies that control access to the
 *         <code>DescribeLogGroups</code> action by using the
 *           <code>aws:ResourceTag/<i>key-name</i>
 *             </code> condition key. Other CloudWatch
 *       Logs actions do support the use of the
 *         <code>aws:ResourceTag/<i>key-name</i>
 *             </code> condition key to control access.
 *       For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services
 *         resources using tags</a>.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account and view data from the linked source accounts. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLogGroupsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLogGroupsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeLogGroupsRequest
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   logGroupNamePrefix: "STRING_VALUE",
 *   logGroupNamePattern: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   includeLinkedAccounts: true || false,
 *   logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 *   logGroupIdentifiers: [ // DescribeLogGroupsLogGroupIdentifiers
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLogGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLogGroupsResponse
 * //   logGroups: [ // LogGroups
 * //     { // LogGroup
 * //       logGroupName: "STRING_VALUE",
 * //       creationTime: Number("long"),
 * //       retentionInDays: Number("int"),
 * //       metricFilterCount: Number("int"),
 * //       arn: "STRING_VALUE",
 * //       storedBytes: Number("long"),
 * //       kmsKeyId: "STRING_VALUE",
 * //       dataProtectionStatus: "ACTIVATED" || "DELETED" || "ARCHIVED" || "DISABLED",
 * //       inheritedProperties: [ // InheritedProperties
 * //         "ACCOUNT_DATA_PROTECTION",
 * //       ],
 * //       logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 * //       logGroupArn: "STRING_VALUE",
 * //       deletionProtectionEnabled: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLogGroupsCommandInput - {@link DescribeLogGroupsCommandInput}
 * @returns {@link DescribeLogGroupsCommandOutput}
 * @see {@link DescribeLogGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLogGroupsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeLogGroupsCommand extends $Command
  .classBuilder<
    DescribeLogGroupsCommandInput,
    DescribeLogGroupsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeLogGroups", {})
  .n("CloudWatchLogsClient", "DescribeLogGroupsCommand")
  .sc(DescribeLogGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLogGroupsRequest;
      output: DescribeLogGroupsResponse;
    };
    sdk: {
      input: DescribeLogGroupsCommandInput;
      output: DescribeLogGroupsCommandOutput;
    };
  };
}
