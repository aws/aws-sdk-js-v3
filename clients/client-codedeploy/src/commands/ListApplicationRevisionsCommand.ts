// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/models_0";
import { de_ListApplicationRevisionsCommand, se_ListApplicationRevisionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationRevisionsCommand}.
 */
export interface ListApplicationRevisionsCommandInput extends ListApplicationRevisionsInput {}
/**
 * @public
 *
 * The output of {@link ListApplicationRevisionsCommand}.
 */
export interface ListApplicationRevisionsCommandOutput extends ListApplicationRevisionsOutput, __MetadataBearer {}

/**
 * <p>Lists information about revisions for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // ListApplicationRevisionsInput
 *   applicationName: "STRING_VALUE", // required
 *   sortBy: "registerTime" || "firstUsedTime" || "lastUsedTime",
 *   sortOrder: "ascending" || "descending",
 *   s3Bucket: "STRING_VALUE",
 *   s3KeyPrefix: "STRING_VALUE",
 *   deployed: "include" || "exclude" || "ignore",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationRevisionsOutput
 * //   revisions: [ // RevisionLocationList
 * //     { // RevisionLocation
 * //       revisionType: "S3" || "GitHub" || "String" || "AppSpecContent",
 * //       s3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //         bundleType: "tar" || "tgz" || "zip" || "YAML" || "JSON",
 * //         version: "STRING_VALUE",
 * //         eTag: "STRING_VALUE",
 * //       },
 * //       gitHubLocation: { // GitHubLocation
 * //         repository: "STRING_VALUE",
 * //         commitId: "STRING_VALUE",
 * //       },
 * //       string: { // RawString
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //       appSpecContent: { // AppSpecContent
 * //         content: "STRING_VALUE",
 * //         sha256: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationRevisionsCommandInput - {@link ListApplicationRevisionsCommandInput}
 * @returns {@link ListApplicationRevisionsCommandOutput}
 * @see {@link ListApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *  <p>The application does not exist with the user or Amazon Web Services account.</p>
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *  <p>The minimum number of required application names was not specified.</p>
 *
 * @throws {@link BucketNameFilterRequiredException} (client fault)
 *  <p>A bucket name is required, but was not provided.</p>
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *  <p>The application name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidBucketNameFilterException} (client fault)
 *  <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeployedStateFilterException} (client fault)
 *  <p>The deployed state filter was specified in an invalid format.</p>
 *
 * @throws {@link InvalidKeyPrefixFilterException} (client fault)
 *  <p>The specified key prefix filter was specified in an invalid format.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link InvalidSortByException} (client fault)
 *  <p>The column name to sort by is either not present or was specified in an invalid
 *             format.</p>
 *
 * @throws {@link InvalidSortOrderException} (client fault)
 *  <p>The sort order was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ListApplicationRevisionsCommand extends $Command
  .classBuilder<
    ListApplicationRevisionsCommandInput,
    ListApplicationRevisionsCommandOutput,
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
  .s("CodeDeploy_20141006", "ListApplicationRevisions", {})
  .n("CodeDeployClient", "ListApplicationRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationRevisionsCommand)
  .de(de_ListApplicationRevisionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationRevisionsInput;
      output: ListApplicationRevisionsOutput;
    };
    sdk: {
      input: ListApplicationRevisionsCommandInput;
      output: ListApplicationRevisionsCommandOutput;
    };
  };
}
