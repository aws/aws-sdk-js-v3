// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/models_0";
import {
  de_BatchGetApplicationRevisionsCommand,
  se_BatchGetApplicationRevisionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface BatchGetApplicationRevisionsCommandOutput
  extends BatchGetApplicationRevisionsOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about one or more application revisions. The maximum number of
 *             application revisions that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidRevisionException} (client fault)
 *  <p>The revision was specified in an invalid format.</p>
 *
 * @throws {@link RevisionRequiredException} (client fault)
 *  <p>The revision ID was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 * @public
 */
export class BatchGetApplicationRevisionsCommand extends $Command
  .classBuilder<
    BatchGetApplicationRevisionsCommandInput,
    BatchGetApplicationRevisionsCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "BatchGetApplicationRevisions", {})
  .n("CodeDeployClient", "BatchGetApplicationRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetApplicationRevisionsCommand)
  .de(de_BatchGetApplicationRevisionsCommand)
  .build() {
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
