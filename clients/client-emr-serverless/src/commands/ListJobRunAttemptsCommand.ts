// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobRunAttemptsRequest, ListJobRunAttemptsResponse } from "../models/models_0";
import { ListJobRunAttempts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunAttemptsCommand}.
 */
export interface ListJobRunAttemptsCommandInput extends ListJobRunAttemptsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunAttemptsCommand}.
 */
export interface ListJobRunAttemptsCommandOutput extends ListJobRunAttemptsResponse, __MetadataBearer {}

/**
 * <p>Lists all attempt of a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, ListJobRunAttemptsCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, ListJobRunAttemptsCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // ListJobRunAttemptsRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobRunAttemptsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunAttemptsResponse
 * //   jobRunAttempts: [ // JobRunAttempts // required
 * //     { // JobRunAttemptSummary
 * //       applicationId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       mode: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       jobCreatedAt: new Date("TIMESTAMP"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       executionRole: "STRING_VALUE", // required
 * //       state: "STRING_VALUE", // required
 * //       stateDetails: "STRING_VALUE", // required
 * //       releaseLabel: "STRING_VALUE", // required
 * //       type: "STRING_VALUE",
 * //       attempt: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunAttemptsCommandInput - {@link ListJobRunAttemptsCommandInput}
 * @returns {@link ListJobRunAttemptsCommandOutput}
 * @see {@link ListJobRunAttemptsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunAttemptsCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class ListJobRunAttemptsCommand extends $Command
  .classBuilder<
    ListJobRunAttemptsCommandInput,
    ListJobRunAttemptsCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "ListJobRunAttempts", {})
  .n("EMRServerlessClient", "ListJobRunAttemptsCommand")
  .sc(ListJobRunAttempts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunAttemptsRequest;
      output: ListJobRunAttemptsResponse;
    };
    sdk: {
      input: ListJobRunAttemptsCommandInput;
      output: ListJobRunAttemptsCommandOutput;
    };
  };
}
