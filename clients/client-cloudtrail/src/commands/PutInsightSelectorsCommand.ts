// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/models_0";
import { PutInsightSelectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lets you enable Insights event logging on specific event categories by specifying the Insights selectors that you want to enable on an existing trail or event data store. You also use `PutInsightSelectors` to turn off Insights event logging, by passing an empty list of Insights types. The valid Insights event types are `ApiErrorRateInsight` and `ApiCallRateInsight`, and valid EventCategories are `Management` and `Data`.
 *
 * > **Note:** Insights on data events are not supported on event data stores. For event data stores, you can only enable Insights on management events.
 *
 * To enable Insights on an event data store, you must specify the ARNs (or ID suffix of the ARNs) for the source event data store (`EventDataStore`) and the destination event data store (`InsightsDestination`). The source event data store logs management events and enables Insights. The destination event data store logs Insights events based upon the management event activity of the source event data store. The source and destination event data stores must belong to the same Amazon Web Services account.
 *
 * To log Insights events for a trail, you must specify the name (`TrailName`) of the CloudTrail trail for which you want to change or add Insights selectors.
 *
 * - For Management events Insights: To log CloudTrail Insights on the API call rate, the trail or event data store must log `write` management events. To log CloudTrail Insights on the API error rate, the trail or event data store must log `read` or `write` management events.
 * - For Data events Insights: To log CloudTrail Insights on the API call rate or API error rate, the trail must log `read` or `write` data events. Data events Insights are not supported on event data store.
 *
 * To log CloudTrail Insights events on API call volume, the trail or event data store must log `write` management events. To log CloudTrail Insights events on API error rate, the trail or event data store must log `read` or `write` management events. You can call `GetEventSelectors` on a trail to check whether the trail logs management events. You can call `GetEventDataStore` on an event data store to check whether the event data store logs management events.
 *
 * For more information, see [Working with CloudTrail Insights](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html) in the *CloudTrail User Guide*.
 *
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
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *
 * For the `CreateTrail` `PutInsightSelectors`, `UpdateTrail`, `StartQuery`, and `StartImport` operations, this exception is thrown when the policy on the S3 bucket or KMS key does not have sufficient permissions for the operation.
 *
 * For all other operations, this exception is thrown when the policy for the KMS key does not have sufficient permissions for the operation.
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *
 * This exception is thrown when the policy on the S3 bucket is not sufficient.
 *
 * @throws {@link InvalidHomeRegionException} (client fault)
 *
 * This exception is thrown when an operation is called on a trail from a Region other than the Region in which the trail was created.
 *
 * @throws {@link InvalidInsightSelectorsException} (client fault)
 *
 * For `PutInsightSelectors`, this exception is thrown when the formatting or syntax of the `InsightSelectors` JSON statement is not valid, or the specified `InsightType` in the `InsightSelectors` statement is not valid. Valid values for `InsightType` are `ApiCallRateInsight` and `ApiErrorRateInsight`. To enable Insights on an event data store, the destination event data store specified by the `InsightsDestination` parameter must log Insights events and the source event data store specified by the `EventDataStore` parameter must log management events.
 *
 * For `UpdateEventDataStore`, this exception is thrown if Insights are enabled on the event data store and the updated advanced event selectors are not compatible with the configured `InsightSelectors`. If the `InsightSelectors` includes an `InsightType` of `ApiCallRateInsight`, the source event data store must log `write` management events. If the `InsightSelectors` includes an `InsightType` of `ApiErrorRateInsight`, the source event data store must log management events.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * This exception is thrown when the combination of parameters provided is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link KmsException} (client fault)
 *
 * This exception is thrown when there is an issue with the specified KMS key and the trail or event data store can't be updated.
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *
 * This exception is thrown when the Amazon Web Services account making the request to create or update an organization trail or event data store is not the management account for an organization in Organizations. For more information, see [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) or [Organization event data stores](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html).
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *
 * This exception is thrown when the specified S3 bucket does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the request rate exceeds the limit.
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *
 * This exception is thrown when the trail with the given name is not found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class PutInsightSelectorsCommand extends command<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput>(
  _ep0,
  _mw0,
  "PutInsightSelectors",
  PutInsightSelectors$
) {
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
