// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFirewallAnalysisSettingsRequest, UpdateFirewallAnalysisSettingsResponse } from "../models/models_0";
import { UpdateFirewallAnalysisSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallAnalysisSettingsCommand}.
 */
export interface UpdateFirewallAnalysisSettingsCommandInput extends UpdateFirewallAnalysisSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallAnalysisSettingsCommand}.
 */
export interface UpdateFirewallAnalysisSettingsCommandOutput extends UpdateFirewallAnalysisSettingsResponse, __MetadataBearer {}

/**
 * Enables specific types of firewall analysis on a specific firewall you define.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallAnalysisSettingsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallAnalysisSettingsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallAnalysisSettingsRequest
 *   EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 *     "TLS_SNI" || "HTTP_HOST",
 *   ],
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   UpdateToken: "STRING_VALUE",
 * };
 * const command = new UpdateFirewallAnalysisSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallAnalysisSettingsResponse
 * //   EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 * //     "TLS_SNI" || "HTTP_HOST",
 * //   ],
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFirewallAnalysisSettingsCommandInput - {@link UpdateFirewallAnalysisSettingsCommandInput}
 * @returns {@link UpdateFirewallAnalysisSettingsCommandOutput}
 * @see {@link UpdateFirewallAnalysisSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallAnalysisSettingsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * The token you provided is stale or isn't valid for the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class UpdateFirewallAnalysisSettingsCommand extends command<UpdateFirewallAnalysisSettingsCommandInput, UpdateFirewallAnalysisSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallAnalysisSettings",
  UpdateFirewallAnalysisSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallAnalysisSettingsRequest;
      output: UpdateFirewallAnalysisSettingsResponse;
    };
    sdk: {
      input: UpdateFirewallAnalysisSettingsCommandInput;
      output: UpdateFirewallAnalysisSettingsCommandOutput;
    };
  };
}
