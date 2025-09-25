// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPackageGroupsRequest, ListPackageGroupsResult } from "../models/models_0";
import { ListPackageGroups } from "../schemas/schemas_4_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackageGroupsCommand}.
 */
export interface ListPackageGroupsCommandInput extends ListPackageGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackageGroupsCommand}.
 */
export interface ListPackageGroupsCommandOutput extends ListPackageGroupsResult, __MetadataBearer {}

/**
 * <p>Returns a list of package groups in the requested domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageGroupsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageGroupsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListPackageGroupsRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   prefix: "STRING_VALUE",
 * };
 * const command = new ListPackageGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackageGroupsResult
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
 * @param ListPackageGroupsCommandInput - {@link ListPackageGroupsCommandInput}
 * @returns {@link ListPackageGroupsCommandOutput}
 * @see {@link ListPackageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackageGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 *
 * @public
 */
export class ListPackageGroupsCommand extends $Command
  .classBuilder<
    ListPackageGroupsCommandInput,
    ListPackageGroupsCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "ListPackageGroups", {})
  .n("CodeartifactClient", "ListPackageGroupsCommand")
  .sc(ListPackageGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackageGroupsRequest;
      output: ListPackageGroupsResult;
    };
    sdk: {
      input: ListPackageGroupsCommandInput;
      output: ListPackageGroupsCommandOutput;
    };
  };
}
