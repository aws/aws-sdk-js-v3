// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateConnectionInput, CreateConnectionOutput } from "../models/models_0";
import { CreateConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionOutput, __MetadataBearer {}

/**
 * <p>Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so
 *       that it can access third-party code repositories. The connection is in pending status until
 *       the third-party connection handshake is completed from the console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, CreateConnectionCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, CreateConnectionCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // CreateConnectionInput
 *   ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps",
 *   ConnectionName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   HostArn: "STRING_VALUE",
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionOutput
 * //   ConnectionArn: "STRING_VALUE", // required
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
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the maximum limit for connections.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "CreateConnection", {})
  .n("CodeConnectionsClient", "CreateConnectionCommand")
  .sc(CreateConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionInput;
      output: CreateConnectionOutput;
    };
    sdk: {
      input: CreateConnectionCommandInput;
      output: CreateConnectionCommandOutput;
    };
  };
}
