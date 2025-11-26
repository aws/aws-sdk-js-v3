// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { StartIdMappingJobInput, StartIdMappingJobOutput } from "../models/models_0";
import { StartIdMappingJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartIdMappingJobCommand}.
 */
export interface StartIdMappingJobCommandInput extends StartIdMappingJobInput {}
/**
 * @public
 *
 * The output of {@link StartIdMappingJobCommand}.
 */
export interface StartIdMappingJobCommandOutput extends StartIdMappingJobOutput, __MetadataBearer {}

/**
 * <p>Starts the <code>IdMappingJob</code> of a workflow. The workflow must have previously been created using the <code>CreateIdMappingWorkflow</code> endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, StartIdMappingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, StartIdMappingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // StartIdMappingJobInput
 *   workflowName: "STRING_VALUE", // required
 *   outputSourceConfig: [ // IdMappingJobOutputSourceConfig
 *     { // IdMappingJobOutputSource
 *       roleArn: "STRING_VALUE", // required
 *       outputS3Path: "STRING_VALUE", // required
 *       KMSArn: "STRING_VALUE",
 *     },
 *   ],
 *   jobType: "BATCH" || "INCREMENTAL" || "DELETE_ONLY",
 * };
 * const command = new StartIdMappingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartIdMappingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * //   outputSourceConfig: [ // IdMappingJobOutputSourceConfig
 * //     { // IdMappingJobOutputSource
 * //       roleArn: "STRING_VALUE", // required
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   jobType: "BATCH" || "INCREMENTAL" || "DELETE_ONLY",
 * // };
 *
 * ```
 *
 * @param StartIdMappingJobCommandInput - {@link StartIdMappingJobCommandInput}
 * @returns {@link StartIdMappingJobCommandOutput}
 * @see {@link StartIdMappingJobCommandInput} for command's `input` shape.
 * @see {@link StartIdMappingJobCommandOutput} for command's `response` shape.
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
export class StartIdMappingJobCommand extends $Command
  .classBuilder<
    StartIdMappingJobCommandInput,
    StartIdMappingJobCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "StartIdMappingJob", {})
  .n("EntityResolutionClient", "StartIdMappingJobCommand")
  .sc(StartIdMappingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartIdMappingJobInput;
      output: StartIdMappingJobOutput;
    };
    sdk: {
      input: StartIdMappingJobCommandInput;
      output: StartIdMappingJobCommandOutput;
    };
  };
}
