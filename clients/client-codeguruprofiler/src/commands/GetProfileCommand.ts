// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import { GetProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles.
 *
 *
 *
 * > **Note:** Because aggregated profiles expire over time `GetProfile` is not idempotent.
 *
 *
 *
 * Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: `startTime`, `endTime`, `period`. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only `period`, the latest aggregated profile is returned.
 *
 *
 *
 * Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see [`AggregatedProfileTime`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html). The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler.
 *
 *
 *
 * - If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
 * - If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
 * - If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
 *
 *
 *
 * There are two use cases for calling `GetProfile`.
 *
 * 1. If you want to return an aggregated profile that already exists, use [`ListProfileTimes`](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html) to view the time ranges of existing aggregated profiles. Use them in a `GetProfile` request to return a specific, existing aggregated profile.
 * 2. If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile.
 *
 *    If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
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
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link CodeGuruProfilerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruProfiler service.
 *
 * @public
 */
export class GetProfileCommand extends command<GetProfileCommandInput, GetProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetProfile",
  GetProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileRequest;
      output: GetProfileResponse;
    };
    sdk: {
      input: GetProfileCommandInput;
      output: GetProfileCommandOutput;
    };
  };
}
