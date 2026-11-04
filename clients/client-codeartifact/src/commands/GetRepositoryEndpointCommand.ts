// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import { GetRepositoryEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format:
 *
 * - `cargo`
 * - `generic`
 * - `maven`
 * - `npm`
 * - `nuget`
 * - `pypi`
 * - `ruby`
 * - `swift`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
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
export class GetRepositoryEndpointCommand extends command<GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetRepositoryEndpoint",
  GetRepositoryEndpoint$
) {
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
