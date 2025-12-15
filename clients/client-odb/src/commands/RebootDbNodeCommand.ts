// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RebootDbNodeInput, RebootDbNodeOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { RebootDbNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootDbNodeCommand}.
 */
export interface RebootDbNodeCommandInput extends RebootDbNodeInput {}
/**
 * @public
 *
 * The output of {@link RebootDbNodeCommand}.
 */
export interface RebootDbNodeCommandOutput extends RebootDbNodeOutput, __MetadataBearer {}

/**
 * <p>Reboots the specified DB node in a VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, RebootDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, RebootDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // RebootDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 *   dbNodeId: "STRING_VALUE", // required
 * };
 * const command = new RebootDbNodeCommand(input);
 * const response = await client.send(command);
 * // { // RebootDbNodeOutput
 * //   dbNodeId: "STRING_VALUE", // required
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "STOPPING" || "STOPPED" || "STARTING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RebootDbNodeCommandInput - {@link RebootDbNodeCommandInput}
 * @returns {@link RebootDbNodeCommandOutput}
 * @see {@link RebootDbNodeCommandInput} for command's `input` shape.
 * @see {@link RebootDbNodeCommandOutput} for command's `response` shape.
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
export class RebootDbNodeCommand extends $Command
  .classBuilder<
    RebootDbNodeCommandInput,
    RebootDbNodeCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "RebootDbNode", {})
  .n("OdbClient", "RebootDbNodeCommand")
  .sc(RebootDbNode$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootDbNodeInput;
      output: RebootDbNodeOutput;
    };
    sdk: {
      input: RebootDbNodeCommandInput;
      output: RebootDbNodeCommandOutput;
    };
  };
}
