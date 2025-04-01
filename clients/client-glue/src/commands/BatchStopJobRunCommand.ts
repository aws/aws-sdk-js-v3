// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchStopJobRunRequest } from "../models/models_0";
import { BatchStopJobRunResponse } from "../models/models_1";
import { de_BatchStopJobRunCommand, se_BatchStopJobRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStopJobRunCommand}.
 */
export interface BatchStopJobRunCommandInput extends BatchStopJobRunRequest {}
/**
 * @public
 *
 * The output of {@link BatchStopJobRunCommand}.
 */
export interface BatchStopJobRunCommandOutput extends BatchStopJobRunResponse, __MetadataBearer {}

/**
 * <p>Stops one or more job runs for a specified job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchStopJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchStopJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchStopJobRunRequest
 *   JobName: "STRING_VALUE", // required
 *   JobRunIds: [ // BatchStopJobRunJobRunIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchStopJobRunCommand(input);
 * const response = await client.send(command);
 * // { // BatchStopJobRunResponse
 * //   SuccessfulSubmissions: [ // BatchStopJobRunSuccessfulSubmissionList
 * //     { // BatchStopJobRunSuccessfulSubmission
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Errors: [ // BatchStopJobRunErrorList
 * //     { // BatchStopJobRunError
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //       ErrorDetail: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStopJobRunCommandInput - {@link BatchStopJobRunCommandInput}
 * @returns {@link BatchStopJobRunCommandOutput}
 * @see {@link BatchStopJobRunCommandInput} for command's `input` shape.
 * @see {@link BatchStopJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchStopJobRunCommand extends $Command
  .classBuilder<
    BatchStopJobRunCommandInput,
    BatchStopJobRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchStopJobRun", {})
  .n("GlueClient", "BatchStopJobRunCommand")
  .f(void 0, void 0)
  .ser(se_BatchStopJobRunCommand)
  .de(de_BatchStopJobRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStopJobRunRequest;
      output: BatchStopJobRunResponse;
    };
    sdk: {
      input: BatchStopJobRunCommandInput;
      output: BatchStopJobRunCommandOutput;
    };
  };
}
