// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSendStatisticsResponse } from "../models/models_0";
import { de_GetSendStatisticsCommand, se_GetSendStatisticsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandOutput extends GetSendStatisticsResponse, __MetadataBearer {}

/**
 * <p>Provides sending statistics for the current Amazon Web Services Region. The result is a list of data
 *             points, representing the last two weeks of sending activity. Each data point in the list
 *             contains statistics for a 15-minute period of time.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendStatisticsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendStatisticsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetSendStatisticsResponse
 * //   SendDataPoints: [ // SendDataPointList
 * //     { // SendDataPoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       DeliveryAttempts: Number("long"),
 * //       Bounces: Number("long"),
 * //       Complaints: Number("long"),
 * //       Rejects: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSendStatisticsCommandInput - {@link GetSendStatisticsCommandInput}
 * @returns {@link GetSendStatisticsCommandOutput}
 * @see {@link GetSendStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetSendStatisticsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example GetSendStatistics
 * ```javascript
 * // The following example returns Amazon SES sending statistics:
 * const input = {};
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SendDataPoints": [
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 5,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T22:43:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 3,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T23:13:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 1,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T21:13:00Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: getsendstatistics-1469047741329
 * ```
 *
 */
export class GetSendStatisticsCommand extends $Command
  .classBuilder<
    GetSendStatisticsCommandInput,
    GetSendStatisticsCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "GetSendStatistics", {})
  .n("SESClient", "GetSendStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetSendStatisticsCommand)
  .de(de_GetSendStatisticsCommand)
  .build() {}
