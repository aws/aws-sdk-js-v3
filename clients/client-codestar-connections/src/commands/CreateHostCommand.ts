// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHostInput, CreateHostOutput } from "../models/models_0";
import { de_CreateHostCommand, se_CreateHostCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHostCommand}.
 */
export interface CreateHostCommandInput extends CreateHostInput {}
/**
 * @public
 *
 * The output of {@link CreateHostCommand}.
 */
export interface CreateHostCommandOutput extends CreateHostOutput, __MetadataBearer {}

/**
 * <p>Creates a resource that represents the infrastructure where a third-party provider is
 *       installed. The host is used when you create connections to an installed third-party provider
 *       type, such as GitHub Enterprise Server. You create one host for all connections to that
 *       provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, CreateHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // CreateHostInput
 *   Name: "STRING_VALUE", // required
 *   ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged", // required
 *   ProviderEndpoint: "STRING_VALUE", // required
 *   VpcConfiguration: { // VpcConfiguration
 *     VpcId: "STRING_VALUE", // required
 *     SubnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     TlsCertificate: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHostCommand(input);
 * const response = await client.send(command);
 * // { // CreateHostOutput
 * //   HostArn: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateHostCommandInput - {@link CreateHostCommandInput}
 * @returns {@link CreateHostCommandOutput}
 * @see {@link CreateHostCommandInput} for command's `input` shape.
 * @see {@link CreateHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class CreateHostCommand extends $Command
  .classBuilder<
    CreateHostCommandInput,
    CreateHostCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "CreateHost", {})
  .n("CodeStarConnectionsClient", "CreateHostCommand")
  .f(void 0, void 0)
  .ser(se_CreateHostCommand)
  .de(de_CreateHostCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHostInput;
      output: CreateHostOutput;
    };
    sdk: {
      input: CreateHostCommandInput;
      output: CreateHostCommandOutput;
    };
  };
}
