// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppsRequest, ListAppsResult, ListAppsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListAppsCommand, se_ListAppsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppsCommand}.
 */
export interface ListAppsCommandInput extends ListAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsCommand}.
 */
export interface ListAppsCommandOutput extends ListAppsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the existing Amplify apps. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListAppsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListAppsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListAppsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsResult
 * //   apps: [ // Apps // required
 * //     { // App
 * //       appId: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE", // required
 * //       repository: "STRING_VALUE", // required
 * //       platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       iamServiceRoleArn: "STRING_VALUE",
 * //       environmentVariables: { // EnvironmentVariables // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       defaultDomain: "STRING_VALUE", // required
 * //       enableBranchAutoBuild: true || false, // required
 * //       enableBranchAutoDeletion: true || false,
 * //       enableBasicAuth: true || false, // required
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       customRules: [ // CustomRules
 * //         { // CustomRule
 * //           source: "STRING_VALUE", // required
 * //           target: "STRING_VALUE", // required
 * //           status: "STRING_VALUE",
 * //           condition: "STRING_VALUE",
 * //         },
 * //       ],
 * //       productionBranch: { // ProductionBranch
 * //         lastDeployTime: new Date("TIMESTAMP"),
 * //         status: "STRING_VALUE",
 * //         thumbnailUrl: "STRING_VALUE",
 * //         branchName: "STRING_VALUE",
 * //       },
 * //       buildSpec: "STRING_VALUE",
 * //       customHeaders: "STRING_VALUE",
 * //       enableAutoBranchCreation: true || false,
 * //       autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 * //         "STRING_VALUE",
 * //       ],
 * //       autoBranchCreationConfig: { // AutoBranchCreationConfig
 * //         stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 * //         framework: "STRING_VALUE",
 * //         enableAutoBuild: true || false,
 * //         environmentVariables: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         basicAuthCredentials: "STRING_VALUE",
 * //         enableBasicAuth: true || false,
 * //         enablePerformanceMode: true || false,
 * //         buildSpec: "STRING_VALUE",
 * //         enablePullRequestPreview: true || false,
 * //         pullRequestEnvironmentName: "STRING_VALUE",
 * //       },
 * //       repositoryCloneMethod: "SSH" || "TOKEN" || "SIGV4",
 * //       cacheConfig: { // CacheConfig
 * //         type: "AMPLIFY_MANAGED" || "AMPLIFY_MANAGED_NO_COOKIES", // required
 * //       },
 * //       webhookCreateTime: new Date("TIMESTAMP"),
 * //       wafConfiguration: { // WafConfiguration
 * //         webAclArn: "STRING_VALUE",
 * //         wafStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCESS" || "DISASSOCIATING" || "DISASSOCIATION_FAILED",
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsCommandInput - {@link ListAppsCommandInput}
 * @returns {@link ListAppsCommandOutput}
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class ListAppsCommand extends $Command
  .classBuilder<
    ListAppsCommandInput,
    ListAppsCommandOutput,
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
  .s("Amplify", "ListApps", {})
  .n("AmplifyClient", "ListAppsCommand")
  .f(void 0, ListAppsResultFilterSensitiveLog)
  .ser(se_ListAppsCommand)
  .de(de_ListAppsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppsRequest;
      output: ListAppsResult;
    };
    sdk: {
      input: ListAppsCommandInput;
      output: ListAppsCommandOutput;
    };
  };
}
