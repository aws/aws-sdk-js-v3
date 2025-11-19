// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateCloudWatchAlarmTemplateRequest, CreateCloudWatchAlarmTemplateResponse } from "../models/models_1";
import { CreateCloudWatchAlarmTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudWatchAlarmTemplateCommand}.
 */
export interface CreateCloudWatchAlarmTemplateCommandInput extends CreateCloudWatchAlarmTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudWatchAlarmTemplateCommand}.
 */
export interface CreateCloudWatchAlarmTemplateCommandOutput
  extends CreateCloudWatchAlarmTemplateResponse,
    __MetadataBearer {}

/**
 * Creates a cloudwatch alarm template to dynamically generate cloudwatch metric alarms on targeted resource types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateCloudWatchAlarmTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateCloudWatchAlarmTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateCloudWatchAlarmTemplateRequest
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold", // required
 *   DatapointsToAlarm: Number("int"),
 *   Description: "STRING_VALUE",
 *   EvaluationPeriods: Number("int"), // required
 *   GroupIdentifier: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Period: Number("int"), // required
 *   Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TargetResourceType: "CLOUDFRONT_DISTRIBUTION" || "MEDIALIVE_MULTIPLEX" || "MEDIALIVE_CHANNEL" || "MEDIALIVE_INPUT_DEVICE" || "MEDIAPACKAGE_CHANNEL" || "MEDIAPACKAGE_ORIGIN_ENDPOINT" || "MEDIACONNECT_FLOW" || "S3_BUCKET" || "MEDIATAILOR_PLAYBACK_CONFIGURATION", // required
 *   Threshold: Number("double"), // required
 *   TreatMissingData: "notBreaching" || "breaching" || "ignore" || "missing", // required
 *   RequestId: "STRING_VALUE",
 * };
 * const command = new CreateCloudWatchAlarmTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudWatchAlarmTemplateResponse
 * //   Arn: "STRING_VALUE",
 * //   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DatapointsToAlarm: Number("int"),
 * //   Description: "STRING_VALUE",
 * //   EvaluationPeriods: Number("int"),
 * //   GroupId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   MetricName: "STRING_VALUE",
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Period: Number("int"),
 * //   Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TargetResourceType: "CLOUDFRONT_DISTRIBUTION" || "MEDIALIVE_MULTIPLEX" || "MEDIALIVE_CHANNEL" || "MEDIALIVE_INPUT_DEVICE" || "MEDIAPACKAGE_CHANNEL" || "MEDIAPACKAGE_ORIGIN_ENDPOINT" || "MEDIACONNECT_FLOW" || "S3_BUCKET" || "MEDIATAILOR_PLAYBACK_CONFIGURATION",
 * //   Threshold: Number("double"),
 * //   TreatMissingData: "notBreaching" || "breaching" || "ignore" || "missing",
 * // };
 *
 * ```
 *
 * @param CreateCloudWatchAlarmTemplateCommandInput - {@link CreateCloudWatchAlarmTemplateCommandInput}
 * @returns {@link CreateCloudWatchAlarmTemplateCommandOutput}
 * @see {@link CreateCloudWatchAlarmTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCloudWatchAlarmTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateCloudWatchAlarmTemplateCommand extends $Command
  .classBuilder<
    CreateCloudWatchAlarmTemplateCommandInput,
    CreateCloudWatchAlarmTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreateCloudWatchAlarmTemplate", {})
  .n("MediaLiveClient", "CreateCloudWatchAlarmTemplateCommand")
  .sc(CreateCloudWatchAlarmTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudWatchAlarmTemplateRequest;
      output: CreateCloudWatchAlarmTemplateResponse;
    };
    sdk: {
      input: CreateCloudWatchAlarmTemplateCommandInput;
      output: CreateCloudWatchAlarmTemplateCommandOutput;
    };
  };
}
