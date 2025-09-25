// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateExternalConnectionRequest, DisassociateExternalConnectionResult } from "../models/models_0";
import { DisassociateExternalConnection } from "../schemas/schemas_3_Repository";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateExternalConnectionCommand}.
 */
export interface DisassociateExternalConnectionCommandInput extends DisassociateExternalConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateExternalConnectionCommand}.
 */
export interface DisassociateExternalConnectionCommandOutput
  extends DisassociateExternalConnectionResult,
    __MetadataBearer {}

/**
 * <p>
 *       Removes an existing external connection from a repository.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisassociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisassociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // DisassociateExternalConnectionRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   externalConnection: "STRING_VALUE", // required
 * };
 * const command = new DisassociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateExternalConnectionResult
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
 * @param DisassociateExternalConnectionCommandInput - {@link DisassociateExternalConnectionCommandInput}
 * @returns {@link DisassociateExternalConnectionCommandOutput}
 * @see {@link DisassociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link DisassociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The operation did not succeed because prerequisites are not met.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
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
export class DisassociateExternalConnectionCommand extends $Command
  .classBuilder<
    DisassociateExternalConnectionCommandInput,
    DisassociateExternalConnectionCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "DisassociateExternalConnection", {})
  .n("CodeartifactClient", "DisassociateExternalConnectionCommand")
  .sc(DisassociateExternalConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateExternalConnectionRequest;
      output: DisassociateExternalConnectionResult;
    };
    sdk: {
      input: DisassociateExternalConnectionCommandInput;
      output: DisassociateExternalConnectionCommandOutput;
    };
  };
}
