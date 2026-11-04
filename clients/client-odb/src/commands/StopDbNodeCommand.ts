// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopDbNodeInput, StopDbNodeOutput } from "../models/models_0";
import { StopDbNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops the specified DB node in a VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, StopDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, StopDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // StopDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE",
 *   exadbVmClusterId: "STRING_VALUE",
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
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class StopDbNodeCommand extends command<StopDbNodeCommandInput, StopDbNodeCommandOutput>(
  _ep0,
  _mw0,
  "StopDbNode",
  StopDbNode$
) {
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
