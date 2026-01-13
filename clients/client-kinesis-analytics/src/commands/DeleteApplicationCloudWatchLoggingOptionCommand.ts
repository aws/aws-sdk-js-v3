// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsClient";
import type {
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0";
import { DeleteApplicationCloudWatchLoggingOption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCloudWatchLoggingOptionCommand}.
 */
export interface DeleteApplicationCloudWatchLoggingOptionCommandInput extends DeleteApplicationCloudWatchLoggingOptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCloudWatchLoggingOptionCommand}.
 */
export interface DeleteApplicationCloudWatchLoggingOptionCommandOutput extends DeleteApplicationCloudWatchLoggingOptionResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes a CloudWatch log stream from an application. For more information about
 *             using CloudWatch log streams with Amazon Kinesis Analytics applications, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // DeleteApplicationCloudWatchLoggingOptionRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   CloudWatchLoggingOptionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCloudWatchLoggingOptionCommandInput - {@link DeleteApplicationCloudWatchLoggingOptionCommandInput}
 * @returns {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput}
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
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
export class DeleteApplicationCloudWatchLoggingOptionCommand extends $Command
  .classBuilder<
    DeleteApplicationCloudWatchLoggingOptionCommandInput,
    DeleteApplicationCloudWatchLoggingOptionCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "DeleteApplicationCloudWatchLoggingOption", {})
  .n("KinesisAnalyticsClient", "DeleteApplicationCloudWatchLoggingOptionCommand")
  .sc(DeleteApplicationCloudWatchLoggingOption$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationCloudWatchLoggingOptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCloudWatchLoggingOptionCommandInput;
      output: DeleteApplicationCloudWatchLoggingOptionCommandOutput;
    };
  };
}
