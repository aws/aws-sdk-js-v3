// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { StartMatchingJobInput, StartMatchingJobOutput } from "../models/models_0";
import { StartMatchingJob } from "../schemas/schemas_7_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMatchingJobCommand}.
 */
export interface StartMatchingJobCommandInput extends StartMatchingJobInput {}
/**
 * @public
 *
 * The output of {@link StartMatchingJobCommand}.
 */
export interface StartMatchingJobCommandOutput extends StartMatchingJobOutput, __MetadataBearer {}

/**
 * <p>Starts the <code>MatchingJob</code> of a workflow. The workflow must have previously been created using the <code>CreateMatchingWorkflow</code> endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, StartMatchingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, StartMatchingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // StartMatchingJobInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new StartMatchingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMatchingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartMatchingJobCommandInput - {@link StartMatchingJobCommandInput}
 * @returns {@link StartMatchingJobCommandOutput}
 * @see {@link StartMatchingJobCommandInput} for command's `input` shape.
 * @see {@link StartMatchingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded. </p>
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
export class StartMatchingJobCommand extends $Command
  .classBuilder<
    StartMatchingJobCommandInput,
    StartMatchingJobCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "StartMatchingJob", {})
  .n("EntityResolutionClient", "StartMatchingJobCommand")
  .sc(StartMatchingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMatchingJobInput;
      output: StartMatchingJobOutput;
    };
    sdk: {
      input: StartMatchingJobCommandInput;
      output: StartMatchingJobCommandOutput;
    };
  };
}
