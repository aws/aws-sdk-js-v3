// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubPackageGroupsRequest, ListSubPackageGroupsResult } from "../models/models_0";
import { ListSubPackageGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubPackageGroupsCommand}.
 */
export interface ListSubPackageGroupsCommandInput extends ListSubPackageGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubPackageGroupsCommand}.
 */
export interface ListSubPackageGroupsCommandOutput extends ListSubPackageGroupsResult, __MetadataBearer {}

/**
 * Returns a list of direct children of the specified package group.
 *
 * For information package group hierarchy, see [Package group definition syntax and matching behavior](https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListSubPackageGroupsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListSubPackageGroupsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListSubPackageGroupsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubPackageGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubPackageGroupsResult
 * //   packageGroups: [ // PackageGroupSummaryList
 * //     { // PackageGroupSummary
 * //       arn: "STRING_VALUE",
 * //       pattern: "STRING_VALUE",
 * //       domainName: "STRING_VALUE",
 * //       domainOwner: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"),
 * //       contactInfo: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       originConfiguration: { // PackageGroupOriginConfiguration
 * //         restrictions: { // PackageGroupOriginRestrictions
 * //           "<keys>": { // PackageGroupOriginRestriction
 * //             mode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //             effectiveMode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //             inheritedFrom: { // PackageGroupReference
 * //               arn: "STRING_VALUE",
 * //               pattern: "STRING_VALUE",
 * //             },
 * //             repositoriesCount: Number("long"),
 * //           },
 * //         },
 * //       },
 * //       parent: {
 * //         arn: "STRING_VALUE",
 * //         pattern: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubPackageGroupsCommandInput - {@link ListSubPackageGroupsCommandInput}
 * @returns {@link ListSubPackageGroupsCommandOutput}
 * @see {@link ListSubPackageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSubPackageGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation did not succeed because of an error that occurred inside CodeArtifact.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation did not succeed because the resource requested is not found in the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation did not succeed because too many requests are sent to the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation did not succeed because a parameter in the request was sent with an invalid value.
 *
 * @throws {@link CodeartifactServiceException}
 *
 * Base exception class for all service exceptions from Codeartifact service.
 *
 * @public
 */
export class ListSubPackageGroupsCommand extends command<ListSubPackageGroupsCommandInput, ListSubPackageGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubPackageGroups",
  ListSubPackageGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubPackageGroupsRequest;
      output: ListSubPackageGroupsResult;
    };
    sdk: {
      input: ListSubPackageGroupsCommandInput;
      output: ListSubPackageGroupsCommandOutput;
    };
  };
}
