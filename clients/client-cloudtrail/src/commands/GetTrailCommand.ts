// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrailRequest, GetTrailResponse } from "../models/models_0";
import { GetTrail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrailCommand}.
 */
export interface GetTrailCommandInput extends GetTrailRequest {}
/**
 * @public
 *
 * The output of {@link GetTrailCommand}.
 */
export interface GetTrailCommandOutput extends GetTrailResponse, __MetadataBearer {}

/**
 * <p>Returns settings information for a specified trail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // GetTrailRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTrailCommand(input);
 * const response = await client.send(command);
 * // { // GetTrailResponse
 * //   Trail: { // Trail
 * //     Name: "STRING_VALUE",
 * //     S3BucketName: "STRING_VALUE",
 * //     S3KeyPrefix: "STRING_VALUE",
 * //     SnsTopicName: "STRING_VALUE",
 * //     SnsTopicARN: "STRING_VALUE",
 * //     IncludeGlobalServiceEvents: true || false,
 * //     IsMultiRegionTrail: true || false,
 * //     HomeRegion: "STRING_VALUE",
 * //     TrailARN: "STRING_VALUE",
 * //     LogFileValidationEnabled: true || false,
 * //     CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //     CloudWatchLogsRoleArn: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     HasCustomEventSelectors: true || false,
 * //     HasInsightSelectors: true || false,
 * //     IsOrganizationTrail: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrailCommandInput - {@link GetTrailCommandInput}
 * @returns {@link GetTrailCommandOutput}
 * @see {@link GetTrailCommandInput} for command's `input` shape.
 * @see {@link GetTrailCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
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
export class GetTrailCommand extends $Command
  .classBuilder<
    GetTrailCommandInput,
    GetTrailCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "GetTrail", {})
  .n("CloudTrailClient", "GetTrailCommand")
  .sc(GetTrail)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrailRequest;
      output: GetTrailResponse;
    };
    sdk: {
      input: GetTrailCommandInput;
      output: GetTrailCommandOutput;
    };
  };
}
