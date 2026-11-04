// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RebootDbNodeInput, RebootDbNodeOutput } from "../models/models_0";
import { RebootDbNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Reboots the specified DB node in a VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, RebootDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, RebootDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // RebootDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE",
 *   exadbVmClusterId: "STRING_VALUE",
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
export class RebootDbNodeCommand extends command<RebootDbNodeCommandInput, RebootDbNodeCommandOutput>(
  _ep0,
  _mw0,
  "RebootDbNode",
  RebootDbNode$
) {
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
