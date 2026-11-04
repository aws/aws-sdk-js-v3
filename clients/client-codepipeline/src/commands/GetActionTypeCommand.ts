// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetActionTypeInput, GetActionTypeOutput } from "../models/models_0";
import { GetActionType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
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
 *
 * The specified action type cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class GetActionTypeCommand extends command<GetActionTypeCommandInput, GetActionTypeCommandOutput>(
  _ep0,
  _mw0,
  "GetActionType",
  GetActionType$
) {
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
