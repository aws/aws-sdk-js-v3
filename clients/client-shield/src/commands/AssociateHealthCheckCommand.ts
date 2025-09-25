// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateHealthCheckRequest, AssociateHealthCheckResponse } from "../models/models_0";
import { AssociateHealthCheck } from "../schemas/schemas_4_Resource";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateHealthCheckCommand}.
 */
export interface AssociateHealthCheckCommandInput extends AssociateHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link AssociateHealthCheckCommand}.
 */
export interface AssociateHealthCheckCommandOutput extends AssociateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response.  </p>
 *          <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateHealthCheckCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // AssociateHealthCheckRequest
 *   ProtectionId: "STRING_VALUE", // required
 *   HealthCheckArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateHealthCheckCommandInput - {@link AssociateHealthCheckCommandInput}
 * @returns {@link AssociateHealthCheckCommandOutput}
 * @see {@link AssociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link AssociateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 *
 * @throws {@link LimitsExceededException} (client fault)
 *  <p>Exception that indicates that the operation would exceed a limit.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class AssociateHealthCheckCommand extends $Command
  .classBuilder<
    AssociateHealthCheckCommandInput,
    AssociateHealthCheckCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "AssociateHealthCheck", {})
  .n("ShieldClient", "AssociateHealthCheckCommand")
  .sc(AssociateHealthCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateHealthCheckRequest;
      output: {};
    };
    sdk: {
      input: AssociateHealthCheckCommandInput;
      output: AssociateHealthCheckCommandOutput;
    };
  };
}
