// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRoutingControlRequest, CreateRoutingControlResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { CreateRoutingControl } from "../schemas/schemas_9_Routing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRoutingControlCommand}.
 */
export interface CreateRoutingControlCommandInput extends CreateRoutingControlRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoutingControlCommand}.
 */
export interface CreateRoutingControlCommandOutput extends CreateRoutingControlResponse, __MetadataBearer {}

/**
 * <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateRoutingControlCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateRoutingControlCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // CreateRoutingControlRequest
 *   ClientToken: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE", // required
 *   ControlPanelArn: "STRING_VALUE",
 *   RoutingControlName: "STRING_VALUE", // required
 * };
 * const command = new CreateRoutingControlCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoutingControlResponse
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
 * @param CreateRoutingControlCommandInput - {@link CreateRoutingControlCommandInput}
 * @returns {@link CreateRoutingControlCommandOutput}
 * @see {@link CreateRoutingControlCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingControlCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>402 response - You attempted to create more resources than the service allows based on service quotas.</p>
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
export class CreateRoutingControlCommand extends $Command
  .classBuilder<
    CreateRoutingControlCommandInput,
    CreateRoutingControlCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "CreateRoutingControl", {})
  .n("Route53RecoveryControlConfigClient", "CreateRoutingControlCommand")
  .sc(CreateRoutingControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoutingControlRequest;
      output: CreateRoutingControlResponse;
    };
    sdk: {
      input: CreateRoutingControlCommandInput;
      output: CreateRoutingControlCommandOutput;
    };
  };
}
