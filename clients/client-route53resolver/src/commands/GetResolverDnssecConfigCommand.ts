// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResolverDnssecConfigRequest, GetResolverDnssecConfigResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverDnssecConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResolverDnssecConfigCommand}.
 */
export interface GetResolverDnssecConfigCommandInput extends GetResolverDnssecConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverDnssecConfigCommand}.
 */
export interface GetResolverDnssecConfigCommandOutput extends GetResolverDnssecConfigResponse, __MetadataBearer {}

/**
 * <p>Gets DNSSEC validation information for a specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverDnssecConfigRequest
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverDnssecConfigResponse
 * //   ResolverDNSSECConfig: { // ResolverDnssecConfig
 * //     Id: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ValidationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResolverDnssecConfigCommandInput - {@link GetResolverDnssecConfigCommandInput}
 * @returns {@link GetResolverDnssecConfigCommandOutput}
 * @see {@link GetResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link GetResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class GetResolverDnssecConfigCommand extends $Command
  .classBuilder<
    GetResolverDnssecConfigCommandInput,
    GetResolverDnssecConfigCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "GetResolverDnssecConfig", {})
  .n("Route53ResolverClient", "GetResolverDnssecConfigCommand")
  .sc(GetResolverDnssecConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResolverDnssecConfigRequest;
      output: GetResolverDnssecConfigResponse;
    };
    sdk: {
      input: GetResolverDnssecConfigCommandInput;
      output: GetResolverDnssecConfigCommandOutput;
    };
  };
}
