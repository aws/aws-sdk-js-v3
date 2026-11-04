// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateExternalConnectionRequest, AssociateExternalConnectionResult } from "../models/models_0";
import { AssociateExternalConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateExternalConnectionCommand}.
 */
export interface AssociateExternalConnectionCommandInput extends AssociateExternalConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AssociateExternalConnectionCommand}.
 */
export interface AssociateExternalConnectionCommandOutput extends AssociateExternalConnectionResult, __MetadataBearer {}

/**
 * Adds an existing external connection to a repository. One external connection is allowed per repository.
 *
 * > **Note:** A repository can have one or more upstream repositories, or an external connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, AssociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, AssociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // AssociateExternalConnectionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   externalConnection: "STRING_VALUE", // required
 * };
 * const command = new AssociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AssociateExternalConnectionResult
 * //   repository: { // RepositoryDescription
 * //     name: "STRING_VALUE",
 * //     administratorAccount: "STRING_VALUE",
 * //     domainName: "STRING_VALUE",
 * //     domainOwner: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     upstreams: [ // UpstreamRepositoryInfoList
 * //       { // UpstreamRepositoryInfo
 * //         repositoryName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     externalConnections: [ // RepositoryExternalConnectionInfoList
 * //       { // RepositoryExternalConnectionInfo
 * //         externalConnectionName: "STRING_VALUE",
 * //         packageFormat: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //         status: "Available",
 * //       },
 * //     ],
 * //     createdTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateExternalConnectionCommandInput - {@link AssociateExternalConnectionCommandInput}
 * @returns {@link AssociateExternalConnectionCommandOutput}
 * @see {@link AssociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The operation did not succeed because prerequisites are not met.
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
export class AssociateExternalConnectionCommand extends command<AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput>(
  _ep0,
  _mw0,
  "AssociateExternalConnection",
  AssociateExternalConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateExternalConnectionRequest;
      output: AssociateExternalConnectionResult;
    };
    sdk: {
      input: AssociateExternalConnectionCommandInput;
      output: AssociateExternalConnectionCommandOutput;
    };
  };
}
