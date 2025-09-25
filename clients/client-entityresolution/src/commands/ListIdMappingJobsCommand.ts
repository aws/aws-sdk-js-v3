// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { ListIdMappingJobsInput, ListIdMappingJobsOutput } from "../models/models_0";
import { ListIdMappingJobs } from "../schemas/schemas_12_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdMappingJobsCommand}.
 */
export interface ListIdMappingJobsCommandInput extends ListIdMappingJobsInput {}
/**
 * @public
 *
 * The output of {@link ListIdMappingJobsCommand}.
 */
export interface ListIdMappingJobsCommandOutput extends ListIdMappingJobsOutput, __MetadataBearer {}

/**
 * <p>Lists all ID mapping jobs for a given workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListIdMappingJobsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListIdMappingJobsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListIdMappingJobsInput
 *   workflowName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdMappingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdMappingJobsOutput
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
 * @param ListIdMappingJobsCommandInput - {@link ListIdMappingJobsCommandInput}
 * @returns {@link ListIdMappingJobsCommandOutput}
 * @see {@link ListIdMappingJobsCommandInput} for command's `input` shape.
 * @see {@link ListIdMappingJobsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
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
export class ListIdMappingJobsCommand extends $Command
  .classBuilder<
    ListIdMappingJobsCommandInput,
    ListIdMappingJobsCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "ListIdMappingJobs", {})
  .n("EntityResolutionClient", "ListIdMappingJobsCommand")
  .sc(ListIdMappingJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdMappingJobsInput;
      output: ListIdMappingJobsOutput;
    };
    sdk: {
      input: ListIdMappingJobsCommandInput;
      output: ListIdMappingJobsCommandOutput;
    };
  };
}
