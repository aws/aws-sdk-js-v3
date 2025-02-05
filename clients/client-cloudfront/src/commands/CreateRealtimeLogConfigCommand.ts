// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRealtimeLogConfigRequest, CreateRealtimeLogConfigResult } from "../models/models_0";
import { de_CreateRealtimeLogConfigCommand, se_CreateRealtimeLogConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRealtimeLogConfigCommand}.
 */
export interface CreateRealtimeLogConfigCommandInput extends CreateRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateRealtimeLogConfigCommand}.
 */
export interface CreateRealtimeLogConfigCommandOutput extends CreateRealtimeLogConfigResult, __MetadataBearer {}

/**
 * <p>Creates a real-time log configuration.</p>
 *          <p>After you create a real-time log configuration, you can attach it to one or more cache
 * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
 *          <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // CreateRealtimeLogConfigRequest
 *   EndPoints: [ // EndPointList // required
 *     { // EndPoint
 *       StreamType: "STRING_VALUE", // required
 *       KinesisStreamConfig: { // KinesisStreamConfig
 *         RoleARN: "STRING_VALUE", // required
 *         StreamARN: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   Fields: [ // FieldList // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE", // required
 *   SamplingRate: Number("long"), // required
 * };
 * const command = new CreateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateRealtimeLogConfigResult
 * //   RealtimeLogConfig: { // RealtimeLogConfig
 * //     ARN: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     SamplingRate: Number("long"), // required
 * //     EndPoints: [ // EndPointList // required
 * //       { // EndPoint
 * //         StreamType: "STRING_VALUE", // required
 * //         KinesisStreamConfig: { // KinesisStreamConfig
 * //           RoleARN: "STRING_VALUE", // required
 * //           StreamARN: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     Fields: [ // FieldList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRealtimeLogConfigCommandInput - {@link CreateRealtimeLogConfigCommandInput}
 * @returns {@link CreateRealtimeLogConfigCommandOutput}
 * @see {@link CreateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link RealtimeLogConfigAlreadyExists} (client fault)
 *  <p>A real-time log configuration with this name already exists. You must provide a unique
 * 			name. To modify an existing real-time log configuration, use
 * 				<code>UpdateRealtimeLogConfig</code>.</p>
 *
 * @throws {@link TooManyRealtimeLogConfigs} (client fault)
 *  <p>You have reached the maximum number of real-time log configurations for this
 * 			Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class CreateRealtimeLogConfigCommand extends $Command
  .classBuilder<
    CreateRealtimeLogConfigCommandInput,
    CreateRealtimeLogConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "CreateRealtimeLogConfig", {})
  .n("CloudFrontClient", "CreateRealtimeLogConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateRealtimeLogConfigCommand)
  .de(de_CreateRealtimeLogConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRealtimeLogConfigRequest;
      output: CreateRealtimeLogConfigResult;
    };
    sdk: {
      input: CreateRealtimeLogConfigCommandInput;
      output: CreateRealtimeLogConfigCommandOutput;
    };
  };
}
