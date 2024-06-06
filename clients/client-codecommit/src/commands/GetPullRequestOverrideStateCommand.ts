// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPullRequestOverrideStateInput, GetPullRequestOverrideStateOutput } from "../models/models_0";
import { de_GetPullRequestOverrideStateCommand, se_GetPullRequestOverrideStateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPullRequestOverrideStateCommand}.
 */
export interface GetPullRequestOverrideStateCommandInput extends GetPullRequestOverrideStateInput {}
/**
 * @public
 *
 * The output of {@link GetPullRequestOverrideStateCommand}.
 */
export interface GetPullRequestOverrideStateCommandOutput extends GetPullRequestOverrideStateOutput, __MetadataBearer {}

/**
 * <p>Returns information about whether approval rules have been set aside (overridden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestOverrideStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestOverrideStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // GetPullRequestOverrideStateInput
 *   pullRequestId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new GetPullRequestOverrideStateCommand(input);
 * const response = await client.send(command);
 * // { // GetPullRequestOverrideStateOutput
 * //   overridden: true || false,
 * //   overrider: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPullRequestOverrideStateCommandInput - {@link GetPullRequestOverrideStateCommandInput}
 * @returns {@link GetPullRequestOverrideStateCommandOutput}
 * @see {@link GetPullRequestOverrideStateCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestOverrideStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidPullRequestIdException} (client fault)
 *  <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 *
 * @throws {@link InvalidRevisionIdException} (client fault)
 *  <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 *
 * @throws {@link PullRequestDoesNotExistException} (client fault)
 *  <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 *
 * @throws {@link PullRequestIdRequiredException} (client fault)
 *  <p>A pull request ID is required, but none was provided.</p>
 *
 * @throws {@link RevisionIdRequiredException} (client fault)
 *  <p>A revision ID is required, but was not provided.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 * @public
 */
export class GetPullRequestOverrideStateCommand extends $Command
  .classBuilder<
    GetPullRequestOverrideStateCommandInput,
    GetPullRequestOverrideStateCommandOutput,
    CodeCommitClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCommitClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCommit_20150413", "GetPullRequestOverrideState", {})
  .n("CodeCommitClient", "GetPullRequestOverrideStateCommand")
  .f(void 0, void 0)
  .ser(se_GetPullRequestOverrideStateCommand)
  .de(de_GetPullRequestOverrideStateCommand)
  .build() {}
