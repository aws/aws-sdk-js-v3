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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/models_0";
import { de_GetComplianceDetailCommand, se_GetComplianceDetailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceDetailCommand}.
 */
export interface GetComplianceDetailCommandInput extends GetComplianceDetailRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceDetailCommand}.
 */
export interface GetComplianceDetailCommandOutput extends GetComplianceDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed compliance information about the specified member account. Details
 *       include resources that are in and out of compliance with the specified policy. </p>
 *          <ul>
 *             <li>
 *                <p>Resources are
 *               considered noncompliant for WAF and Shield Advanced policies if the specified policy has
 *               not been applied to them.</p>
 *             </li>
 *             <li>
 *                <p>Resources are considered noncompliant for security group policies if
 *               they are in scope of the policy, they violate one or more of the policy rules, and remediation
 *               is disabled or not possible.</p>
 *             </li>
 *             <li>
 *                <p>Resources are considered noncompliant for Network Firewall policies
 *                 if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
 *                 if a subnet created by the Firewall Manager doesn't have the expected route table,
 *                 and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p>
 *             </li>
 *             <li>
 *                <p>Resources are considered noncompliant for DNS Firewall policies
 *               if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetComplianceDetailCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetComplianceDetailCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetComplianceDetailRequest
 *   PolicyId: "STRING_VALUE", // required
 *   MemberAccount: "STRING_VALUE", // required
 * };
 * const command = new GetComplianceDetailCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceDetailResponse
 * //   PolicyComplianceDetail: { // PolicyComplianceDetail
 * //     PolicyOwner: "STRING_VALUE",
 * //     PolicyId: "STRING_VALUE",
 * //     MemberAccount: "STRING_VALUE",
 * //     Violators: [ // ComplianceViolators
 * //       { // ComplianceViolator
 * //         ResourceId: "STRING_VALUE",
 * //         ViolationReason: "WEB_ACL_MISSING_RULE_GROUP" || "RESOURCE_MISSING_WEB_ACL" || "RESOURCE_INCORRECT_WEB_ACL" || "RESOURCE_MISSING_SHIELD_PROTECTION" || "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION" || "RESOURCE_MISSING_SECURITY_GROUP" || "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP" || "SECURITY_GROUP_UNUSED" || "SECURITY_GROUP_REDUNDANT" || "FMS_CREATED_SECURITY_GROUP_EDITED" || "MISSING_FIREWALL" || "MISSING_FIREWALL_SUBNET_IN_AZ" || "MISSING_EXPECTED_ROUTE_TABLE" || "NETWORK_FIREWALL_POLICY_MODIFIED" || "FIREWALL_SUBNET_IS_OUT_OF_SCOPE" || "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE" || "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE" || "UNEXPECTED_FIREWALL_ROUTES" || "UNEXPECTED_TARGET_GATEWAY_ROUTES" || "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY" || "INVALID_ROUTE_CONFIGURATION" || "MISSING_TARGET_GATEWAY" || "INTERNET_TRAFFIC_NOT_INSPECTED" || "BLACK_HOLE_ROUTE_DETECTED" || "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET" || "RESOURCE_MISSING_DNS_FIREWALL" || "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT" || "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT",
 * //         ResourceType: "STRING_VALUE",
 * //         Metadata: { // ComplianceViolatorMetadata
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     EvaluationLimitExceeded: true || false,
 * //     ExpiredAt: new Date("TIMESTAMP"),
 * //     IssueInfoMap: { // IssueInfoMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComplianceDetailCommandInput - {@link GetComplianceDetailCommandInput}
 * @returns {@link GetComplianceDetailCommandOutput}
 * @see {@link GetComplianceDetailCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class GetComplianceDetailCommand extends $Command<
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
  FMSClientResolvedConfig
> {
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
  constructor(readonly input: GetComplianceDetailCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceDetailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetComplianceDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSFMS_20180101",
        operation: "GetComplianceDetail",
      },
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
  private serialize(input: GetComplianceDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComplianceDetailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComplianceDetailCommandOutput> {
    return de_GetComplianceDetailCommand(output, context);
  }
}
