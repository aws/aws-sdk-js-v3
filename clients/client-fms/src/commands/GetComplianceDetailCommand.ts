// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/models_0";
import { de_GetComplianceDetailCommand, se_GetComplianceDetailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns detailed compliance information about the specified member account. Details
 *       include resources that are in and out of compliance with the specified policy. </p>
 *          <p>The reasons for resources being considered compliant depend on the Firewall Manager policy type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetComplianceDetailCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetComplianceDetailCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
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
 * //         ViolationReason: "WEB_ACL_MISSING_RULE_GROUP" || "RESOURCE_MISSING_WEB_ACL" || "RESOURCE_INCORRECT_WEB_ACL" || "RESOURCE_MISSING_SHIELD_PROTECTION" || "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION" || "RESOURCE_MISSING_SECURITY_GROUP" || "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP" || "SECURITY_GROUP_UNUSED" || "SECURITY_GROUP_REDUNDANT" || "FMS_CREATED_SECURITY_GROUP_EDITED" || "MISSING_FIREWALL" || "MISSING_FIREWALL_SUBNET_IN_AZ" || "MISSING_EXPECTED_ROUTE_TABLE" || "NETWORK_FIREWALL_POLICY_MODIFIED" || "FIREWALL_SUBNET_IS_OUT_OF_SCOPE" || "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE" || "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE" || "UNEXPECTED_FIREWALL_ROUTES" || "UNEXPECTED_TARGET_GATEWAY_ROUTES" || "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY" || "INVALID_ROUTE_CONFIGURATION" || "MISSING_TARGET_GATEWAY" || "INTERNET_TRAFFIC_NOT_INSPECTED" || "BLACK_HOLE_ROUTE_DETECTED" || "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET" || "RESOURCE_MISSING_DNS_FIREWALL" || "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT" || "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT" || "INVALID_NETWORK_ACL_ENTRY" || "WEB_ACL_CONFIGURATION_OR_SCOPE_OF_USE",
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
 *
 * @public
 */
export class GetComplianceDetailCommand extends $Command
  .classBuilder<
    GetComplianceDetailCommandInput,
    GetComplianceDetailCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "GetComplianceDetail", {})
  .n("FMSClient", "GetComplianceDetailCommand")
  .f(void 0, void 0)
  .ser(se_GetComplianceDetailCommand)
  .de(de_GetComplianceDetailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceDetailRequest;
      output: GetComplianceDetailResponse;
    };
    sdk: {
      input: GetComplianceDetailCommandInput;
      output: GetComplianceDetailCommandOutput;
    };
  };
}
