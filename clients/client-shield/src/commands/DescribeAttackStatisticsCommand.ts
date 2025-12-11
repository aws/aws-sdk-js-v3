// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAttackStatisticsRequest, DescribeAttackStatisticsResponse } from "../models/models_0";
import { DescribeAttackStatistics } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttackStatisticsCommand}.
 */
export interface DescribeAttackStatisticsCommandInput extends DescribeAttackStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttackStatisticsCommand}.
 */
export interface DescribeAttackStatisticsCommandOutput extends DescribeAttackStatisticsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
 *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
 *          <p>The time range indicates the period covered by the attack statistics data items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackStatisticsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackStatisticsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DescribeAttackStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttackStatisticsResponse
 * //   TimeRange: { // TimeRange
 * //     FromInclusive: new Date("TIMESTAMP"),
 * //     ToExclusive: new Date("TIMESTAMP"),
 * //   },
 * //   DataItems: [ // AttackStatisticsDataList // required
 * //     { // AttackStatisticsDataItem
 * //       AttackVolume: { // AttackVolume
 * //         BitsPerSecond: { // AttackVolumeStatistics
 * //           Max: Number("double"), // required
 * //         },
 * //         PacketsPerSecond: {
 * //           Max: Number("double"), // required
 * //         },
 * //         RequestsPerSecond: {
 * //           Max: Number("double"), // required
 * //         },
 * //       },
 * //       AttackCount: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAttackStatisticsCommandInput - {@link DescribeAttackStatisticsCommandInput}
 * @returns {@link DescribeAttackStatisticsCommandOutput}
 * @see {@link DescribeAttackStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackStatisticsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class DescribeAttackStatisticsCommand extends $Command
  .classBuilder<
    DescribeAttackStatisticsCommandInput,
    DescribeAttackStatisticsCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "DescribeAttackStatistics", {})
  .n("ShieldClient", "DescribeAttackStatisticsCommand")
  .sc(DescribeAttackStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAttackStatisticsResponse;
    };
    sdk: {
      input: DescribeAttackStatisticsCommandInput;
      output: DescribeAttackStatisticsCommandOutput;
    };
  };
}
