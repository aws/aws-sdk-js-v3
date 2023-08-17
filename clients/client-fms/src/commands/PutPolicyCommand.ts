// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutPolicyRequest, PutPolicyResponse } from "../models/models_0";
import { de_PutPolicyCommand, se_PutPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandInput extends PutPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandOutput extends PutPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Firewall Manager policy.</p>
 *          <p>Firewall Manager provides the following types of policies: </p>
 *          <ul>
 *             <li>
 *                <p>An WAF policy (type WAFV2), which defines rule groups to run first in the
 *               corresponding WAF web ACL and rule groups to run last in the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>An WAF Classic policy (type WAF), which defines a rule group. </p>
 *             </li>
 *             <li>
 *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
 *           accounts and resources.</p>
 *             </li>
 *             <li>
 *                <p>A security group policy, which manages VPC security groups across your Amazon Web Services
 *           organization. </p>
 *             </li>
 *             <li>
 *                <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified
 *           Amazon VPCs.</p>
 *             </li>
 *             <li>
 *                <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for
 *             specified VPCs.</p>
 *             </li>
 *          </ul>
 *          <p>Each policy is specific to one of the types. If you want to enforce more than one
 *       policy type across accounts, create multiple policies. You can create multiple
 *       policies for each type.</p>
 *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
 *         information about subscribing to Shield Advanced, see
 *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // PutPolicyRequest
 *   Policy: { // Policy
 *     PolicyId: "STRING_VALUE",
 *     PolicyName: "STRING_VALUE", // required
 *     PolicyUpdateToken: "STRING_VALUE",
 *     SecurityServicePolicyData: { // SecurityServicePolicyData
 *       Type: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL", // required
 *       ManagedServiceData: "STRING_VALUE",
 *       PolicyOption: { // PolicyOption
 *         NetworkFirewallPolicy: { // NetworkFirewallPolicy
 *           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 *         },
 *         ThirdPartyFirewallPolicy: { // ThirdPartyFirewallPolicy
 *           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 *         },
 *       },
 *     },
 *     ResourceType: "STRING_VALUE", // required
 *     ResourceTypeList: [ // ResourceTypeList
 *       "STRING_VALUE",
 *     ],
 *     ResourceTags: [ // ResourceTags
 *       { // ResourceTag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     ExcludeResourceTags: true || false, // required
 *     RemediationEnabled: true || false, // required
 *     DeleteUnusedFMManagedResources: true || false,
 *     IncludeMap: { // CustomerPolicyScopeMap
 *       "<keys>": [ // CustomerPolicyScopeIdList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ExcludeMap: {
 *       "<keys>": [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ResourceSetIds: [ // ResourceSetIds
 *       "STRING_VALUE",
 *     ],
 *     PolicyDescription: "STRING_VALUE",
 *     PolicyStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutPolicyResponse
 * //   Policy: { // Policy
 * //     PolicyId: "STRING_VALUE",
 * //     PolicyName: "STRING_VALUE", // required
 * //     PolicyUpdateToken: "STRING_VALUE",
 * //     SecurityServicePolicyData: { // SecurityServicePolicyData
 * //       Type: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL", // required
 * //       ManagedServiceData: "STRING_VALUE",
 * //       PolicyOption: { // PolicyOption
 * //         NetworkFirewallPolicy: { // NetworkFirewallPolicy
 * //           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 * //         },
 * //         ThirdPartyFirewallPolicy: { // ThirdPartyFirewallPolicy
 * //           FirewallDeploymentModel: "CENTRALIZED" || "DISTRIBUTED",
 * //         },
 * //       },
 * //     },
 * //     ResourceType: "STRING_VALUE", // required
 * //     ResourceTypeList: [ // ResourceTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceTags: [ // ResourceTags
 * //       { // ResourceTag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ExcludeResourceTags: true || false, // required
 * //     RemediationEnabled: true || false, // required
 * //     DeleteUnusedFMManagedResources: true || false,
 * //     IncludeMap: { // CustomerPolicyScopeMap
 * //       "<keys>": [ // CustomerPolicyScopeIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ExcludeMap: {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ResourceSetIds: [ // ResourceSetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     PolicyDescription: "STRING_VALUE",
 * //     PolicyStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //   },
 * //   PolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutPolicyCommandInput - {@link PutPolicyCommandInput}
 * @returns {@link PutPolicyCommandOutput}
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The value of the <code>Type</code> parameter is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class PutPolicyCommand extends $Command<PutPolicyCommandInput, PutPolicyCommandOutput, FMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPolicyCommandInput, PutPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPolicyCommandOutput> {
    return de_PutPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
