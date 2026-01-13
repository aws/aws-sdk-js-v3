// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { UpdateCloudWatchAlarmTemplateRequest, UpdateCloudWatchAlarmTemplateResponse } from "../models/models_1";
import { UpdateCloudWatchAlarmTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCloudWatchAlarmTemplateCommand}.
 */
export interface UpdateCloudWatchAlarmTemplateCommandInput extends UpdateCloudWatchAlarmTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloudWatchAlarmTemplateCommand}.
 */
export interface UpdateCloudWatchAlarmTemplateCommandOutput extends UpdateCloudWatchAlarmTemplateResponse, __MetadataBearer {}

/**
 * Updates the specified cloudwatch alarm template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateCloudWatchAlarmTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateCloudWatchAlarmTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateCloudWatchAlarmTemplateRequest
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 *   DatapointsToAlarm: Number("int"),
 *   Description: "STRING_VALUE",
 *   EvaluationPeriods: Number("int"),
 *   GroupIdentifier: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Period: Number("int"),
 *   Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 *   TargetResourceType: "CLOUDFRONT_DISTRIBUTION" || "MEDIALIVE_MULTIPLEX" || "MEDIALIVE_CHANNEL" || "MEDIALIVE_INPUT_DEVICE" || "MEDIAPACKAGE_CHANNEL" || "MEDIAPACKAGE_ORIGIN_ENDPOINT" || "MEDIACONNECT_FLOW" || "S3_BUCKET" || "MEDIATAILOR_PLAYBACK_CONFIGURATION",
 *   Threshold: Number("double"),
 *   TreatMissingData: "notBreaching" || "breaching" || "ignore" || "missing",
 * };
 * const command = new UpdateCloudWatchAlarmTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudWatchAlarmTemplateResponse
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
 * @param UpdateCloudWatchAlarmTemplateCommandInput - {@link UpdateCloudWatchAlarmTemplateCommandInput}
 * @returns {@link UpdateCloudWatchAlarmTemplateCommandOutput}
 * @see {@link UpdateCloudWatchAlarmTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudWatchAlarmTemplateCommandOutput} for command's `response` shape.
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
export class UpdateCloudWatchAlarmTemplateCommand extends $Command
  .classBuilder<
    UpdateCloudWatchAlarmTemplateCommandInput,
    UpdateCloudWatchAlarmTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateCloudWatchAlarmTemplate", {})
  .n("MediaLiveClient", "UpdateCloudWatchAlarmTemplateCommand")
  .sc(UpdateCloudWatchAlarmTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudWatchAlarmTemplateRequest;
      output: UpdateCloudWatchAlarmTemplateResponse;
    };
    sdk: {
      input: UpdateCloudWatchAlarmTemplateCommandInput;
      output: UpdateCloudWatchAlarmTemplateCommandOutput;
    };
  };
}
