// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProbeInput, DeleteProbeOutput } from "../models/models_0";
import { DeleteProbe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProbeCommand}.
 */
export interface DeleteProbeCommandInput extends DeleteProbeInput {}
/**
 * @public
 *
 * The output of {@link DeleteProbeCommand}.
 */
export interface DeleteProbeCommandOutput extends DeleteProbeOutput, __MetadataBearer {}

/**
 * Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing fees for that probe.
 *
 * This action requires both the `monitorName` and `probeId` parameters. Run `ListMonitors` to get a list of monitor names. Run `GetMonitor` to get a list of probes and probe IDs. You can only delete a single probe at a time using this action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, DeleteProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, DeleteProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // DeleteProbeInput
 *   monitorName: "STRING_VALUE", // required
 *   probeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProbeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProbeCommandInput - {@link DeleteProbeCommandInput}
 * @returns {@link DeleteProbeCommandOutput}
 * @see {@link DeleteProbeCommandInput} for command's `input` shape.
 * @see {@link DeleteProbeCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link NetworkMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkMonitor service.
 *
 * @public
 */
export class DeleteProbeCommand extends command<DeleteProbeCommandInput, DeleteProbeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProbe",
  DeleteProbe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProbeInput;
      output: {};
    };
    sdk: {
      input: DeleteProbeCommandInput;
      output: DeleteProbeCommandOutput;
    };
  };
}
