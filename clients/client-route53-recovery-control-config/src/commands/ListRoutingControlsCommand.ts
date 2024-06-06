// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoutingControlsRequest, ListRoutingControlsResponse } from "../models/models_0";
import { de_ListRoutingControlsCommand, se_ListRoutingControlsCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListRoutingControlsCommand}.
 */
export interface ListRoutingControlsCommandInput extends ListRoutingControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingControlsCommand}.
 */
export interface ListRoutingControlsCommandOutput extends ListRoutingControlsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListRoutingControlsCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListRoutingControlsCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListRoutingControlsRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRoutingControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingControlsResponse
 * //   NextToken: "STRING_VALUE",
 * //   RoutingControls: [ // __listOfRoutingControl
 * //     { // RoutingControl
 * //       ControlPanelArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RoutingControlArn: "STRING_VALUE",
 * //       Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRoutingControlsCommandInput - {@link ListRoutingControlsCommandInput}
 * @returns {@link ListRoutingControlsCommandOutput}
 * @see {@link ListRoutingControlsCommandInput} for command's `input` shape.
 * @see {@link ListRoutingControlsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
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
 * @public
 */
export class ListRoutingControlsCommand extends $Command
  .classBuilder<
    ListRoutingControlsCommandInput,
    ListRoutingControlsCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryControlConfig", "ListRoutingControls", {})
  .n("Route53RecoveryControlConfigClient", "ListRoutingControlsCommand")
  .f(void 0, void 0)
  .ser(se_ListRoutingControlsCommand)
  .de(de_ListRoutingControlsCommand)
  .build() {}
