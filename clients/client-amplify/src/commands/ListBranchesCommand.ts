// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBranchesRequest, ListBranchesResult } from "../models/models_0";
import { ListBranches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBranchesCommand}.
 */
export interface ListBranchesCommandInput extends ListBranchesRequest {}
/**
 * @public
 *
 * The output of {@link ListBranchesCommand}.
 */
export interface ListBranchesCommandOutput extends ListBranchesResult, __MetadataBearer {}

/**
 * <p> Lists the branches of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBranchesCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBranchesCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // ListBranchesRequest
 *   appId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * // { // ListBranchesResult
 * //   branches: [ // Branches // required
 * //     { // Branch
 * //       branchArn: "STRING_VALUE", // required
 * //       branchName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST", // required
 * //       displayName: "STRING_VALUE", // required
 * //       enableNotification: true || false, // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       environmentVariables: { // EnvironmentVariables // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       enableAutoBuild: true || false, // required
 * //       enableSkewProtection: true || false,
 * //       customDomains: [ // CustomDomains // required
 * //         "STRING_VALUE",
 * //       ],
 * //       framework: "STRING_VALUE", // required
 * //       activeJobId: "STRING_VALUE", // required
 * //       totalNumberOfJobs: "STRING_VALUE", // required
 * //       enableBasicAuth: true || false, // required
 * //       enablePerformanceMode: true || false,
 * //       thumbnailUrl: "STRING_VALUE",
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       buildSpec: "STRING_VALUE",
 * //       ttl: "STRING_VALUE", // required
 * //       associatedResources: [ // AssociatedResources
 * //         "STRING_VALUE",
 * //       ],
 * //       enablePullRequestPreview: true || false, // required
 * //       pullRequestEnvironmentName: "STRING_VALUE",
 * //       destinationBranch: "STRING_VALUE",
 * //       sourceBranch: "STRING_VALUE",
 * //       backendEnvironmentArn: "STRING_VALUE",
 * //       backend: { // Backend
 * //         stackArn: "STRING_VALUE",
 * //       },
 * //       computeRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBranchesCommandInput - {@link ListBranchesCommandInput}
 * @returns {@link ListBranchesCommandOutput}
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListBranchesCommand extends $Command
  .classBuilder<
    ListBranchesCommandInput,
    ListBranchesCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "ListBranches", {})
  .n("AmplifyClient", "ListBranchesCommand")
  .sc(ListBranches$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBranchesRequest;
      output: ListBranchesResult;
    };
    sdk: {
      input: ListBranchesCommandInput;
      output: ListBranchesCommandOutput;
    };
  };
}
