// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRepositoryRequest, DeleteRepositoryResult } from "../models/models_0";
import { de_DeleteRepositoryCommand, se_DeleteRepositoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandInput extends DeleteRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryCommand}.
 */
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResult, __MetadataBearer {}

/**
 * <p>
 *          Deletes a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // DeleteRepositoryRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 * };
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryResult
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
 * //         packageFormat: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift",
 * //         status: "Available",
 * //       },
 * //     ],
 * //     createdTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryCommandInput - {@link DeleteRepositoryCommandInput}
 * @returns {@link DeleteRepositoryCommandOutput}
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteRepositoryCommand extends $Command
  .classBuilder<
    DeleteRepositoryCommandInput,
    DeleteRepositoryCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "DeleteRepository", {})
  .n("CodeartifactClient", "DeleteRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRepositoryCommand)
  .de(de_DeleteRepositoryCommand)
  .build() {}
