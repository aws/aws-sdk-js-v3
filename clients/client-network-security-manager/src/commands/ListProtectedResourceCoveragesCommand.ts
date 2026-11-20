// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProtectedResourceCoveragesInput, ListProtectedResourceCoveragesOutput } from "../models/models_0";
import { ListProtectedResourceCoverages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProtectedResourceCoveragesCommand}.
 */
export interface ListProtectedResourceCoveragesCommandInput extends ListProtectedResourceCoveragesInput {}
/**
 * @public
 *
 * The output of {@link ListProtectedResourceCoveragesCommand}.
 */
export interface ListProtectedResourceCoveragesCommandOutput extends ListProtectedResourceCoveragesOutput, __MetadataBearer {}

/**
 * <p>Lists the AWS Network Security Manager entities that cover the specified protected resource. You can filter the results by entity type and page through them. You must own the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListProtectedResourceCoveragesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListProtectedResourceCoveragesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListProtectedResourceCoveragesInput
 *   resourceArn: "STRING_VALUE", // required
 *   entityType: "Rule" || "Template" || "Policy" || "Deployment" || "Scope",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProtectedResourceCoveragesCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectedResourceCoveragesOutput
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
 * @param ListProtectedResourceCoveragesCommandInput - {@link ListProtectedResourceCoveragesCommandInput}
 * @returns {@link ListProtectedResourceCoveragesCommandOutput}
 * @see {@link ListProtectedResourceCoveragesCommandInput} for command's `input` shape.
 * @see {@link ListProtectedResourceCoveragesCommandOutput} for command's `response` shape.
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
export class ListProtectedResourceCoveragesCommand extends command<ListProtectedResourceCoveragesCommandInput, ListProtectedResourceCoveragesCommandOutput>(
  _ep0,
  _mw0,
  "ListProtectedResourceCoverages",
  ListProtectedResourceCoverages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectedResourceCoveragesInput;
      output: ListProtectedResourceCoveragesOutput;
    };
    sdk: {
      input: ListProtectedResourceCoveragesCommandInput;
      output: ListProtectedResourceCoveragesCommandOutput;
    };
  };
}
