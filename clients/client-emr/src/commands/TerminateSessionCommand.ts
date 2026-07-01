// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TerminateSessionInput, TerminateSessionOutput } from "../models/models_0";
import { TerminateSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TerminateSessionCommand}.
 */
export interface TerminateSessionCommandInput extends TerminateSessionInput {}
/**
 * @public
 *
 * The output of {@link TerminateSessionCommand}.
 */
export interface TerminateSessionCommandOutput extends TerminateSessionOutput, __MetadataBearer {}

/**
 * <p>Terminates an active session. After you call this operation, the session enters the <code>TERMINATING</code> state and then transitions to <code>TERMINATED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateSessionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateSessionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // TerminateSessionInput
 *   ClusterId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * // { // TerminateSessionOutput
 * //   ClusterId: "STRING_VALUE", // required
 * //   SessionId: "STRING_VALUE", // required
 * //   State: "SUBMITTED" || "STARTING" || "STARTED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param TerminateSessionCommandInput - {@link TerminateSessionCommandInput}
 * @returns {@link TerminateSessionCommandOutput}
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class TerminateSessionCommand extends command<TerminateSessionCommandInput, TerminateSessionCommandOutput>(
  _ep0,
  _mw0,
  "TerminateSession",
  TerminateSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateSessionInput;
      output: TerminateSessionOutput;
    };
    sdk: {
      input: TerminateSessionCommandInput;
      output: TerminateSessionCommandOutput;
    };
  };
}
