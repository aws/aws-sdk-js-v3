// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRoutingControlRequest, DescribeRoutingControlResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { DescribeRoutingControl } from "../schemas/schemas_9_Routing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRoutingControlCommand}.
 */
export interface DescribeRoutingControlCommandInput extends DescribeRoutingControlRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoutingControlCommand}.
 */
export interface DescribeRoutingControlCommandOutput extends DescribeRoutingControlResponse, __MetadataBearer {}

/**
 * <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeRoutingControlCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeRoutingControlCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DescribeRoutingControlRequest
 *   RoutingControlArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoutingControlCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoutingControlResponse
 * //   RoutingControl: { // RoutingControl
 * //     ControlPanelArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RoutingControlArn: "STRING_VALUE",
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //     Owner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRoutingControlCommandInput - {@link DescribeRoutingControlCommandInput}
 * @returns {@link DescribeRoutingControlCommandOutput}
 * @see {@link DescribeRoutingControlCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingControlCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>409 response - ConflictException. You might be using a predefined variable.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>429 response - LimitExceededException or TooManyRequestsException.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 *
 * @public
 */
export class DescribeRoutingControlCommand extends $Command
  .classBuilder<
    DescribeRoutingControlCommandInput,
    DescribeRoutingControlCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "DescribeRoutingControl", {})
  .n("Route53RecoveryControlConfigClient", "DescribeRoutingControlCommand")
  .sc(DescribeRoutingControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRoutingControlRequest;
      output: DescribeRoutingControlResponse;
    };
    sdk: {
      input: DescribeRoutingControlCommandInput;
      output: DescribeRoutingControlCommandOutput;
    };
  };
}
