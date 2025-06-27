// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateControlPanelRequest, CreateControlPanelResponse } from "../models/models_0";
import { de_CreateControlPanelCommand, se_CreateControlPanelCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateControlPanelCommand}.
 */
export interface CreateControlPanelCommandInput extends CreateControlPanelRequest {}
/**
 * @public
 *
 * The output of {@link CreateControlPanelCommand}.
 */
export interface CreateControlPanelCommandOutput extends CreateControlPanelResponse, __MetadataBearer {}

/**
 * <p>Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateControlPanelCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // CreateControlPanelRequest
 *   ClientToken: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE", // required
 *   ControlPanelName: "STRING_VALUE", // required
 *   Tags: { // __mapOf__stringMin0Max256PatternS
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateControlPanelCommand(input);
 * const response = await client.send(command);
 * // { // CreateControlPanelResponse
 * //   ControlPanel: { // ControlPanel
 * //     ClusterArn: "STRING_VALUE",
 * //     ControlPanelArn: "STRING_VALUE",
 * //     DefaultControlPanel: true || false,
 * //     Name: "STRING_VALUE",
 * //     RoutingControlCount: Number("int"),
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //     Owner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateControlPanelCommandInput - {@link CreateControlPanelCommandInput}
 * @returns {@link CreateControlPanelCommandOutput}
 * @see {@link CreateControlPanelCommandInput} for command's `input` shape.
 * @see {@link CreateControlPanelCommandOutput} for command's `response` shape.
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
export class CreateControlPanelCommand extends $Command
  .classBuilder<
    CreateControlPanelCommandInput,
    CreateControlPanelCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryControlConfig", "CreateControlPanel", {})
  .n("Route53RecoveryControlConfigClient", "CreateControlPanelCommand")
  .f(void 0, void 0)
  .ser(se_CreateControlPanelCommand)
  .de(de_CreateControlPanelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateControlPanelRequest;
      output: CreateControlPanelResponse;
    };
    sdk: {
      input: CreateControlPanelCommandInput;
      output: CreateControlPanelCommandOutput;
    };
  };
}
