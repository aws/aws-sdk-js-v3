// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateSourceControlFromJobRequest, UpdateSourceControlFromJobResponse } from "../models/models_2";
import { de_UpdateSourceControlFromJobCommand, se_UpdateSourceControlFromJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p>
 *          <p>This API supports optional parameters which take in the repository information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateSourceControlFromJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateSourceControlFromJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class UpdateSourceControlFromJobCommand extends $Command
  .classBuilder<
    UpdateSourceControlFromJobCommandInput,
    UpdateSourceControlFromJobCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateSourceControlFromJob", {})
  .n("GlueClient", "UpdateSourceControlFromJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSourceControlFromJobCommand)
  .de(de_UpdateSourceControlFromJobCommand)
  .build() {}
