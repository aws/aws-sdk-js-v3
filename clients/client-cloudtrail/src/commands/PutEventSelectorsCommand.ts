// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutEventSelectorsRequest, PutEventSelectorsResponse } from "../models/models_0";
import { PutEventSelectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEventSelectorsCommand}.
 */
export interface PutEventSelectorsCommandInput extends PutEventSelectorsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventSelectorsCommand}.
 */
export interface PutEventSelectorsCommandOutput extends PutEventSelectorsResponse, __MetadataBearer {}

/**
 * Configures event selectors (also referred to as *basic event selectors*) or advanced event selectors for your trail. You can use either `AdvancedEventSelectors` or `EventSelectors`, but not both. If you apply `AdvancedEventSelectors` to a trail, any existing `EventSelectors` are overwritten.
 *
 * You can use `AdvancedEventSelectors` to log management events, data events for all resource types, and network activity events.
 *
 * You can use `EventSelectors` to log management events and data events for the following resource types:
 *
 * - `AWS::DynamoDB::Table`
 * - `AWS::Lambda::Function`
 * - `AWS::S3::Object`
 *
 * You can't use `EventSelectors` to log network activity events.
 *
 * If you want your trail to log Insights events, be sure the event selector or advanced event selector enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see [Working with CloudTrail Insights](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html) in the *CloudTrail User Guide*. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events or network activity events.
 *
 * When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
 *
 * Example
 *
 * 1. You create an event selector for a trail and specify that you want to log write-only events.
 * 2. The EC2 `GetConsoleOutput` and `RunInstances` API operations occur in your account.
 * 3. CloudTrail evaluates whether the events match your event selectors.
 * 4. The `RunInstances` is a write-only event and it matches your event selector. The trail logs the event.
 * 5. The `GetConsoleOutput` is a read-only event that doesn't match your event selector. The trail doesn't log the event.
 *
 * The `PutEventSelectors` operation must be called from the Region in which the trail was created; otherwise, an `InvalidHomeRegionException` exception is thrown.
 *
 * You can configure up to five event selectors for each trail.
 *
 * You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. For more information, see [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html), [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html), [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html), and [Quotas in CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the *CloudTrail User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // PutEventSelectorsRequest
 *   TrailName: "STRING_VALUE", // required
 *   EventSelectors: [ // EventSelectors
 *     { // EventSelector
 *       ReadWriteType: "ReadOnly" || "WriteOnly" || "All",
 *       IncludeManagementEvents: true || false,
 *       DataResources: [ // DataResources
 *         { // DataResource
 *           Type: "STRING_VALUE",
 *           Values: [ // DataResourceValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ExcludeManagementEventSources: [ // ExcludeManagementEventSources
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AdvancedEventSelectors: [ // AdvancedEventSelectors
 *     { // AdvancedEventSelector
 *       Name: "STRING_VALUE",
 *       FieldSelectors: [ // AdvancedFieldSelectors // required
 *         { // AdvancedFieldSelector
 *           Field: "STRING_VALUE", // required
 *           Equals: [ // Operator
 *             "STRING_VALUE",
 *           ],
 *           StartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           EndsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [
 *             "STRING_VALUE",
 *           ],
 *           NotStartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEndsWith: "<Operator>",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutEventSelectorsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventSelectorsResponse
 * //   TrailARN: "STRING_VALUE",
 * //   EventSelectors: [ // EventSelectors
 * //     { // EventSelector
 * //       ReadWriteType: "ReadOnly" || "WriteOnly" || "All",
 * //       IncludeManagementEvents: true || false,
 * //       DataResources: [ // DataResources
 * //         { // DataResource
 * //           Type: "STRING_VALUE",
 * //           Values: [ // DataResourceValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ExcludeManagementEventSources: [ // ExcludeManagementEventSources
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //     { // AdvancedEventSelector
 * //       Name: "STRING_VALUE",
 * //       FieldSelectors: [ // AdvancedFieldSelectors // required
 * //         { // AdvancedFieldSelector
 * //           Field: "STRING_VALUE", // required
 * //           Equals: [ // Operator
 * //             "STRING_VALUE",
 * //           ],
 * //           StartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEquals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotStartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEndsWith: "<Operator>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEventSelectorsCommandInput - {@link PutEventSelectorsCommandInput}
 * @returns {@link PutEventSelectorsCommandOutput}
 * @see {@link PutEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutEventSelectorsCommandOutput} for command's `response` shape.
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
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *
 * This exception is thrown when the IAM identity that is used to create the organization resource lacks one or more required permissions for creating an organization resource in a required service.
 *
 * @throws {@link InvalidEventSelectorsException} (client fault)
 *
 * This exception is thrown when the `PutEventSelectors` operation is called with a number of event selectors, advanced event selectors, or data resources that is not valid. The combination of event selectors or advanced event selectors and data resources is not valid. A trail can have up to 5 event selectors. If a trail uses advanced event selectors, a maximum of 500 total values for all conditions in all advanced event selectors is allowed. A trail is limited to 250 data resources. These data resources can be distributed across event selectors, but the overall total cannot exceed 250.
 *
 * You can:
 *
 * - Specify a valid number of event selectors (1 to 5) for a trail.
 * - Specify a valid number of data resources (1 to 250) for an event selector. The limit of number of resources on an individual event selector is configurable up to 250. However, this upper limit is allowed only if the total number of data resources does not exceed 250 across all event selectors for a trail.
 * - Specify up to 500 values for all conditions in all advanced event selectors for a trail.
 * - Specify a valid value for a parameter. For example, specifying the `ReadWriteType` parameter with a value of `read-only` is not valid.
 *
 * @throws {@link InvalidHomeRegionException} (client fault)
 *
 * This exception is thrown when an operation is called on a trail from a Region other than the Region in which the trail was created.
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
export class PutEventSelectorsCommand extends command<PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput>(
  _ep0,
  _mw0,
  "PutEventSelectors",
  PutEventSelectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventSelectorsRequest;
      output: PutEventSelectorsResponse;
    };
    sdk: {
      input: PutEventSelectorsCommandInput;
      output: PutEventSelectorsCommandOutput;
    };
  };
}
