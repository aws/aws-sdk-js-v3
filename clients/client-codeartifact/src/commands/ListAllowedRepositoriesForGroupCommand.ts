// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAllowedRepositoriesForGroupRequest, ListAllowedRepositoriesForGroupResult } from "../models/models_0";
import { ListAllowedRepositoriesForGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAllowedRepositoriesForGroupCommand}.
 */
export interface ListAllowedRepositoriesForGroupCommandInput extends ListAllowedRepositoriesForGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowedRepositoriesForGroupCommand}.
 */
export interface ListAllowedRepositoriesForGroupCommandOutput extends ListAllowedRepositoriesForGroupResult, __MetadataBearer {}

/**
 * Lists the repositories in the added repositories list of the specified restriction type for a package group. For more information about restriction types and added repository lists, see [Package group origin controls](https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-origin-controls.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListAllowedRepositoriesForGroupCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListAllowedRepositoriesForGroupCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListAllowedRepositoriesForGroupRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   originRestrictionType: "EXTERNAL_UPSTREAM" || "INTERNAL_UPSTREAM" || "PUBLISH", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAllowedRepositoriesForGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowedRepositoriesForGroupResult
 * //   allowedRepositories: [ // RepositoryNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAllowedRepositoriesForGroupCommandInput - {@link ListAllowedRepositoriesForGroupCommandInput}
 * @returns {@link ListAllowedRepositoriesForGroupCommandOutput}
 * @see {@link ListAllowedRepositoriesForGroupCommandInput} for command's `input` shape.
 * @see {@link ListAllowedRepositoriesForGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account.
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
export class ListAllowedRepositoriesForGroupCommand extends command<ListAllowedRepositoriesForGroupCommandInput, ListAllowedRepositoriesForGroupCommandOutput>(
  _ep0,
  _mw0,
  "ListAllowedRepositoriesForGroup",
  ListAllowedRepositoriesForGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowedRepositoriesForGroupRequest;
      output: ListAllowedRepositoriesForGroupResult;
    };
    sdk: {
      input: ListAllowedRepositoriesForGroupCommandInput;
      output: ListAllowedRepositoriesForGroupCommandOutput;
    };
  };
}
