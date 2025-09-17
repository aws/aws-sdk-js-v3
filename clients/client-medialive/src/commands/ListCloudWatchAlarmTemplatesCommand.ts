// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListCloudWatchAlarmTemplatesRequest, ListCloudWatchAlarmTemplatesResponse } from "../models/models_2";
import {
  de_ListCloudWatchAlarmTemplatesCommand,
  se_ListCloudWatchAlarmTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudWatchAlarmTemplatesCommand}.
 */
export interface ListCloudWatchAlarmTemplatesCommandInput extends ListCloudWatchAlarmTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudWatchAlarmTemplatesCommand}.
 */
export interface ListCloudWatchAlarmTemplatesCommandOutput
  extends ListCloudWatchAlarmTemplatesResponse,
    __MetadataBearer {}

/**
 * Lists cloudwatch alarm templates.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListCloudWatchAlarmTemplatesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListCloudWatchAlarmTemplatesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListCloudWatchAlarmTemplatesRequest
 *   GroupIdentifier: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Scope: "STRING_VALUE",
 *   SignalMapIdentifier: "STRING_VALUE",
 * };
 * const command = new ListCloudWatchAlarmTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudWatchAlarmTemplatesResponse
 * //   CloudWatchAlarmTemplates: [ // __listOfCloudWatchAlarmTemplateSummary
 * //     { // CloudWatchAlarmTemplateSummary
 * //       Arn: "STRING_VALUE", // required
 * //       ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       DatapointsToAlarm: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       EvaluationPeriods: Number("int"), // required
 * //       GroupId: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       MetricName: "STRING_VALUE", // required
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Period: Number("int"), // required
 * //       Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TargetResourceType: "CLOUDFRONT_DISTRIBUTION" || "MEDIALIVE_MULTIPLEX" || "MEDIALIVE_CHANNEL" || "MEDIALIVE_INPUT_DEVICE" || "MEDIAPACKAGE_CHANNEL" || "MEDIAPACKAGE_ORIGIN_ENDPOINT" || "MEDIACONNECT_FLOW" || "S3_BUCKET" || "MEDIATAILOR_PLAYBACK_CONFIGURATION", // required
 * //       Threshold: Number("double"), // required
 * //       TreatMissingData: "notBreaching" || "breaching" || "ignore" || "missing", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCloudWatchAlarmTemplatesCommandInput - {@link ListCloudWatchAlarmTemplatesCommandInput}
 * @returns {@link ListCloudWatchAlarmTemplatesCommandOutput}
 * @see {@link ListCloudWatchAlarmTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCloudWatchAlarmTemplatesCommandOutput} for command's `response` shape.
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
export class ListCloudWatchAlarmTemplatesCommand extends $Command
  .classBuilder<
    ListCloudWatchAlarmTemplatesCommandInput,
    ListCloudWatchAlarmTemplatesCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "ListCloudWatchAlarmTemplates", {})
  .n("MediaLiveClient", "ListCloudWatchAlarmTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListCloudWatchAlarmTemplatesCommand)
  .de(de_ListCloudWatchAlarmTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudWatchAlarmTemplatesRequest;
      output: ListCloudWatchAlarmTemplatesResponse;
    };
    sdk: {
      input: ListCloudWatchAlarmTemplatesCommandInput;
      output: ListCloudWatchAlarmTemplatesCommandOutput;
    };
  };
}
