// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEntityCoveragesInput, ListEntityCoveragesOutput } from "../models/models_0";
import { ListEntityCoverages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEntityCoveragesCommand}.
 */
export interface ListEntityCoveragesCommandInput extends ListEntityCoveragesInput {}
/**
 * @public
 *
 * The output of {@link ListEntityCoveragesCommand}.
 */
export interface ListEntityCoveragesCommandOutput extends ListEntityCoveragesOutput, __MetadataBearer {}

/**
 * <p>Lists the protected resources that the specified Network Security Manager entity covers. You can filter the results to the resources owned by a single account and page through them. You must call this operation from the administrator account that owns the Network Security Manager entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListEntityCoveragesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListEntityCoveragesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListEntityCoveragesInput
 *   entityArn: "STRING_VALUE", // required
 *   resourceOwnerAccountId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEntityCoveragesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityCoveragesOutput
 * //   nextToken: "STRING_VALUE",
 * //   resourceCoverages: [ // ResourceCoverageSummaryList // required
 * //     { // ResourceCoverageSummary
 * //       resourceArn: "STRING_VALUE",
 * //       entityType: "Rule" || "Template" || "Policy" || "Deployment" || "Scope",
 * //       entityArn: "STRING_VALUE",
 * //       resourceOwnerAccountId: "STRING_VALUE",
 * //       resourceType: "AWS::ApiGateway::Stage" || "AWS::CloudFront::Distribution" || "AWS::EC2::EIP" || "AWS::ElasticLoadBalancingV2::LoadBalancer::application" || "AWS::ElasticLoadBalancing::LoadBalancer" || "AWS::EC2::VPC" || "AWS::EC2::Subnet",
 * //       firewallType: "WAF" || "SHIELD_ADVANCED" || "IGW_FIREWALL",
 * //       coverageStatus: "IN_EFFECT" || "SUPERSEDED",
 * //       deploymentArns: [ // DeploymentArnSet
 * //         "STRING_VALUE",
 * //       ],
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEntityCoveragesCommandInput - {@link ListEntityCoveragesCommandInput}
 * @returns {@link ListEntityCoveragesCommandOutput}
 * @see {@link ListEntityCoveragesCommandInput} for command's `input` shape.
 * @see {@link ListEntityCoveragesCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @public
 */
export class ListEntityCoveragesCommand extends command<ListEntityCoveragesCommandInput, ListEntityCoveragesCommandOutput>(
  _ep0,
  _mw0,
  "ListEntityCoverages",
  ListEntityCoverages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntityCoveragesInput;
      output: ListEntityCoveragesOutput;
    };
    sdk: {
      input: ListEntityCoveragesCommandInput;
      output: ListEntityCoveragesCommandOutput;
    };
  };
}
