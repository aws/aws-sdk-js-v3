// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateHealthCheckRequest, DisassociateHealthCheckResponse } from "../models/models_0";
import { DisassociateHealthCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateHealthCheckCommand}.
 */
export interface DisassociateHealthCheckCommandInput extends DisassociateHealthCheckRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateHealthCheckCommand}.
 */
export interface DisassociateHealthCheckCommandOutput extends DisassociateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p>
 *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateHealthCheckCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateHealthCheckCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // DisassociateHealthCheckRequest
 *   ProtectionId: "STRING_VALUE", // required
 *   HealthCheckArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateHealthCheckCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateHealthCheckCommandInput - {@link DisassociateHealthCheckCommandInput}
 * @returns {@link DisassociateHealthCheckCommandOutput}
 * @see {@link DisassociateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link DisassociateHealthCheckCommandOutput} for command's `response` shape.
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
export class DisassociateHealthCheckCommand extends command<DisassociateHealthCheckCommandInput, DisassociateHealthCheckCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateHealthCheck",
  DisassociateHealthCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateHealthCheckRequest;
      output: {};
    };
    sdk: {
      input: DisassociateHealthCheckCommandInput;
      output: DisassociateHealthCheckCommandOutput;
    };
  };
}
