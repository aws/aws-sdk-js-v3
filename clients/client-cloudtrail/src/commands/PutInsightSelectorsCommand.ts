// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/models_0";
import { PutInsightSelectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutInsightSelectorsCommand}.
 */
export interface PutInsightSelectorsCommandInput extends PutInsightSelectorsRequest {}
/**
 * @public
 *
 * The output of {@link PutInsightSelectorsCommand}.
 */
export interface PutInsightSelectorsCommandOutput extends PutInsightSelectorsResponse, __MetadataBearer {}

/**
 * <p>Lets you enable Insights event logging on specific event categories by specifying the Insights selectors that you
 *          want to enable on an existing trail or event data store. You also use <code>PutInsightSelectors</code> to turn
 *          off Insights event logging, by passing an empty list of Insights types. The valid Insights
 *          event types are <code>ApiErrorRateInsight</code> and
 *             <code>ApiCallRateInsight</code>, and valid EventCategories are <code>Management</code> and <code>Data</code>.</p>
 *          <note>
 *             <p>
 *             Insights on data events are not supported on event data stores. For event data stores, you can only enable Insights on management events.
 *          </p>
 *          </note>
 *          <p>To enable Insights on an event data store, you must specify the ARNs (or ID suffix of the ARNs) for the source event data store (<code>EventDataStore</code>) and the destination event data store (<code>InsightsDestination</code>). The source event data store logs management events and enables Insights.
 *          The destination event data store logs Insights events based upon the management event activity of the source event data store. The source and destination event data stores must belong to the same Amazon Web Services account.</p>
 *          <p>To log Insights events for a trail, you must specify the name (<code>TrailName</code>) of the CloudTrail trail for which you want to change or add Insights
 *          selectors.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                For Management events Insights: To log CloudTrail Insights on the API call rate, the trail or event data store must log <code>write</code> management events.
 *                To log CloudTrail Insights on the API error rate, the trail or event data store must log <code>read</code> or <code>write</code> management events.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                For Data events Insights: To log CloudTrail Insights on the API call rate or API error rate, the trail must log <code>read</code> or <code>write</code> data events. Data events Insights are not supported on event data store.
 *             </p>
 *             </li>
 *          </ul>
 *          <p>To log CloudTrail Insights events on API call volume, the trail or event data store
 *          must log <code>write</code> management events. To log CloudTrail
 *          Insights events on API error rate, the trail or event data store must log <code>read</code> or
 *             <code>write</code> management events. You can call <code>GetEventSelectors</code> on a trail
 *          to check whether the trail logs management events. You can call <code>GetEventDataStore</code> on an
 *       event data store to check whether the event data store logs management events.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Working with CloudTrail Insights</a> in the <i>CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // PutInsightSelectorsRequest
 *   TrailName: "STRING_VALUE",
 *   InsightSelectors: [ // InsightSelectors // required
 *     { // InsightSelector
 *       InsightType: "ApiCallRateInsight" || "ApiErrorRateInsight",
 *       EventCategories: [ // SourceEventCategories
 *         "Management" || "Data",
 *       ],
 *     },
 *   ],
 *   EventDataStore: "STRING_VALUE",
 *   InsightsDestination: "STRING_VALUE",
 * };
 * const command = new PutInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * // { // PutInsightSelectorsResponse
 * //   TrailARN: "STRING_VALUE",
 * //   InsightSelectors: [ // InsightSelectors
 * //     { // InsightSelector
 * //       InsightType: "ApiCallRateInsight" || "ApiErrorRateInsight",
 * //       EventCategories: [ // SourceEventCategories
 * //         "Management" || "Data",
 * //       ],
 * //     },
 * //   ],
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   InsightsDestination: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutInsightSelectorsCommandInput - {@link PutInsightSelectorsCommandInput}
 * @returns {@link PutInsightSelectorsCommandOutput}
 * @see {@link PutInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutInsightSelectorsCommandOutput} for command's `response` shape.
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
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 *
 * @throws {@link InvalidHomeRegionException} (client fault)
 *  <p>This exception is thrown when an operation is called on a trail from a Region other than
 *          the Region in which the trail was created.</p>
 *
 * @throws {@link InvalidInsightSelectorsException} (client fault)
 *  <p>For <code>PutInsightSelectors</code>, this exception is thrown when the formatting or syntax of the <code>InsightSelectors</code> JSON statement is not
 *          valid, or the specified <code>InsightType</code> in the <code>InsightSelectors</code> statement is not
 *          valid. Valid values for <code>InsightType</code> are <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code>. To enable Insights on an event data store, the destination event data store specified by the
 *          <code>InsightsDestination</code> parameter must log Insights events and the source event data
 *          store specified by the <code>EventDataStore</code> parameter must log management events.</p>
 *          <p>For <code>UpdateEventDataStore</code>, this exception is thrown if Insights are enabled on the event data store and the updated
 *          advanced event selectors are not compatible with the configured <code>InsightSelectors</code>.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiCallRateInsight</code>, the source event data store must log <code>write</code> management events.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiErrorRateInsight</code>, the source event data store must log management events.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
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
 * @throws {@link KmsException} (client fault)
 *  <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *  <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html">Organization event data stores</a>.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *  <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *  <p>This exception is thrown when the trail with the given name is not found.</p>
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
export class PutInsightSelectorsCommand extends $Command
  .classBuilder<
    PutInsightSelectorsCommandInput,
    PutInsightSelectorsCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "PutInsightSelectors", {})
  .n("CloudTrailClient", "PutInsightSelectorsCommand")
  .sc(PutInsightSelectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInsightSelectorsRequest;
      output: PutInsightSelectorsResponse;
    };
    sdk: {
      input: PutInsightSelectorsCommandInput;
      output: PutInsightSelectorsCommandOutput;
    };
  };
}
