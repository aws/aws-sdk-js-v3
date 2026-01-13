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
import type { DeleteConnectionInput, DeleteConnectionOutput } from "../models/models_0";
import { DeleteConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandInput extends DeleteConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends DeleteConnectionOutput, __MetadataBearer {}

/**
 * <p>The connection to be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, DeleteConnectionCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, DeleteConnectionCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // DeleteConnectionInput
 *   ConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionCommandInput - {@link DeleteConnectionCommandInput}
 * @returns {@link DeleteConnectionCommandOutput}
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionCommand extends $Command
  .classBuilder<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "DeleteConnection", {})
  .n("CodeConnectionsClient", "DeleteConnectionCommand")
  .sc(DeleteConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionInput;
      output: {};
    };
    sdk: {
      input: DeleteConnectionCommandInput;
      output: DeleteConnectionCommandOutput;
    };
  };
}
