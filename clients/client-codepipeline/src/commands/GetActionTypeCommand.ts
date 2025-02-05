// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetActionTypeInput, GetActionTypeOutput } from "../models/models_0";
import { de_GetActionTypeCommand, se_GetActionTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetActionTypeCommand}.
 */
export interface GetActionTypeCommandInput extends GetActionTypeInput {}
/**
 * @public
 *
 * The output of {@link GetActionTypeCommand}.
 */
export interface GetActionTypeCommandOutput extends GetActionTypeOutput, __MetadataBearer {}

/**
 * <p>Returns information about an action type created for an external provider, where the
 *             action is to be used by customers of the external provider. The action can be created
 *             with any supported integration model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // GetActionTypeInput
 *   category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *   owner: "STRING_VALUE", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new GetActionTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetActionTypeOutput
 * //   actionType: { // ActionTypeDeclaration
 * //     description: "STRING_VALUE",
 * //     executor: { // ActionTypeExecutor
 * //       configuration: { // ExecutorConfiguration
 * //         lambdaExecutorConfiguration: { // LambdaExecutorConfiguration
 * //           lambdaFunctionArn: "STRING_VALUE", // required
 * //         },
 * //         jobWorkerExecutorConfiguration: { // JobWorkerExecutorConfiguration
 * //           pollingAccounts: [ // PollingAccountList
 * //             "STRING_VALUE",
 * //           ],
 * //           pollingServicePrincipals: [ // PollingServicePrincipalList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       type: "JobWorker" || "Lambda", // required
 * //       policyStatementsTemplate: "STRING_VALUE",
 * //       jobTimeout: Number("int"),
 * //     },
 * //     id: { // ActionTypeIdentifier
 * //       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //       owner: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     inputArtifactDetails: { // ActionTypeArtifactDetails
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     outputArtifactDetails: {
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     permissions: { // ActionTypePermissions
 * //       allowedAccounts: [ // AllowedAccounts // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     properties: [ // ActionTypeProperties
 * //       { // ActionTypeProperty
 * //         name: "STRING_VALUE", // required
 * //         optional: true || false, // required
 * //         key: true || false, // required
 * //         noEcho: true || false, // required
 * //         queryable: true || false,
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     urls: { // ActionTypeUrls
 * //       configurationUrl: "STRING_VALUE",
 * //       entityUrlTemplate: "STRING_VALUE",
 * //       executionUrlTemplate: "STRING_VALUE",
 * //       revisionUrlTemplate: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetActionTypeCommandInput - {@link GetActionTypeCommandInput}
 * @returns {@link GetActionTypeCommandOutput}
 * @see {@link GetActionTypeCommandInput} for command's `input` shape.
 * @see {@link GetActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class GetActionTypeCommand extends $Command
  .classBuilder<
    GetActionTypeCommandInput,
    GetActionTypeCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "GetActionType", {})
  .n("CodePipelineClient", "GetActionTypeCommand")
  .f(void 0, void 0)
  .ser(se_GetActionTypeCommand)
  .de(de_GetActionTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActionTypeInput;
      output: GetActionTypeOutput;
    };
    sdk: {
      input: GetActionTypeCommandInput;
      output: GetActionTypeCommandOutput;
    };
  };
}
