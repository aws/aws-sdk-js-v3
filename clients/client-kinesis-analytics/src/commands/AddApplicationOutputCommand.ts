// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { AddApplicationOutputRequest, AddApplicationOutputResponse } from "../models/models_0";
import { AddApplicationOutput } from "../schemas/schemas_2_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandInput extends AddApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandOutput extends AddApplicationOutputResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Adds an external destination to your Amazon Kinesis Analytics application.</p>
 *         <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream
 *             within your application to an external destination (such as an Amazon Kinesis stream, an
 *             Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the
 *             relevant configuration to your application using this operation. You can configure one
 *             or more outputs for your application. Each output configuration maps an in-application
 *             stream and an external destination.</p>
 *         <p> You can use one of the output configurations to deliver data from your
 *             in-application error stream to an external destination so that you can analyze the
 *             errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application
 *                 Output (Destination)</a>. </p>
 *         <p> Any configuration update, including adding a streaming source using this
 *             operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application
 *             version.</p>
 *         <p>For the limits on the number of application inputs and outputs
 *             you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p>
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // AddApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Output: { // Output
 *     Name: "STRING_VALUE", // required
 *     KinesisStreamsOutput: { // KinesisStreamsOutput
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *     LambdaOutput: { // LambdaOutput
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *     DestinationSchema: { // DestinationSchema
 *       RecordFormatType: "JSON" || "CSV", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddApplicationOutputCommandInput - {@link AddApplicationOutputCommandInput}
 * @returns {@link AddApplicationOutputCommandOutput}
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
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
export class AddApplicationOutputCommand extends $Command
  .classBuilder<
    AddApplicationOutputCommandInput,
    AddApplicationOutputCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "AddApplicationOutput", {})
  .n("KinesisAnalyticsClient", "AddApplicationOutputCommand")
  .sc(AddApplicationOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationOutputRequest;
      output: {};
    };
    sdk: {
      input: AddApplicationOutputCommandInput;
      output: AddApplicationOutputCommandOutput;
    };
  };
}
