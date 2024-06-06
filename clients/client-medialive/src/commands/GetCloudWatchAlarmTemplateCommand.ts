// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { GetCloudWatchAlarmTemplateRequest, GetCloudWatchAlarmTemplateResponse } from "../models/models_2";
import { de_GetCloudWatchAlarmTemplateCommand, se_GetCloudWatchAlarmTemplateCommand } from "../protocols/Aws_restJson1";

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
 * //   TargetResourceType: "CLOUDFRONT_DISTRIBUTION" || "MEDIALIVE_MULTIPLEX" || "MEDIALIVE_CHANNEL" || "MEDIALIVE_INPUT_DEVICE" || "MEDIAPACKAGE_CHANNEL" || "MEDIAPACKAGE_ORIGIN_ENDPOINT" || "MEDIACONNECT_FLOW" || "S3_BUCKET",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "GetCloudWatchAlarmTemplate", {})
  .n("MediaLiveClient", "GetCloudWatchAlarmTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetCloudWatchAlarmTemplateCommand)
  .de(de_GetCloudWatchAlarmTemplateCommand)
  .build() {}
