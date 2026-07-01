// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeUsageReportSubscriptionsRequest,
  DescribeUsageReportSubscriptionsResult,
} from "../models/models_0";
import { DescribeUsageReportSubscriptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeUsageReportSubscriptionsCommand}.
 */
export interface DescribeUsageReportSubscriptionsCommandInput extends DescribeUsageReportSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUsageReportSubscriptionsCommand}.
 */
export interface DescribeUsageReportSubscriptionsCommandOutput extends DescribeUsageReportSubscriptionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more usage report subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeUsageReportSubscriptionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeUsageReportSubscriptionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeUsageReportSubscriptionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeUsageReportSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUsageReportSubscriptionsResult
 * //   UsageReportSubscriptions: [ // UsageReportSubscriptionList
 * //     { // UsageReportSubscription
 * //       S3BucketName: "STRING_VALUE",
 * //       Schedule: "DAILY",
 * //       LastGeneratedReportDate: new Date("TIMESTAMP"),
 * //       SubscriptionErrors: [ // LastReportGenerationExecutionErrors
 * //         { // LastReportGenerationExecutionError
 * //           ErrorCode: "RESOURCE_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUsageReportSubscriptionsCommandInput - {@link DescribeUsageReportSubscriptionsCommandInput}
 * @returns {@link DescribeUsageReportSubscriptionsCommandOutput}
 * @see {@link DescribeUsageReportSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeUsageReportSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeUsageReportSubscriptionsCommand extends command<DescribeUsageReportSubscriptionsCommandInput, DescribeUsageReportSubscriptionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeUsageReportSubscriptions",
  DescribeUsageReportSubscriptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUsageReportSubscriptionsRequest;
      output: DescribeUsageReportSubscriptionsResult;
    };
    sdk: {
      input: DescribeUsageReportSubscriptionsCommandInput;
      output: DescribeUsageReportSubscriptionsCommandOutput;
    };
  };
}
