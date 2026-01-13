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
import type { DeleteHostInput, DeleteHostOutput } from "../models/models_0";
import { DeleteHost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandInput extends DeleteHostInput {}
/**
 * @public
 *
 * The output of {@link DeleteHostCommand}.
 */
export interface DeleteHostCommandOutput extends DeleteHostOutput, __MetadataBearer {}

/**
 * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p>
 *          <note>
 *             <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, DeleteHostCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, DeleteHostCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // DeleteHostInput
 *   HostArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHostCommandInput - {@link DeleteHostCommandInput}
 * @returns {@link DeleteHostCommandOutput}
 * @see {@link DeleteHostCommandInput} for command's `input` shape.
 * @see {@link DeleteHostCommandOutput} for command's `response` shape.
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
export class DeleteHostCommand extends $Command
  .classBuilder<
    DeleteHostCommandInput,
    DeleteHostCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "DeleteHost", {})
  .n("CodeConnectionsClient", "DeleteHostCommand")
  .sc(DeleteHost$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHostInput;
      output: {};
    };
    sdk: {
      input: DeleteHostCommandInput;
      output: DeleteHostCommandOutput;
    };
  };
}
