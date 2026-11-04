// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartIdMappingJobInput, StartIdMappingJobOutput } from "../models/models_0";
import { StartIdMappingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the `IdMappingJob` of a workflow. The workflow must have previously been created using the `CreateIdMappingWorkflow` endpoint.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc.
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class StartIdMappingJobCommand extends command<StartIdMappingJobCommandInput, StartIdMappingJobCommandOutput>(
  _ep0,
  _mw0,
  "StartIdMappingJob",
  StartIdMappingJob$
) {
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
