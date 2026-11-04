// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRepositoriesInDomainRequest, ListRepositoriesInDomainResult } from "../models/models_0";
import { ListRepositoriesInDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRepositoriesInDomainCommand}.
 */
export interface ListRepositoriesInDomainCommandInput extends ListRepositoriesInDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesInDomainCommand}.
 */
export interface ListRepositoriesInDomainCommandOutput extends ListRepositoriesInDomainResult, __MetadataBearer {}

/**
 * Returns a list of [RepositorySummary](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html) objects. Each `RepositorySummary` contains information about a repository in the specified domain and that matches the input parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesInDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesInDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListRepositoriesInDomainRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   administratorAccount: "STRING_VALUE",
 *   repositoryPrefix: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRepositoriesInDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoriesInDomainResult
 * //   repositories: [ // RepositorySummaryList
 * //     { // RepositorySummary
 * //       name: "STRING_VALUE",
 * //       administratorAccount: "STRING_VALUE",
 * //       domainName: "STRING_VALUE",
 * //       domainOwner: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRepositoriesInDomainCommandInput - {@link ListRepositoriesInDomainCommandInput}
 * @returns {@link ListRepositoriesInDomainCommandOutput}
 * @see {@link ListRepositoriesInDomainCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesInDomainCommandOutput} for command's `response` shape.
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
export class ListRepositoriesInDomainCommand extends command<ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput>(
  _ep0,
  _mw0,
  "ListRepositoriesInDomain",
  ListRepositoriesInDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoriesInDomainRequest;
      output: ListRepositoriesInDomainResult;
    };
    sdk: {
      input: ListRepositoriesInDomainCommandInput;
      output: ListRepositoriesInDomainCommandOutput;
    };
  };
}
