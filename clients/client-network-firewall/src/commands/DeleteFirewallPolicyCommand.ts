// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFirewallPolicyRequest, DeleteFirewallPolicyResponse } from "../models/models_0";
import { DeleteFirewallPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFirewallPolicyCommand}.
 */
export interface DeleteFirewallPolicyCommandInput extends DeleteFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallPolicyCommand}.
 */
export interface DeleteFirewallPolicyCommandOutput extends DeleteFirewallPolicyResponse, __MetadataBearer {}

/**
 * Deletes the specified FirewallPolicy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DeleteFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE",
 *   FirewallPolicyArn: "STRING_VALUE",
 * };
 * const command = new DeleteFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallPolicyResponse
 * //   FirewallPolicyResponse: { // FirewallPolicyResponse
 * //     FirewallPolicyName: "STRING_VALUE", // required
 * //     FirewallPolicyArn: "STRING_VALUE", // required
 * //     FirewallPolicyId: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     FirewallPolicyStatus: "ACTIVE" || "DELETING" || "ERROR" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedStatelessRuleCapacity: Number("int"),
 * //     ConsumedStatefulRuleCapacity: Number("int"),
 * //     ConsumedStatefulDomainCapacity: Number("int"),
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
 * @param DeleteFirewallPolicyCommandInput - {@link DeleteFirewallPolicyCommandInput}
 * @returns {@link DeleteFirewallPolicyCommandOutput}
 * @see {@link DeleteFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because it's not valid. For example, you might have tried to delete a rule group or firewall policy that's in use.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation you requested isn't supported by Network Firewall.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class DeleteFirewallPolicyCommand extends command<DeleteFirewallPolicyCommandInput, DeleteFirewallPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFirewallPolicy",
  DeleteFirewallPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallPolicyRequest;
      output: DeleteFirewallPolicyResponse;
    };
    sdk: {
      input: DeleteFirewallPolicyCommandInput;
      output: DeleteFirewallPolicyCommandOutput;
    };
  };
}
