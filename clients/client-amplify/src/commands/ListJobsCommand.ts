// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobsRequest, ListJobsResult } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResult, __MetadataBearer {}

/**
 * <p> Lists the jobs for a branch of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListJobsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListJobsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // ListJobsRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResult
 * //   jobSummaries: [ // JobSummaries // required
 * //     { // JobSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       commitId: "STRING_VALUE", // required
 * //       commitMessage: "STRING_VALUE", // required
 * //       commitTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "CREATED" || "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //       sourceUrl: "STRING_VALUE",
 * //       sourceUrlType: "ZIP" || "BUCKET_PREFIX",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "ListJobs", {})
  .n("AmplifyClient", "ListJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobsCommand)
  .de(de_ListJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResult;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}
