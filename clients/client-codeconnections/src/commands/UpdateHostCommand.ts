// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHostInput, UpdateHostOutput } from "../models/models_0";
import { UpdateHost } from "../schemas/schemas_3_Host";

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
 * import { CodeConnectionsClient, UpdateHostCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, UpdateHostCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
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
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
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
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class UpdateHostCommand extends $Command
  .classBuilder<
    UpdateHostCommandInput,
    UpdateHostCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "UpdateHost", {})
  .n("CodeConnectionsClient", "UpdateHostCommand")
  .sc(UpdateHost)
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
