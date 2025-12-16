// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import type { StartJobsQueryRequest, StartJobsQueryResponse } from "../models/models_0";
import { StartJobsQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartJobsQueryCommand}.
 */
export interface StartJobsQueryCommandInput extends StartJobsQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartJobsQueryCommand}.
 */
export interface StartJobsQueryCommandOutput extends StartJobsQueryResponse, __MetadataBearer {}

/**
 * Start an asynchronous jobs query using the provided filters. To receive the list of jobs that match your query, call the GetJobsQueryResults API using the query ID returned by this API.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, StartJobsQueryCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, StartJobsQueryCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // StartJobsQueryRequest
 *   FilterList: [ // __listOfJobsQueryFilter
 *     { // JobsQueryFilter
 *       Key: "queue" || "status" || "fileInput" || "jobEngineVersionRequested" || "jobEngineVersionUsed" || "audioCodec" || "videoCodec",
 *       Values: [ // __listOf__stringMax100
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Order: "ASCENDING" || "DESCENDING",
 * };
 * const command = new StartJobsQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartJobsQueryResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartJobsQueryCommandInput - {@link StartJobsQueryCommandInput}
 * @returns {@link StartJobsQueryCommandOutput}
 * @see {@link StartJobsQueryCommandInput} for command's `input` shape.
 * @see {@link StartJobsQueryCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You attempted to create more resources than the service allows based on service quotas.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 *
 * @public
 */
export class StartJobsQueryCommand extends $Command
  .classBuilder<
    StartJobsQueryCommandInput,
    StartJobsQueryCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "StartJobsQuery", {})
  .n("MediaConvertClient", "StartJobsQueryCommand")
  .sc(StartJobsQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobsQueryRequest;
      output: StartJobsQueryResponse;
    };
    sdk: {
      input: StartJobsQueryCommandInput;
      output: StartJobsQueryCommandOutput;
    };
  };
}
