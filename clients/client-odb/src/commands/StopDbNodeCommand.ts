// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopDbNodeInput, StopDbNodeOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { StopDbNode } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDbNodeCommand}.
 */
export interface StopDbNodeCommandInput extends StopDbNodeInput {}
/**
 * @public
 *
 * The output of {@link StopDbNodeCommand}.
 */
export interface StopDbNodeCommandOutput extends StopDbNodeOutput, __MetadataBearer {}

/**
 * <p>Stops the specified DB node in a VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, StopDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, StopDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // StopDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 *   dbNodeId: "STRING_VALUE", // required
 * };
 * const command = new StopDbNodeCommand(input);
 * const response = await client.send(command);
 * // { // StopDbNodeOutput
 * //   dbNodeId: "STRING_VALUE", // required
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "STOPPING" || "STOPPED" || "STARTING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopDbNodeCommandInput - {@link StopDbNodeCommandInput}
 * @returns {@link StopDbNodeCommandOutput}
 * @see {@link StopDbNodeCommandInput} for command's `input` shape.
 * @see {@link StopDbNodeCommandOutput} for command's `response` shape.
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
export class StopDbNodeCommand extends $Command
  .classBuilder<
    StopDbNodeCommandInput,
    StopDbNodeCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "StopDbNode", {})
  .n("OdbClient", "StopDbNodeCommand")
  .sc(StopDbNode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDbNodeInput;
      output: StopDbNodeOutput;
    };
    sdk: {
      input: StopDbNodeCommandInput;
      output: StopDbNodeCommandOutput;
    };
  };
}
