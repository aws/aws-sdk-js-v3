// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBranchRequest, DeleteBranchResult, DeleteBranchResultFilterSensitiveLog } from "../models/models_0";
import { de_DeleteBranchCommand, se_DeleteBranchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBranchCommand}.
 */
export interface DeleteBranchCommandInput extends DeleteBranchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBranchCommand}.
 */
export interface DeleteBranchCommandOutput extends DeleteBranchResult, __MetadataBearer {}

/**
 * <p> Deletes a branch for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // DeleteBranchRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBranchCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBranchResult
 * //   branch: { // Branch
 * //     branchArn: "STRING_VALUE", // required
 * //     branchName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST", // required
 * //     displayName: "STRING_VALUE", // required
 * //     enableNotification: true || false, // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     environmentVariables: { // EnvironmentVariables // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     enableAutoBuild: true || false, // required
 * //     enableSkewProtection: true || false,
 * //     customDomains: [ // CustomDomains // required
 * //       "STRING_VALUE",
 * //     ],
 * //     framework: "STRING_VALUE", // required
 * //     activeJobId: "STRING_VALUE", // required
 * //     totalNumberOfJobs: "STRING_VALUE", // required
 * //     enableBasicAuth: true || false, // required
 * //     enablePerformanceMode: true || false,
 * //     thumbnailUrl: "STRING_VALUE",
 * //     basicAuthCredentials: "STRING_VALUE",
 * //     buildSpec: "STRING_VALUE",
 * //     ttl: "STRING_VALUE", // required
 * //     associatedResources: [ // AssociatedResources
 * //       "STRING_VALUE",
 * //     ],
 * //     enablePullRequestPreview: true || false, // required
 * //     pullRequestEnvironmentName: "STRING_VALUE",
 * //     destinationBranch: "STRING_VALUE",
 * //     sourceBranch: "STRING_VALUE",
 * //     backendEnvironmentArn: "STRING_VALUE",
 * //     backend: { // Backend
 * //       stackArn: "STRING_VALUE",
 * //     },
 * //     computeRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBranchCommandInput - {@link DeleteBranchCommandInput}
 * @returns {@link DeleteBranchCommandOutput}
 * @see {@link DeleteBranchCommandInput} for command's `input` shape.
 * @see {@link DeleteBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *  <p>An operation failed because a dependent service threw an exception. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class DeleteBranchCommand extends $Command
  .classBuilder<
    DeleteBranchCommandInput,
    DeleteBranchCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "DeleteBranch", {})
  .n("AmplifyClient", "DeleteBranchCommand")
  .f(void 0, DeleteBranchResultFilterSensitiveLog)
  .ser(se_DeleteBranchCommand)
  .de(de_DeleteBranchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBranchRequest;
      output: DeleteBranchResult;
    };
    sdk: {
      input: DeleteBranchCommandInput;
      output: DeleteBranchCommandOutput;
    };
  };
}
