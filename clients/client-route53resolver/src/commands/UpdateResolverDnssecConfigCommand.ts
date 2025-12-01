// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResolverDnssecConfigRequest, UpdateResolverDnssecConfigResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { UpdateResolverDnssecConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverDnssecConfigCommand}.
 */
export interface UpdateResolverDnssecConfigCommandInput extends UpdateResolverDnssecConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverDnssecConfigCommand}.
 */
export interface UpdateResolverDnssecConfigCommandOutput extends UpdateResolverDnssecConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateResolverDnssecConfigRequest
 *   ResourceId: "STRING_VALUE", // required
 *   Validation: "ENABLE" || "DISABLE" || "USE_LOCAL_RESOURCE_SETTING", // required
 * };
 * const command = new UpdateResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverDnssecConfigResponse
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
 * @param UpdateResolverDnssecConfigCommandInput - {@link UpdateResolverDnssecConfigCommandInput}
 * @returns {@link UpdateResolverDnssecConfigCommandOutput}
 * @see {@link UpdateResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverDnssecConfigCommandOutput} for command's `response` shape.
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
export class UpdateResolverDnssecConfigCommand extends $Command
  .classBuilder<
    UpdateResolverDnssecConfigCommandInput,
    UpdateResolverDnssecConfigCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "UpdateResolverDnssecConfig", {})
  .n("Route53ResolverClient", "UpdateResolverDnssecConfigCommand")
  .sc(UpdateResolverDnssecConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverDnssecConfigRequest;
      output: UpdateResolverDnssecConfigResponse;
    };
    sdk: {
      input: UpdateResolverDnssecConfigCommandInput;
      output: UpdateResolverDnssecConfigCommandOutput;
    };
  };
}
