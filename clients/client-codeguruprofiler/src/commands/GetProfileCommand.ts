// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import { de_GetProfileCommand, se_GetProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileCommand}.
 */
export interface GetProfileCommandInput extends GetProfileRequest {}
/**
 * @public
 */
export type GetProfileCommandOutputType = Omit<GetProfileResponse, "profile"> & {
  profile: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetProfileCommand}.
 */
export interface GetProfileCommandOutput extends GetProfileCommandOutputType, __MetadataBearer {}

/**
 * <p>
 *          Gets the aggregated profile of a profiling group for a specified time range.
 *          Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
 *          into aggregated profiles.
 *      </p>
 *
 *          <note>
 *             <p>
 *             Because aggregated profiles expire over time <code>GetProfile</code> is not idempotent.
 *          </p>
 *          </note>
 *
 *          <p>
 *          Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>startTime</code>,
 *          <code>endTime</code>, <code>period</code>. The maximum time range allowed is 7 days. If you specify all 3 parameters,
 *          an exception is thrown. If you specify only <code>period</code>, the latest aggregated profile is returned.
 *       </p>
 *
 *          <p>
 *          Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
 *          UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
 *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
 *                <code>AggregatedProfileTime</code>
 *             </a>. The aggregated profile's aggregation period determines how long
 *          it is retained by CodeGuru Profiler.
 *       </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
 *             </p>
 *             </li>
 *          </ul>
 *
 *          <p>There are two use cases for calling <code>GetProfile</code>.</p>
 *          <ol>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile that already exists, use
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html">
 *                      <code>ListProfileTimes</code>
 *                   </a> to
 *                view the time ranges of existing aggregated profiles. Use them in a <code>GetProfile</code> request to return a specific,
 *                existing aggregated profile.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
 *                then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
 *                range and return them as one aggregated profile.
 *             </p>
 *
 *                <p> If aggregated profiles do not exist for the full time range requested, then
 *                aggregated profiles for a smaller time range are returned. For example, if the
 *                requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
 *                from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. </p>
 *
 *
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // GetProfileRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   period: "STRING_VALUE",
 *   endTime: new Date("TIMESTAMP"),
 *   maxDepth: Number("int"),
 *   accept: "STRING_VALUE",
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResponse
 * //   profile: new Uint8Array(), // required
 * //   contentType: "STRING_VALUE", // required
 * //   contentEncoding: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProfileCommandInput - {@link GetProfileCommandInput}
 * @returns {@link GetProfileCommandOutput}
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 * @public
 */
export class GetProfileCommand extends $Command
  .classBuilder<
    GetProfileCommandInput,
    GetProfileCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeGuruProfiler", "GetProfile", {})
  .n("CodeGuruProfilerClient", "GetProfileCommand")
  .f(void 0, void 0)
  .ser(se_GetProfileCommand)
  .de(de_GetProfileCommand)
  .build() {}
