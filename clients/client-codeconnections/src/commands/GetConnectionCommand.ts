// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectionInput, GetConnectionOutput } from "../models/models_0";
import { de_GetConnectionCommand, se_GetConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionInput {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionOutput, __MetadataBearer {}

/**
 * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, GetConnectionCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetConnectionCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // GetConnectionInput
 *   ConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionOutput
 * //   Connection: { // Connection
 * //     ConnectionName: "STRING_VALUE",
 * //     ConnectionArn: "STRING_VALUE",
 * //     ProviderType: "Bitbucket" || "GitHub" || "GitHubEnterpriseServer" || "GitLab" || "GitLabSelfManaged" || "AzureDevOps",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     ConnectionStatus: "PENDING" || "AVAILABLE" || "ERROR",
 * //     HostArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
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
export class GetConnectionCommand extends $Command
  .classBuilder<
    GetConnectionCommandInput,
    GetConnectionCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeConnections_20231201", "GetConnection", {})
  .n("CodeConnectionsClient", "GetConnectionCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectionCommand)
  .de(de_GetConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionInput;
      output: GetConnectionOutput;
    };
    sdk: {
      input: GetConnectionCommandInput;
      output: GetConnectionCommandOutput;
    };
  };
}
