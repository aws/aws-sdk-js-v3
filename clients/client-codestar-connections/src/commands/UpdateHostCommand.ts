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
import { UpdateHostInput, UpdateHostOutput } from "../models/models_0";
import { de_UpdateHostCommand, se_UpdateHostCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHostCommand}.
 */
export interface UpdateHostCommandInput extends UpdateHostInput {}
/**
 * @public
 *
 * The output of {@link UpdateHostCommand}.
 */
export interface UpdateHostCommandOutput extends UpdateHostOutput, __MetadataBearer {}

/**
 * <p>Updates a specified host with the provided configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // UpdateHostInput
 *   HostArn: "STRING_VALUE", // required
 *   ProviderEndpoint: "STRING_VALUE",
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
 * };
 * const command = new UpdateHostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHostCommandInput - {@link UpdateHostCommandInput}
 * @returns {@link UpdateHostCommandOutput}
 * @see {@link UpdateHostCommandInput} for command's `input` shape.
 * @see {@link UpdateHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Two conflicting operations have been made on the same resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>Resource not found. Verify the ARN for the host resource and try again.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported. Check the connection status and try again.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class UpdateHostCommand extends $Command
  .classBuilder<
    UpdateHostCommandInput,
    UpdateHostCommandOutput,
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
  .s("CodeStar_connections_20191201", "UpdateHost", {})
  .n("CodeStarConnectionsClient", "UpdateHostCommand")
  .f(void 0, void 0)
  .ser(se_UpdateHostCommand)
  .de(de_UpdateHostCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHostInput;
      output: {};
    };
    sdk: {
      input: UpdateHostCommandInput;
      output: UpdateHostCommandOutput;
    };
  };
}
