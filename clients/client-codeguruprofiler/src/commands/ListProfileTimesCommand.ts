// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfileTimesRequest, ListProfileTimesResponse } from "../models/models_0";
import { de_ListProfileTimesCommand, se_ListProfileTimesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the start times of the available aggregated profiles of a profiling group
 *         for an aggregation period within the specified time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfileTimesCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfileTimesCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
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
 *
 * @public
 */
export class ListProfileTimesCommand extends $Command
  .classBuilder<
    ListProfileTimesCommandInput,
    ListProfileTimesCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeGuruProfiler", "ListProfileTimes", {})
  .n("CodeGuruProfilerClient", "ListProfileTimesCommand")
  .f(void 0, void 0)
  .ser(se_ListProfileTimesCommand)
  .de(de_ListProfileTimesCommand)
  .build() {
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
