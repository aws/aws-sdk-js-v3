// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobRunAttemptsRequest, ListJobRunAttemptsResponse } from "../models/models_0";
import { ListJobRunAttempts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all attempt of a job run.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link EMRServerlessServiceException}
 *
 * Base exception class for all service exceptions from EMRServerless service.
 *
 * @public
 */
export class ListJobRunAttemptsCommand extends command<ListJobRunAttemptsCommandInput, ListJobRunAttemptsCommandOutput>(
  _ep0,
  _mw0,
  "ListJobRunAttempts",
  ListJobRunAttempts$
) {
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
