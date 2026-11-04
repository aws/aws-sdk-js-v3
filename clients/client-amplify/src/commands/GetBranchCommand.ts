// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBranchRequest, GetBranchResult } from "../models/models_0";
import { GetBranch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBranchCommand}.
 */
export interface GetBranchCommandInput extends GetBranchRequest {}
/**
 * @public
 *
 * The output of {@link GetBranchCommand}.
 */
export interface GetBranchCommandOutput extends GetBranchResult, __MetadataBearer {}

/**
 * Returns a branch for an Amplify app.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // GetBranchRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 * };
 * const command = new GetBranchCommand(input);
 * const response = await client.send(command);
 * // { // GetBranchResult
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
 * @param GetBranchCommandInput - {@link GetBranchCommandInput}
 * @returns {@link GetBranchCommandOutput}
 * @see {@link GetBranchCommandInput} for command's `input` shape.
 * @see {@link GetBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A request contains unexpected data.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class GetBranchCommand extends command<GetBranchCommandInput, GetBranchCommandOutput>(
  _ep0,
  _mw0,
  "GetBranch",
  GetBranch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBranchRequest;
      output: GetBranchResult;
    };
    sdk: {
      input: GetBranchCommandInput;
      output: GetBranchCommandOutput;
    };
  };
}
