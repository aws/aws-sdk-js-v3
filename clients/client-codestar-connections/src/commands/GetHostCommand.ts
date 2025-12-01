// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHostInput, GetHostOutput } from "../models/models_0";
import { GetHost } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostCommand}.
 */
export interface GetHostCommandInput extends GetHostInput {}
/**
 * @public
 *
 * The output of {@link GetHostCommand}.
 */
export interface GetHostCommandOutput extends GetHostOutput, __MetadataBearer {}

/**
 * <p>Returns the host ARN and details such as status, provider type, endpoint, and, if
 *       applicable, the VPC configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // GetHostInput
 *   HostArn: "STRING_VALUE", // required
 * };
 * const command = new GetHostCommand(input);
 * const response = await client.send(command);
 * // { // GetHostOutput
 * //   Name: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged",
 * //   ProviderEndpoint: "STRING_VALUE",
 * //   VpcConfiguration: { // VpcConfiguration
 * //     VpcId: "STRING_VALUE", // required
 * //     SubnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     TlsCertificate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHostCommandInput - {@link GetHostCommandInput}
 * @returns {@link GetHostCommandOutput}
 * @see {@link GetHostCommandInput} for command's `input` shape.
 * @see {@link GetHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class GetHostCommand extends $Command
  .classBuilder<
    GetHostCommandInput,
    GetHostCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "GetHost", {})
  .n("CodeStarConnectionsClient", "GetHostCommand")
  .sc(GetHost)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostInput;
      output: GetHostOutput;
    };
    sdk: {
      input: GetHostCommandInput;
      output: GetHostCommandOutput;
    };
  };
}
