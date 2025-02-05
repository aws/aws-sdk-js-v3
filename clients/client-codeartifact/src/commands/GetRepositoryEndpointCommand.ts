// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import { de_GetRepositoryEndpointCommand, se_GetRepositoryEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryEndpointCommand}.
 */
export interface GetRepositoryEndpointCommandInput extends GetRepositoryEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryEndpointCommand}.
 */
export interface GetRepositoryEndpointCommandOutput extends GetRepositoryEndpointResult, __MetadataBearer {}

/**
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>cargo</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>generic</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>nuget</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ruby</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>swift</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeartifactClient(config);
 * const input = { // GetRepositoryEndpointRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo", // required
 *   endpointType: "dualstack" || "ipv4",
 * };
 * const command = new GetRepositoryEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryEndpointResult
 * //   repositoryEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRepositoryEndpointCommandInput - {@link GetRepositoryEndpointCommandInput}
 * @returns {@link GetRepositoryEndpointCommandOutput}
 * @see {@link GetRepositoryEndpointCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryEndpointCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRepositoryEndpointCommand extends $Command
  .classBuilder<
    GetRepositoryEndpointCommandInput,
    GetRepositoryEndpointCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "GetRepositoryEndpoint", {})
  .n("CodeartifactClient", "GetRepositoryEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryEndpointCommand)
  .de(de_GetRepositoryEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryEndpointRequest;
      output: GetRepositoryEndpointResult;
    };
    sdk: {
      input: GetRepositoryEndpointCommandInput;
      output: GetRepositoryEndpointCommandOutput;
    };
  };
}
