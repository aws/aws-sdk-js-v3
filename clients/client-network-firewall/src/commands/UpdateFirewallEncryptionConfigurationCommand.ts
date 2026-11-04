// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallEncryptionConfigurationResponse,
} from "../models/models_0";
import { UpdateFirewallEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallEncryptionConfigurationCommand}.
 */
export interface UpdateFirewallEncryptionConfigurationCommandInput extends UpdateFirewallEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallEncryptionConfigurationCommand}.
 */
export interface UpdateFirewallEncryptionConfigurationCommandOutput extends UpdateFirewallEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * A complex type that contains settings for encryption of your firewall resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallEncryptionConfigurationRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new UpdateFirewallEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallEncryptionConfigurationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   UpdateToken: "STRING_VALUE",
 * //   EncryptionConfiguration: { // EncryptionConfiguration
 * //     KeyId: "STRING_VALUE",
 * //     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFirewallEncryptionConfigurationCommandInput - {@link UpdateFirewallEncryptionConfigurationCommandInput}
 * @returns {@link UpdateFirewallEncryptionConfigurationCommandOutput}
 * @see {@link UpdateFirewallEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallEncryptionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceOwnerCheckException} (client fault)
 *
 * Unable to change the resource because your account doesn't own it.
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
export class UpdateFirewallEncryptionConfigurationCommand extends command<UpdateFirewallEncryptionConfigurationCommandInput, UpdateFirewallEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallEncryptionConfiguration",
  UpdateFirewallEncryptionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallEncryptionConfigurationRequest;
      output: UpdateFirewallEncryptionConfigurationResponse;
    };
    sdk: {
      input: UpdateFirewallEncryptionConfigurationCommandInput;
      output: UpdateFirewallEncryptionConfigurationCommandOutput;
    };
  };
}
