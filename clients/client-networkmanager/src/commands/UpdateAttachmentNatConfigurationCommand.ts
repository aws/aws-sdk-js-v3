// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAttachmentNatConfigurationRequest,
  UpdateAttachmentNatConfigurationResponse,
} from "../models/models_0";
import { UpdateAttachmentNatConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAttachmentNatConfigurationCommand}.
 */
export interface UpdateAttachmentNatConfigurationCommandInput extends UpdateAttachmentNatConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAttachmentNatConfigurationCommand}.
 */
export interface UpdateAttachmentNatConfigurationCommandOutput extends UpdateAttachmentNatConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the NAT configuration of a core network attachment. You can enable or disable NAT gateway support, specify whether the core network installs system routes for the NAT CIDR blocks, and replace the NAT rules of the attachment. Specify at least one of <code>NatGatewaySupport</code>, <code>NatSystemRouteSupport</code>, or <code>NatGatewayRules</code>.</p>
 *          <p>Only the core network owner can update the NAT configuration of an attachment. The attachment must be in the <code>AVAILABLE</code>, <code>PENDING_ATTACHMENT_ACCEPTANCE</code>, or <code>PENDING_TAG_ACCEPTANCE</code> state. Changes are applied asynchronously, and the attachment is in the <code>UPDATING</code> state while they are applied. If the attachment is pending acceptance, the NAT configuration is stored and is applied after the attachment is accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateAttachmentNatConfigurationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateAttachmentNatConfigurationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateAttachmentNatConfigurationRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   NatGatewaySupport: "ENABLE" || "DISABLE",
 *   NatSystemRouteSupport: true || false,
 *   NatGatewayRules: [ // NatRuleRequestList
 *     { // NatRuleRequest
 *       RuleNumber: Number("int"), // required
 *       MatchSourceCidr: "STRING_VALUE", // required
 *       NatCidr: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateAttachmentNatConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAttachmentNatConfigurationResponse
 * //   AttachmentId: "STRING_VALUE",
 * //   NatGatewaySupport: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PENDING_ATTACHMENT_ACCEPTANCE",
 * //   NatSystemRouteSupport: true || false,
 * //   NatGatewayRules: [ // NatRuleList
 * //     { // NatRule
 * //       RuleNumber: Number("int"),
 * //       MatchSourceCidr: "STRING_VALUE",
 * //       NatCidr: "STRING_VALUE",
 * //       State: "CREATING" || "MODIFYING" || "DELETING" || "ACTIVATED" || "ACTIVATING" || "DEACTIVATED" || "DEACTIVATING" || "FAILED" || "PENDING_ATTACHMENT_ACCEPTANCE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateAttachmentNatConfigurationCommandInput - {@link UpdateAttachmentNatConfigurationCommandInput}
 * @returns {@link UpdateAttachmentNatConfigurationCommandOutput}
 * @see {@link UpdateAttachmentNatConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAttachmentNatConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class UpdateAttachmentNatConfigurationCommand extends command<UpdateAttachmentNatConfigurationCommandInput, UpdateAttachmentNatConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAttachmentNatConfiguration",
  UpdateAttachmentNatConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAttachmentNatConfigurationRequest;
      output: UpdateAttachmentNatConfigurationResponse;
    };
    sdk: {
      input: UpdateAttachmentNatConfigurationCommandInput;
      output: UpdateAttachmentNatConfigurationCommandOutput;
    };
  };
}
