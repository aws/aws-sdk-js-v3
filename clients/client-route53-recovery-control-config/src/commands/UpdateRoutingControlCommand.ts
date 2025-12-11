// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRoutingControlRequest, UpdateRoutingControlResponse } from "../models/models_0";
import type {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { UpdateRoutingControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingControlCommand}.
 */
export interface UpdateRoutingControlCommandInput extends UpdateRoutingControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingControlCommand}.
 */
export interface UpdateRoutingControlCommandOutput extends UpdateRoutingControlResponse, __MetadataBearer {}

/**
 * <p>Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, UpdateRoutingControlCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, UpdateRoutingControlCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // UpdateRoutingControlRequest
 *   RoutingControlArn: "STRING_VALUE", // required
 *   RoutingControlName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRoutingControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoutingControlResponse
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
 * @param UpdateRoutingControlCommandInput - {@link UpdateRoutingControlCommandInput}
 * @returns {@link UpdateRoutingControlCommandOutput}
 * @see {@link UpdateRoutingControlCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingControlCommandOutput} for command's `response` shape.
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
export class UpdateRoutingControlCommand extends $Command
  .classBuilder<
    UpdateRoutingControlCommandInput,
    UpdateRoutingControlCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "UpdateRoutingControl", {})
  .n("Route53RecoveryControlConfigClient", "UpdateRoutingControlCommand")
  .sc(UpdateRoutingControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingControlRequest;
      output: UpdateRoutingControlResponse;
    };
    sdk: {
      input: UpdateRoutingControlCommandInput;
      output: UpdateRoutingControlCommandOutput;
    };
  };
}
