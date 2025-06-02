// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { ListMatchingJobsInput, ListMatchingJobsOutput } from "../models/models_0";
import { de_ListMatchingJobsCommand, se_ListMatchingJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMatchingJobsCommand}.
 */
export interface ListMatchingJobsCommandInput extends ListMatchingJobsInput {}
/**
 * @public
 *
 * The output of {@link ListMatchingJobsCommand}.
 */
export interface ListMatchingJobsCommandOutput extends ListMatchingJobsOutput, __MetadataBearer {}

/**
 * <p>Lists all jobs for a given workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListMatchingJobsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListMatchingJobsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // ListMatchingJobsInput
 *   workflowName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMatchingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMatchingJobsOutput
 * //   jobs: [ // JobList
 * //     { // JobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMatchingJobsCommandInput - {@link ListMatchingJobsCommandInput}
 * @returns {@link ListMatchingJobsCommandOutput}
 * @see {@link ListMatchingJobsCommandInput} for command's `input` shape.
 * @see {@link ListMatchingJobsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class ListMatchingJobsCommand extends $Command
  .classBuilder<
    ListMatchingJobsCommandInput,
    ListMatchingJobsCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "ListMatchingJobs", {})
  .n("EntityResolutionClient", "ListMatchingJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListMatchingJobsCommand)
  .de(de_ListMatchingJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMatchingJobsInput;
      output: ListMatchingJobsOutput;
    };
    sdk: {
      input: ListMatchingJobsCommandInput;
      output: ListMatchingJobsCommandOutput;
    };
  };
}
