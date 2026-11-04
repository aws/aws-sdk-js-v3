// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/models_0";
import { ListApplicationRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists information about revisions for an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
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
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link BucketNameFilterRequiredException} (client fault)
 *
 * A bucket name is required, but was not provided.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidBucketNameFilterException} (client fault)
 *
 * The bucket name either doesn't exist or was specified in an invalid format.
 *
 * @throws {@link InvalidDeployedStateFilterException} (client fault)
 *
 * The deployed state filter was specified in an invalid format.
 *
 * @throws {@link InvalidKeyPrefixFilterException} (client fault)
 *
 * The specified key prefix filter was specified in an invalid format.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The next token was specified in an invalid format.
 *
 * @throws {@link InvalidSortByException} (client fault)
 *
 * The column name to sort by is either not present or was specified in an invalid format.
 *
 * @throws {@link InvalidSortOrderException} (client fault)
 *
 * The sort order was specified in an invalid format.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class ListApplicationRevisionsCommand extends command<ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationRevisions",
  ListApplicationRevisions$
) {
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
