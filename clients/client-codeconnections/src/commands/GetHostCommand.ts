// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetHostInput, GetHostOutput } from "../models/models_0";
import { de_GetHostCommand, se_GetHostCommand } from "../protocols/Aws_json1_0";

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
 * import { CodeConnectionsClient, GetHostCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetHostCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeConnectionsClient(config);
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
 * @public
 */
export class GetHostCommand extends $Command
  .classBuilder<
    GetHostCommandInput,
    GetHostCommandOutput,
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
  .s("CodeConnections_20231201", "GetHost", {})
  .n("CodeConnectionsClient", "GetHostCommand")
  .f(void 0, void 0)
  .ser(se_GetHostCommand)
  .de(de_GetHostCommand)
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
