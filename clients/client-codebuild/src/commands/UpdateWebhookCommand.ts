// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/models_0";
import { de_UpdateWebhookCommand, se_UpdateWebhookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandInput extends UpdateWebhookInput {}
/**
 * @public
 *
 * The output of {@link UpdateWebhookCommand}.
 */
export interface UpdateWebhookCommandOutput extends UpdateWebhookOutput, __MetadataBearer {}

/**
 * <p> Updates the webhook associated with an CodeBuild build project. </p>
 *          <note>
 *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateWebhookCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateWebhookCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // UpdateWebhookInput
 *   projectName: "STRING_VALUE", // required
 *   branchFilter: "STRING_VALUE",
 *   rotateSecret: true || false,
 *   filterGroups: [ // FilterGroups
 *     [ // FilterGroup
 *       { // WebhookFilter
 *         type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE" || "WORKFLOW_NAME" || "TAG_NAME" || "RELEASE_NAME", // required
 *         pattern: "STRING_VALUE", // required
 *         excludeMatchedPattern: true || false,
 *       },
 *     ],
 *   ],
 *   buildType: "BUILD" || "BUILD_BATCH",
 * };
 * const command = new UpdateWebhookCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebhookOutput
 * //   webhook: { // Webhook
 * //     url: "STRING_VALUE",
 * //     payloadUrl: "STRING_VALUE",
 * //     secret: "STRING_VALUE",
 * //     branchFilter: "STRING_VALUE",
 * //     filterGroups: [ // FilterGroups
 * //       [ // FilterGroup
 * //         { // WebhookFilter
 * //           type: "EVENT" || "BASE_REF" || "HEAD_REF" || "ACTOR_ACCOUNT_ID" || "FILE_PATH" || "COMMIT_MESSAGE" || "WORKFLOW_NAME" || "TAG_NAME" || "RELEASE_NAME", // required
 * //           pattern: "STRING_VALUE", // required
 * //           excludeMatchedPattern: true || false,
 * //         },
 * //       ],
 * //     ],
 * //     buildType: "BUILD" || "BUILD_BATCH",
 * //     manualCreation: true || false,
 * //     lastModifiedSecret: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWebhookCommandInput - {@link UpdateWebhookCommandInput}
 * @returns {@link UpdateWebhookCommandOutput}
 * @see {@link UpdateWebhookCommandInput} for command's `input` shape.
 * @see {@link UpdateWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link OAuthProviderException} (client fault)
 *  <p>There was a problem with the underlying OAuth provider.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 * @public
 */
export class UpdateWebhookCommand extends $Command
  .classBuilder<
    UpdateWebhookCommandInput,
    UpdateWebhookCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "UpdateWebhook", {})
  .n("CodeBuildClient", "UpdateWebhookCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWebhookCommand)
  .de(de_UpdateWebhookCommand)
  .build() {}
