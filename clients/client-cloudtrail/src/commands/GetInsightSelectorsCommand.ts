// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightSelectorsRequest, GetInsightSelectorsResponse } from "../models/models_0";
import { GetInsightSelectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the settings for the Insights event selectors that you configured for your
 *          trail or event data store. <code>GetInsightSelectors</code> shows if CloudTrail Insights logging is enabled
 *          and which Insights types are configured with corresponding event categories. If you run
 *             <code>GetInsightSelectors</code> on a trail or event data store that does not have Insights events enabled,
 *          the operation throws the exception <code>InsightNotEnabledException</code>
 *          </p>
 *          <p>Specify either the <code>EventDataStore</code> parameter to get Insights event selectors for an event data store,
 *          or the <code>TrailName</code> parameter to the get Insights event selectors for a trail. You cannot specify these parameters together.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Working with CloudTrail Insights</a> in the <i>CloudTrail User Guide</i>.</p>
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
 * @throws {@link InsightNotEnabledException} (client fault)
 *  <p>If you run <code>GetInsightSelectors</code> on a trail or event data store that does not have Insights
 *          events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>.</p>
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
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
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
export class GetInsightSelectorsCommand extends $Command
  .classBuilder<
    GetInsightSelectorsCommandInput,
    GetInsightSelectorsCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetInsightSelectors", {})
  .n("CloudTrailClient", "GetInsightSelectorsCommand")
  .sc(GetInsightSelectors)
  .build() {
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
