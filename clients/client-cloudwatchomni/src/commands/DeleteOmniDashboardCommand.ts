// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOmniDashboardInput, DeleteOmniDashboardOutput } from "../models/models_0";
import { DeleteOmniDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOmniDashboardCommand}.
 */
export interface DeleteOmniDashboardCommandInput extends DeleteOmniDashboardInput {}
/**
 * @public
 *
 * The output of {@link DeleteOmniDashboardCommand}.
 */
export interface DeleteOmniDashboardCommandOutput extends DeleteOmniDashboardOutput, __MetadataBearer {}

/**
 * Removes a dashboard from a space.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteOmniDashboardCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteOmniDashboardCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteOmniDashboardInput
 *   spaceId: "STRING_VALUE", // required
 *   dashboardId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOmniDashboardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOmniDashboardCommandInput - {@link DeleteOmniDashboardCommandInput}
 * @returns {@link DeleteOmniDashboardCommandOutput}
 * @see {@link DeleteOmniDashboardCommandInput} for command's `input` shape.
 * @see {@link DeleteOmniDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Delete a dashboard
 * ```javascript
 * // The following example removes a dashboard from a space. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   dashboardId: "c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new DeleteOmniDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteOmniDashboardCommand extends command<DeleteOmniDashboardCommandInput, DeleteOmniDashboardCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOmniDashboard",
  DeleteOmniDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOmniDashboardInput;
      output: {};
    };
    sdk: {
      input: DeleteOmniDashboardCommandInput;
      output: DeleteOmniDashboardCommandOutput;
    };
  };
}
