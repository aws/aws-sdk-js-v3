// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfileTimesRequest, ListProfileTimesResponse } from "../models/models_0";
import { ListProfileTimes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfileTimesCommand}.
 */
export interface ListProfileTimesCommandInput extends ListProfileTimesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileTimesCommand}.
 */
export interface ListProfileTimesCommandOutput extends ListProfileTimesResponse, __MetadataBearer {}

/**
 * Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfileTimesCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfileTimesCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ListProfileTimesRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   period: "STRING_VALUE", // required
 *   orderBy: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProfileTimesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileTimesResponse
 * //   profileTimes: [ // ProfileTimes // required
 * //     { // ProfileTime
 * //       start: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileTimesCommandInput - {@link ListProfileTimesCommandInput}
 * @returns {@link ListProfileTimesCommandOutput}
 * @see {@link ListProfileTimesCommandInput} for command's `input` shape.
 * @see {@link ListProfileTimesCommandOutput} for command's `response` shape.
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
export class ListProfileTimesCommand extends command<ListProfileTimesCommandInput, ListProfileTimesCommandOutput>(
  _ep0,
  _mw0,
  "ListProfileTimes",
  ListProfileTimes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileTimesRequest;
      output: ListProfileTimesResponse;
    };
    sdk: {
      input: ListProfileTimesCommandInput;
      output: ListProfileTimesCommandOutput;
    };
  };
}
