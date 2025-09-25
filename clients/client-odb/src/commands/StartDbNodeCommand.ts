// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartDbNodeInput, StartDbNodeOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { StartDbNode } from "../schemas/schemas_9_DbNode";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDbNodeCommand}.
 */
export interface StartDbNodeCommandInput extends StartDbNodeInput {}
/**
 * @public
 *
 * The output of {@link StartDbNodeCommand}.
 */
export interface StartDbNodeCommandOutput extends StartDbNodeOutput, __MetadataBearer {}

/**
 * <p>Starts the specified DB node in a VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, StartDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, StartDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // StartDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 *   dbNodeId: "STRING_VALUE", // required
 * };
 * const command = new StartDbNodeCommand(input);
 * const response = await client.send(command);
 * // { // StartDbNodeOutput
 * //   dbNodeId: "STRING_VALUE", // required
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "STOPPING" || "STOPPED" || "STARTING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDbNodeCommandInput - {@link StartDbNodeCommandInput}
 * @returns {@link StartDbNodeCommandOutput}
 * @see {@link StartDbNodeCommandInput} for command's `input` shape.
 * @see {@link StartDbNodeCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class StartDbNodeCommand extends $Command
  .classBuilder<
    StartDbNodeCommandInput,
    StartDbNodeCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "StartDbNode", {})
  .n("OdbClient", "StartDbNodeCommand")
  .sc(StartDbNode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDbNodeInput;
      output: StartDbNodeOutput;
    };
    sdk: {
      input: StartDbNodeCommandInput;
      output: StartDbNodeCommandOutput;
    };
  };
}
