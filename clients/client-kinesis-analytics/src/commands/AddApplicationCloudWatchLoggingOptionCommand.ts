// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import {
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0";
import {
  de_AddApplicationCloudWatchLoggingOptionCommand,
  se_AddApplicationCloudWatchLoggingOptionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationCloudWatchLoggingOptionCommand}.
 */
export interface AddApplicationCloudWatchLoggingOptionCommandInput
  extends AddApplicationCloudWatchLoggingOptionRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationCloudWatchLoggingOptionCommand}.
 */
export interface AddApplicationCloudWatchLoggingOptionCommandOutput
  extends AddApplicationCloudWatchLoggingOptionResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Adds a CloudWatch log stream to monitor application configuration errors. For more
 *             information about using CloudWatch log streams with Amazon Kinesis Analytics
 *             applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
 *                 CloudWatch Logs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // AddApplicationCloudWatchLoggingOptionRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   CloudWatchLoggingOption: { // CloudWatchLoggingOption
 *     LogStreamARN: "STRING_VALUE", // required
 *     RoleARN: "STRING_VALUE", // required
 *   },
 * };
 * const command = new AddApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddApplicationCloudWatchLoggingOptionCommandInput - {@link AddApplicationCloudWatchLoggingOptionCommandInput}
 * @returns {@link AddApplicationCloudWatchLoggingOptionCommandOutput}
 * @see {@link AddApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link AddApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Specified input parameter value is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class AddApplicationCloudWatchLoggingOptionCommand extends $Command
  .classBuilder<
    AddApplicationCloudWatchLoggingOptionCommandInput,
    AddApplicationCloudWatchLoggingOptionCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20150814", "AddApplicationCloudWatchLoggingOption", {})
  .n("KinesisAnalyticsClient", "AddApplicationCloudWatchLoggingOptionCommand")
  .f(void 0, void 0)
  .ser(se_AddApplicationCloudWatchLoggingOptionCommand)
  .de(de_AddApplicationCloudWatchLoggingOptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationCloudWatchLoggingOptionRequest;
      output: {};
    };
    sdk: {
      input: AddApplicationCloudWatchLoggingOptionCommandInput;
      output: AddApplicationCloudWatchLoggingOptionCommandOutput;
    };
  };
}
