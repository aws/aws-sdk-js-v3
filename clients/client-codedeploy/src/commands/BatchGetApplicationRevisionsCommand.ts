// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/models_0";
import { BatchGetApplicationRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetApplicationRevisionsCommand}.
 */
export interface BatchGetApplicationRevisionsCommandInput extends BatchGetApplicationRevisionsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetApplicationRevisionsCommand}.
 */
export interface BatchGetApplicationRevisionsCommandOutput extends BatchGetApplicationRevisionsOutput, __MetadataBearer {}

/**
 * Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetApplicationRevisionsInput
 *   applicationName: "STRING_VALUE", // required
 *   revisions: [ // RevisionLocationList // required
 *     { // RevisionLocation
 *       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 *       s3Location: { // S3Location
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 *         version: "STRING_VALUE",
 *         eTag: "STRING_VALUE",
 *       },
 *       gitHubLocation: { // GitHubLocation
 *         repository: "STRING_VALUE",
 *         commitId: "STRING_VALUE",
 *       },
 *       string: { // RawString
 *         content: "STRING_VALUE",
 *         sha256: "STRING_VALUE",
 *       },
 *       appSpecContent: { // AppSpecContent
 *         content: "STRING_VALUE",
 *         sha256: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetApplicationRevisionsOutput
 * //   applicationName: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   revisions: [ // RevisionInfoList
 * //     { // RevisionInfo
 * //       revisionLocation: { // RevisionLocation
 * //         revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //         s3Location: { // S3Location
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //           version: "STRING_VALUE",
 * //           eTag: "STRING_VALUE",
 * //         },
 * //         gitHubLocation: { // GitHubLocation
 * //           repository: "STRING_VALUE",
 * //           commitId: "STRING_VALUE",
 * //         },
 * //         string: { // RawString
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //         appSpecContent: { // AppSpecContent
 * //           content: "STRING_VALUE",
 * //           sha256: "STRING_VALUE",
 * //         },
 * //       },
 * //       genericRevisionInfo: { // GenericRevisionInfo
 * //         description: "STRING_VALUE",
 * //         deploymentGroups: [ // DeploymentGroupsList
 * //           "STRING_VALUE",
 * //         ],
 * //         firstUsedTime: new Date("TIMESTAMP"),
 * //         lastUsedTime: new Date("TIMESTAMP"),
 * //         registerTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetApplicationRevisionsCommandInput - {@link BatchGetApplicationRevisionsCommandInput}
 * @returns {@link BatchGetApplicationRevisionsCommandOutput}
 * @see {@link BatchGetApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *
 * The maximum number of names or IDs allowed for this request (100) was exceeded.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *
 * The revision was specified in an invalid format.
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *
 * The revision ID was not specified.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class BatchGetApplicationRevisionsCommand extends command<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetApplicationRevisions",
  BatchGetApplicationRevisions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetApplicationRevisionsInput;
      output: BatchGetApplicationRevisionsOutput;
    };
    sdk: {
      input: BatchGetApplicationRevisionsCommandInput;
      output: BatchGetApplicationRevisionsCommandOutput;
    };
  };
}
