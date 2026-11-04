// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSourceControlFromJobRequest, UpdateSourceControlFromJobResponse } from "../models/models_3";
import { UpdateSourceControlFromJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSourceControlFromJobCommand}.
 */
export interface UpdateSourceControlFromJobCommandInput extends UpdateSourceControlFromJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSourceControlFromJobCommand}.
 */
export interface UpdateSourceControlFromJobCommandOutput extends UpdateSourceControlFromJobResponse, __MetadataBearer {}

/**
 * Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.
 *
 * This API supports optional parameters which take in the repository information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateSourceControlFromJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateSourceControlFromJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateSourceControlFromJobRequest
 *   JobName: "STRING_VALUE",
 *   Provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "AWS_CODE_COMMIT",
 *   RepositoryName: "STRING_VALUE",
 *   RepositoryOwner: "STRING_VALUE",
 *   BranchName: "STRING_VALUE",
 *   Folder: "STRING_VALUE",
 *   CommitId: "STRING_VALUE",
 *   AuthStrategy: "PERSONAL_ACCESS_TOKEN" || "AWS_SECRETS_MANAGER",
 *   AuthToken: "STRING_VALUE",
 * };
 * const command = new UpdateSourceControlFromJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSourceControlFromJobResponse
 * //   JobName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSourceControlFromJobCommandInput - {@link UpdateSourceControlFromJobCommandInput}
 * @returns {@link UpdateSourceControlFromJobCommandOutput}
 * @see {@link UpdateSourceControlFromJobCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceControlFromJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateSourceControlFromJobCommand extends command<UpdateSourceControlFromJobCommandInput, UpdateSourceControlFromJobCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSourceControlFromJob",
  UpdateSourceControlFromJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSourceControlFromJobRequest;
      output: UpdateSourceControlFromJobResponse;
    };
    sdk: {
      input: UpdateSourceControlFromJobCommandInput;
      output: UpdateSourceControlFromJobCommandOutput;
    };
  };
}
