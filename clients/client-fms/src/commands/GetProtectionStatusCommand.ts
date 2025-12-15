// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/models_0";
import { GetProtectionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProtectionStatusCommand}.
 */
export interface GetProtectionStatusCommandInput extends GetProtectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetProtectionStatusCommand}.
 */
export interface GetProtectionStatusCommandOutput extends GetProtectionStatusResponse, __MetadataBearer {}

/**
 * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
 *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtectionStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtectionStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // GetProtectionStatusRequest
 *   PolicyId: "STRING_VALUE", // required
 *   MemberAccountId: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetProtectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetProtectionStatusResponse
 * //   AdminAccountId: "STRING_VALUE",
 * //   ServiceType: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON",
 * //   Data: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProtectionStatusCommandInput - {@link GetProtectionStatusCommandInput}
 * @returns {@link GetProtectionStatusCommandOutput}
 * @see {@link GetProtectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetProtectionStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
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
export class GetProtectionStatusCommand extends $Command
  .classBuilder<
    GetProtectionStatusCommandInput,
    GetProtectionStatusCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "GetProtectionStatus", {})
  .n("FMSClient", "GetProtectionStatusCommand")
  .sc(GetProtectionStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProtectionStatusRequest;
      output: GetProtectionStatusResponse;
    };
    sdk: {
      input: GetProtectionStatusCommandInput;
      output: GetProtectionStatusCommandOutput;
    };
  };
}
