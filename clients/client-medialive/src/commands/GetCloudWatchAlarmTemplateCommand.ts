// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { GetCloudWatchAlarmTemplateRequest, GetCloudWatchAlarmTemplateResponse } from "../models/models_2";
import { GetCloudWatchAlarmTemplate } from "../schemas/schemas_14_CloudWatchAlarm";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudWatchAlarmTemplateCommand}.
 */
export interface GetCloudWatchAlarmTemplateCommandInput extends GetCloudWatchAlarmTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudWatchAlarmTemplateCommand}.
 */
export interface GetCloudWatchAlarmTemplateCommandOutput extends GetCloudWatchAlarmTemplateResponse, __MetadataBearer {}

/**
 * Retrieves the specified cloudwatch alarm template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, GetCloudWatchAlarmTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, GetCloudWatchAlarmTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // GetCloudWatchAlarmTemplateRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCloudWatchAlarmTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudWatchAlarmTemplateResponse
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
 * @param GetCloudWatchAlarmTemplateCommandInput - {@link GetCloudWatchAlarmTemplateCommandInput}
 * @returns {@link GetCloudWatchAlarmTemplateCommandOutput}
 * @see {@link GetCloudWatchAlarmTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCloudWatchAlarmTemplateCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
export class GetCloudWatchAlarmTemplateCommand extends $Command
  .classBuilder<
    GetCloudWatchAlarmTemplateCommandInput,
    GetCloudWatchAlarmTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "GetCloudWatchAlarmTemplate", {})
  .n("MediaLiveClient", "GetCloudWatchAlarmTemplateCommand")
  .sc(GetCloudWatchAlarmTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudWatchAlarmTemplateRequest;
      output: GetCloudWatchAlarmTemplateResponse;
    };
    sdk: {
      input: GetCloudWatchAlarmTemplateCommandInput;
      output: GetCloudWatchAlarmTemplateCommandOutput;
    };
  };
}
