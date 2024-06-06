// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateActionTypeInput } from "../models/models_0";
import { de_UpdateActionTypeCommand, se_UpdateActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionTypeCommand}.
 */
export interface UpdateActionTypeCommandInput extends UpdateActionTypeInput {}
/**
 * @public
 *
 * The output of {@link UpdateActionTypeCommand}.
 */
export interface UpdateActionTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an action type that was created with any supported integration model, where
 *             the action type is to be used by customers of the action type provider. Use a JSON file
 *             with the action definition and <code>UpdateActionType</code> to provide the full
 *             structure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdateActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdateActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // UpdateActionTypeInput
 *   actionType: { // ActionTypeDeclaration
 *     description: "STRING_VALUE",
 *     executor: { // ActionTypeExecutor
 *       configuration: { // ExecutorConfiguration
 *         lambdaExecutorConfiguration: { // LambdaExecutorConfiguration
 *           lambdaFunctionArn: "STRING_VALUE", // required
 *         },
 *         jobWorkerExecutorConfiguration: { // JobWorkerExecutorConfiguration
 *           pollingAccounts: [ // PollingAccountList
 *             "STRING_VALUE",
 *           ],
 *           pollingServicePrincipals: [ // PollingServicePrincipalList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       type: "JobWorker" || "Lambda", // required
 *       policyStatementsTemplate: "STRING_VALUE",
 *       jobTimeout: Number("int"),
 *     },
 *     id: { // ActionTypeIdentifier
 *       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval", // required
 *       owner: "STRING_VALUE", // required
 *       provider: "STRING_VALUE", // required
 *       version: "STRING_VALUE", // required
 *     },
 *     inputArtifactDetails: { // ActionTypeArtifactDetails
 *       minimumCount: Number("int"), // required
 *       maximumCount: Number("int"), // required
 *     },
 *     outputArtifactDetails: {
 *       minimumCount: Number("int"), // required
 *       maximumCount: Number("int"), // required
 *     },
 *     permissions: { // ActionTypePermissions
 *       allowedAccounts: [ // AllowedAccounts // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     properties: [ // ActionTypeProperties
 *       { // ActionTypeProperty
 *         name: "STRING_VALUE", // required
 *         optional: true || false, // required
 *         key: true || false, // required
 *         noEcho: true || false, // required
 *         queryable: true || false,
 *         description: "STRING_VALUE",
 *       },
 *     ],
 *     urls: { // ActionTypeUrls
 *       configurationUrl: "STRING_VALUE",
 *       entityUrlTemplate: "STRING_VALUE",
 *       executionUrlTemplate: "STRING_VALUE",
 *       revisionUrlTemplate: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateActionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateActionTypeCommandInput - {@link UpdateActionTypeCommandInput}
 * @returns {@link UpdateActionTypeCommandOutput}
 * @see {@link UpdateActionTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class UpdateActionTypeCommand extends $Command
  .classBuilder<
    UpdateActionTypeCommandInput,
    UpdateActionTypeCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "UpdateActionType", {})
  .n("CodePipelineClient", "UpdateActionTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateActionTypeCommand)
  .de(de_UpdateActionTypeCommand)
  .build() {}
