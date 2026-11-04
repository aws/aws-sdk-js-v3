// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInsightSelectorsRequest, GetInsightSelectorsResponse } from "../models/models_0";
import { GetInsightSelectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInsightSelectorsCommand}.
 */
export interface GetInsightSelectorsCommandInput extends GetInsightSelectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightSelectorsCommand}.
 */
export interface GetInsightSelectorsCommandOutput extends GetInsightSelectorsResponse, __MetadataBearer {}

/**
 * Describes the settings for the Insights event selectors that you configured for your trail or event data store. `GetInsightSelectors` shows if CloudTrail Insights logging is enabled and which Insights types are configured with corresponding event categories. If you run `GetInsightSelectors` on a trail or event data store that does not have Insights events enabled, the operation throws the exception `InsightNotEnabledException`
 *
 * Specify either the `EventDataStore` parameter to get Insights event selectors for an event data store, or the `TrailName` parameter to the get Insights event selectors for a trail. You cannot specify these parameters together.
 *
 * For more information, see [Working with CloudTrail Insights](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html) in the *CloudTrail User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetInsightSelectorsRequest
 *   TrailName: "STRING_VALUE",
 *   EventDataStore: "STRING_VALUE",
 * };
 * const command = new GetInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightSelectorsResponse
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
 * @param GetInsightSelectorsCommandInput - {@link GetInsightSelectorsCommandInput}
 * @returns {@link GetInsightSelectorsCommandOutput}
 * @see {@link GetInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetInsightSelectorsCommandOutput} for command's `response` shape.
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
 * @throws {@link InsightNotEnabledException} (client fault)
 *
 * If you run `GetInsightSelectors` on a trail or event data store that does not have Insights events enabled, the operation throws the exception `InsightNotEnabledException`.
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
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
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
export class GetInsightSelectorsCommand extends command<GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput>(
  _ep0,
  _mw0,
  "GetInsightSelectors",
  GetInsightSelectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightSelectorsRequest;
      output: GetInsightSelectorsResponse;
    };
    sdk: {
      input: GetInsightSelectorsCommandInput;
      output: GetInsightSelectorsCommandOutput;
    };
  };
}
