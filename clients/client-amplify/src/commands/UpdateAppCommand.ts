// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAppRequest, UpdateAppResult } from "../models/models_0";
import { UpdateApp } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandInput extends UpdateAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandOutput extends UpdateAppResult, __MetadataBearer {}

/**
 * <p>Updates an existing Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateAppCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateAppCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // UpdateAppRequest
 *   appId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE",
 *   computeRoleArn: "STRING_VALUE",
 *   iamServiceRoleArn: "STRING_VALUE",
 *   environmentVariables: { // EnvironmentVariables
 *     "<keys>": "STRING_VALUE",
 *   },
 *   enableBranchAutoBuild: true || false,
 *   enableBranchAutoDeletion: true || false,
 *   enableBasicAuth: true || false,
 *   basicAuthCredentials: "STRING_VALUE",
 *   customRules: [ // CustomRules
 *     { // CustomRule
 *       source: "STRING_VALUE", // required
 *       target: "STRING_VALUE", // required
 *       status: "STRING_VALUE",
 *       condition: "STRING_VALUE",
 *     },
 *   ],
 *   buildSpec: "STRING_VALUE",
 *   customHeaders: "STRING_VALUE",
 *   enableAutoBranchCreation: true || false,
 *   autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 *     "STRING_VALUE",
 *   ],
 *   autoBranchCreationConfig: { // AutoBranchCreationConfig
 *     stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 *     framework: "STRING_VALUE",
 *     enableAutoBuild: true || false,
 *     environmentVariables: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     basicAuthCredentials: "STRING_VALUE",
 *     enableBasicAuth: true || false,
 *     enablePerformanceMode: true || false,
 *     buildSpec: "STRING_VALUE",
 *     enablePullRequestPreview: true || false,
 *     pullRequestEnvironmentName: "STRING_VALUE",
 *   },
 *   repository: "STRING_VALUE",
 *   oauthToken: "STRING_VALUE",
 *   accessToken: "STRING_VALUE",
 *   jobConfig: { // JobConfig
 *     buildComputeType: "STANDARD_8GB" || "LARGE_16GB" || "XLARGE_72GB", // required
 *   },
 *   cacheConfig: { // CacheConfig
 *     type: "AMPLIFY_MANAGED" || "AMPLIFY_MANAGED_NO_COOKIES", // required
 *   },
 * };
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppResult
 * //   app: { // App
 * //     appId: "STRING_VALUE", // required
 * //     appArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     description: "STRING_VALUE", // required
 * //     repository: "STRING_VALUE", // required
 * //     platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     computeRoleArn: "STRING_VALUE",
 * //     iamServiceRoleArn: "STRING_VALUE",
 * //     environmentVariables: { // EnvironmentVariables // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     defaultDomain: "STRING_VALUE", // required
 * //     enableBranchAutoBuild: true || false, // required
 * //     enableBranchAutoDeletion: true || false,
 * //     enableBasicAuth: true || false, // required
 * //     basicAuthCredentials: "STRING_VALUE",
 * //     customRules: [ // CustomRules
 * //       { // CustomRule
 * //         source: "STRING_VALUE", // required
 * //         target: "STRING_VALUE", // required
 * //         status: "STRING_VALUE",
 * //         condition: "STRING_VALUE",
 * //       },
 * //     ],
 * //     productionBranch: { // ProductionBranch
 * //       lastDeployTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       thumbnailUrl: "STRING_VALUE",
 * //       branchName: "STRING_VALUE",
 * //     },
 * //     buildSpec: "STRING_VALUE",
 * //     customHeaders: "STRING_VALUE",
 * //     enableAutoBranchCreation: true || false,
 * //     autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 * //       "STRING_VALUE",
 * //     ],
 * //     autoBranchCreationConfig: { // AutoBranchCreationConfig
 * //       stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 * //       framework: "STRING_VALUE",
 * //       enableAutoBuild: true || false,
 * //       environmentVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       enableBasicAuth: true || false,
 * //       enablePerformanceMode: true || false,
 * //       buildSpec: "STRING_VALUE",
 * //       enablePullRequestPreview: true || false,
 * //       pullRequestEnvironmentName: "STRING_VALUE",
 * //     },
 * //     repositoryCloneMethod: "SSH" || "TOKEN" || "SIGV4",
 * //     cacheConfig: { // CacheConfig
 * //       type: "AMPLIFY_MANAGED" || "AMPLIFY_MANAGED_NO_COOKIES", // required
 * //     },
 * //     webhookCreateTime: new Date("TIMESTAMP"),
 * //     wafConfiguration: { // WafConfiguration
 * //       webAclArn: "STRING_VALUE",
 * //       wafStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCESS" || "DISASSOCIATING" || "DISASSOCIATION_FAILED",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     jobConfig: { // JobConfig
 * //       buildComputeType: "STANDARD_8GB" || "LARGE_16GB" || "XLARGE_72GB", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppCommandInput - {@link UpdateAppCommandInput}
 * @returns {@link UpdateAppCommandOutput}
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
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
 *
 * @public
 */
export class UpdateAppCommand extends $Command
  .classBuilder<
    UpdateAppCommandInput,
    UpdateAppCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "UpdateApp", {})
  .n("AmplifyClient", "UpdateAppCommand")
  .sc(UpdateApp)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppRequest;
      output: UpdateAppResult;
    };
    sdk: {
      input: UpdateAppCommandInput;
      output: UpdateAppCommandOutput;
    };
  };
}
