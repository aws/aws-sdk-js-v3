// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTrailsRequest, DescribeTrailsResponse } from "../models/models_0";
import { DescribeTrails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrailsCommand}.
 */
export interface DescribeTrailsCommandInput extends DescribeTrailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrailsCommand}.
 */
export interface DescribeTrailsCommandOutput extends DescribeTrailsResponse, __MetadataBearer {}

/**
 * <p>Retrieves settings for one or more trails associated with the current Region for your
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DescribeTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DescribeTrailsRequest
 *   trailNameList: [ // TrailNameList
 *     "STRING_VALUE",
 *   ],
 *   includeShadowTrails: true || false,
 * };
 * const command = new DescribeTrailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrailsResponse
 * //   trailList: [ // TrailList
 * //     { // Trail
 * //       Name: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       SnsTopicName: "STRING_VALUE",
 * //       SnsTopicARN: "STRING_VALUE",
 * //       IncludeGlobalServiceEvents: true || false,
 * //       IsMultiRegionTrail: true || false,
 * //       HomeRegion: "STRING_VALUE",
 * //       TrailARN: "STRING_VALUE",
 * //       LogFileValidationEnabled: true || false,
 * //       CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //       CloudWatchLogsRoleArn: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       HasCustomEventSelectors: true || false,
 * //       HasInsightSelectors: true || false,
 * //       IsOrganizationTrail: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrailsCommandInput - {@link DescribeTrailsCommandInput}
 * @returns {@link DescribeTrailsCommandOutput}
 * @see {@link DescribeTrailsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *  <p>This exception is thrown when an operation is called with an ARN that is not valid.</p>
 *          <p>The following is the format of a trail ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a dashboard ARN: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class DescribeTrailsCommand extends $Command
  .classBuilder<
    DescribeTrailsCommandInput,
    DescribeTrailsCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "DescribeTrails", {})
  .n("CloudTrailClient", "DescribeTrailsCommand")
  .sc(DescribeTrails$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrailsRequest;
      output: DescribeTrailsResponse;
    };
    sdk: {
      input: DescribeTrailsCommandInput;
      output: DescribeTrailsCommandOutput;
    };
  };
}
