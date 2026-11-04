// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRuleGroupMetadataRequest, DescribeRuleGroupMetadataResponse } from "../models/models_0";
import { DescribeRuleGroupMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandInput extends DescribeRuleGroupMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandOutput extends DescribeRuleGroupMetadataResponse, __MetadataBearer {}

/**
 * High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeRuleGroupMetadataRequest
 *   RuleGroupName: "STRING_VALUE",
 *   RuleGroupArn: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL" || "STATEFUL_DOMAIN",
 * };
 * const command = new DescribeRuleGroupMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupMetadataResponse
 * //   RuleGroupArn: "STRING_VALUE", // required
 * //   RuleGroupName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Type: "STATELESS" || "STATEFUL" || "STATEFUL_DOMAIN",
 * //   Capacity: Number("int"),
 * //   StatefulRuleOptions: { // StatefulRuleOptions
 * //     RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   VendorName: "STRING_VALUE",
 * //   ProductId: "STRING_VALUE",
 * //   ListingName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupMetadataCommandInput - {@link DescribeRuleGroupMetadataCommandInput}
 * @returns {@link DescribeRuleGroupMetadataCommandOutput}
 * @see {@link DescribeRuleGroupMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupMetadataCommandOutput} for command's `response` shape.
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
export class DescribeRuleGroupMetadataCommand extends command<DescribeRuleGroupMetadataCommandInput, DescribeRuleGroupMetadataCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRuleGroupMetadata",
  DescribeRuleGroupMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleGroupMetadataRequest;
      output: DescribeRuleGroupMetadataResponse;
    };
    sdk: {
      input: DescribeRuleGroupMetadataCommandInput;
      output: DescribeRuleGroupMetadataCommandOutput;
    };
  };
}
