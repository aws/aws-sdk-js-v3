// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeControlPanelRequest, DescribeControlPanelResponse } from "../models/models_0";
import type {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { DescribeControlPanel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeControlPanelCommand}.
 */
export interface DescribeControlPanelCommandInput extends DescribeControlPanelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeControlPanelCommand}.
 */
export interface DescribeControlPanelCommandOutput extends DescribeControlPanelResponse, __MetadataBearer {}

/**
 * <p>Displays details about a control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeControlPanelCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DescribeControlPanelRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeControlPanelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeControlPanelResponse
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
 * @param DescribeControlPanelCommandInput - {@link DescribeControlPanelCommandInput}
 * @returns {@link DescribeControlPanelCommandOutput}
 * @see {@link DescribeControlPanelCommandInput} for command's `input` shape.
 * @see {@link DescribeControlPanelCommandOutput} for command's `response` shape.
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
export class DescribeControlPanelCommand extends $Command
  .classBuilder<
    DescribeControlPanelCommandInput,
    DescribeControlPanelCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "DescribeControlPanel", {})
  .n("Route53RecoveryControlConfigClient", "DescribeControlPanelCommand")
  .sc(DescribeControlPanel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeControlPanelRequest;
      output: DescribeControlPanelResponse;
    };
    sdk: {
      input: DescribeControlPanelCommandInput;
      output: DescribeControlPanelCommandOutput;
    };
  };
}
