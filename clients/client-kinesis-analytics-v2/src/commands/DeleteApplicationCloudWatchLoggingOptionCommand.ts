// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0";
import {
  de_DeleteApplicationCloudWatchLoggingOptionCommand,
  se_DeleteApplicationCloudWatchLoggingOptionCommand,
} from "../protocols/Aws_json1_1";

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
export interface DeleteApplicationCloudWatchLoggingOptionCommandInput
  extends DeleteApplicationCloudWatchLoggingOptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCloudWatchLoggingOptionCommand}.
 */
export interface DeleteApplicationCloudWatchLoggingOptionCommandOutput
  extends DeleteApplicationCloudWatchLoggingOptionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Amazon CloudWatch log stream from an SQL-based Kinesis Data Analytics application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationCloudWatchLoggingOptionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationCloudWatchLoggingOptionRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"),
 *   CloudWatchLoggingOptionId: "STRING_VALUE", // required
 *   ConditionalToken: "STRING_VALUE",
 * };
 * const command = new DeleteApplicationCloudWatchLoggingOptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationCloudWatchLoggingOptionResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   CloudWatchLoggingOptionDescriptions: [ // CloudWatchLoggingOptionDescriptions
 * //     { // CloudWatchLoggingOptionDescription
 * //       CloudWatchLoggingOptionId: "STRING_VALUE",
 * //       LogStreamARN: "STRING_VALUE", // required
 * //       RoleARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteApplicationCloudWatchLoggingOptionCommandInput - {@link DeleteApplicationCloudWatchLoggingOptionCommandInput}
 * @returns {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput}
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCloudWatchLoggingOptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 * @public
 */
export class DeleteApplicationCloudWatchLoggingOptionCommand extends $Command
  .classBuilder<
    DeleteApplicationCloudWatchLoggingOptionCommandInput,
    DeleteApplicationCloudWatchLoggingOptionCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "DeleteApplicationCloudWatchLoggingOption", {})
  .n("KinesisAnalyticsV2Client", "DeleteApplicationCloudWatchLoggingOptionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteApplicationCloudWatchLoggingOptionCommand)
  .de(de_DeleteApplicationCloudWatchLoggingOptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationCloudWatchLoggingOptionRequest;
      output: DeleteApplicationCloudWatchLoggingOptionResponse;
    };
    sdk: {
      input: DeleteApplicationCloudWatchLoggingOptionCommandInput;
      output: DeleteApplicationCloudWatchLoggingOptionCommandOutput;
    };
  };
}
