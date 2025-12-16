// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateResolverQueryLogConfigRequest,
  DisassociateResolverQueryLogConfigResponse,
} from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { DisassociateResolverQueryLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateResolverQueryLogConfigCommand}.
 */
export interface DisassociateResolverQueryLogConfigCommandInput extends DisassociateResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResolverQueryLogConfigCommand}.
 */
export interface DisassociateResolverQueryLogConfigCommandOutput
  extends DisassociateResolverQueryLogConfigResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a VPC from a query logging configuration.</p>
 *          <note>
 *             <p>Before you can delete a query logging configuration, you must first disassociate all VPCs
 * 				from the configuration. If you used Resource Access Manager (RAM) to share a
 * 				query logging configuration with other accounts, VPCs can be disassociated from the
 * 				configuration in the following ways:</p>
 *             <ul>
 *                <li>
 *                   <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p>
 *                </li>
 *                <li>
 *                   <p>You can stop sharing the configuration.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // DisassociateResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResolverQueryLogConfigResponse
 * //   ResolverQueryLogConfigAssociation: { // ResolverQueryLogConfigAssociation
 * //     Id: "STRING_VALUE",
 * //     ResolverQueryLogConfigId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "ACTION_NEEDED" || "DELETING" || "FAILED",
 * //     Error: "NONE" || "DESTINATION_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //     ErrorMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateResolverQueryLogConfigCommandInput - {@link DisassociateResolverQueryLogConfigCommandInput}
 * @returns {@link DisassociateResolverQueryLogConfigCommandOutput}
 * @see {@link DisassociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
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
export class DisassociateResolverQueryLogConfigCommand extends $Command
  .classBuilder<
    DisassociateResolverQueryLogConfigCommandInput,
    DisassociateResolverQueryLogConfigCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "DisassociateResolverQueryLogConfig", {})
  .n("Route53ResolverClient", "DisassociateResolverQueryLogConfigCommand")
  .sc(DisassociateResolverQueryLogConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateResolverQueryLogConfigRequest;
      output: DisassociateResolverQueryLogConfigResponse;
    };
    sdk: {
      input: DisassociateResolverQueryLogConfigCommandInput;
      output: DisassociateResolverQueryLogConfigCommandOutput;
    };
  };
}
