// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import { ListJobRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {}

/**
 * <p>Lists job runs based on a set of parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, ListJobRunsCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, ListJobRunsCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // ListJobRunsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   createdAtAfter: new Date("TIMESTAMP"),
 *   createdAtBefore: new Date("TIMESTAMP"),
 *   states: [ // JobRunStateSet
 *     "STRING_VALUE",
 *   ],
 *   mode: "STRING_VALUE",
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsResponse
 * //   jobRuns: [ // JobRuns // required
 * //     { // JobRunSummary
 * //       applicationId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       mode: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       executionRole: "STRING_VALUE", // required
 * //       state: "STRING_VALUE", // required
 * //       stateDetails: "STRING_VALUE", // required
 * //       releaseLabel: "STRING_VALUE", // required
 * //       type: "STRING_VALUE",
 * //       attempt: Number("int"),
 * //       attemptCreatedAt: new Date("TIMESTAMP"),
 * //       attemptUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class ListJobRunsCommand extends $Command
  .classBuilder<
    ListJobRunsCommandInput,
    ListJobRunsCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "ListJobRuns", {})
  .n("EMRServerlessClient", "ListJobRunsCommand")
  .sc(ListJobRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunsRequest;
      output: ListJobRunsResponse;
    };
    sdk: {
      input: ListJobRunsCommandInput;
      output: ListJobRunsCommandOutput;
    };
  };
}
