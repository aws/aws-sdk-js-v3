// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRealtimeLogConfigRequest, CreateRealtimeLogConfigResult } from "../models/models_0";
import { CreateRealtimeLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a real-time log configuration.
 *
 * After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.
 *
 * For more information about real-time log configurations, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *
 * Access denied.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link RealtimeLogConfigAlreadyExists} (client fault)
 *
 * A real-time log configuration with this name already exists. You must provide a unique name. To modify an existing real-time log configuration, use `UpdateRealtimeLogConfig`.
 *
 * @throws {@link TooManyRealtimeLogConfigs} (client fault)
 *
 * You have reached the maximum number of real-time log configurations for this Amazon Web Services account. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateRealtimeLogConfigCommand extends command<CreateRealtimeLogConfigCommandInput, CreateRealtimeLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateRealtimeLogConfig",
  CreateRealtimeLogConfig$
) {
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
