// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventSelectorsRequest, GetEventSelectorsResponse } from "../models/models_0";
import { GetEventSelectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventSelectorsCommand}.
 */
export interface GetEventSelectorsCommandInput extends GetEventSelectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetEventSelectorsCommand}.
 */
export interface GetEventSelectorsCommandOutput extends GetEventSelectorsResponse, __MetadataBearer {}

/**
 * Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:
 *
 * - If your event selector includes read-only events, write-only events, or all events. This applies to management events, data events, and network activity events.
 * - If your event selector includes management events.
 * - If your event selector includes network activity events, the event sources for which you are logging network activity events.
 * - If your event selector includes data events, the resources on which you are logging data events.
 *
 * For more information about logging management, data, and network activity events, see the following topics in the *CloudTrail User Guide*:
 *
 * - [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html)
 * - [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html)
 * - [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetEventSelectorsRequest
 *   TrailName: "STRING_VALUE", // required
 * };
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetEventSelectorsResponse
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
 * @param GetEventSelectorsCommandInput - {@link GetEventSelectorsCommandInput}
 * @returns {@link GetEventSelectorsCommandOutput}
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
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
export class GetEventSelectorsCommand extends command<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput>(
  _ep0,
  _mw0,
  "GetEventSelectors",
  GetEventSelectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventSelectorsRequest;
      output: GetEventSelectorsResponse;
    };
    sdk: {
      input: GetEventSelectorsCommandInput;
      output: GetEventSelectorsCommandOutput;
    };
  };
}
