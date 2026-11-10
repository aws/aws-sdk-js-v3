// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFirewallPolicyV2Request, DeleteFirewallPolicyV2Response } from "../models/models_0";
import { DeleteFirewallPolicyV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFirewallPolicyV2Command}.
 */
export interface DeleteFirewallPolicyV2CommandInput extends DeleteFirewallPolicyV2Request {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallPolicyV2Command}.
 */
export interface DeleteFirewallPolicyV2CommandOutput extends DeleteFirewallPolicyV2Response, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>FirewallPolicyV2</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallPolicyV2Command } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallPolicyV2Command } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteFirewallPolicyV2Request
 *   FirewallPolicyV2Arn: "STRING_VALUE",
 *   FirewallPolicyV2Name: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallPolicyV2Command(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallPolicyV2Response
 * //   FirewallPolicyV2Response: { // FirewallPolicyV2Response
 * //     FirewallPolicyV2Name: "STRING_VALUE", // required
 * //     FirewallPolicyV2Arn: "STRING_VALUE", // required
 * //     FirewallPolicyV2Id: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     FirewallPolicyV2Status: "ACTIVE" || "DELETING" || "ERROR" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedFirewallRuleCapacity: Number("int"),
 * //     ConsumedIpsRuleCapacity: Number("int"),
 * //     ConsumedIpsDomainCapacity: Number("int"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     Errors: [ // FirewallPolicyErrors
 * //       { // FirewallPolicyError
 * //         Code: "DNS_FIREWALL_RULE_GROUP_UNAVAILABLE" || "ROUTE53_RESOLVED_IP_VALIDATION_MISSING", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFirewallPolicyV2CommandInput - {@link DeleteFirewallPolicyV2CommandInput}
 * @returns {@link DeleteFirewallPolicyV2CommandOutput}
 * @see {@link DeleteFirewallPolicyV2CommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallPolicyV2CommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation you requested isn't supported by Network Firewall. </p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DeleteFirewallPolicyV2Command extends command<DeleteFirewallPolicyV2CommandInput, DeleteFirewallPolicyV2CommandOutput>(
  _ep0,
  _mw0,
  "DeleteFirewallPolicyV2",
  DeleteFirewallPolicyV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallPolicyV2Request;
      output: DeleteFirewallPolicyV2Response;
    };
    sdk: {
      input: DeleteFirewallPolicyV2CommandInput;
      output: DeleteFirewallPolicyV2CommandOutput;
    };
  };
}
