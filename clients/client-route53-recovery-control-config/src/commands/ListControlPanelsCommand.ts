// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListControlPanelsRequest, ListControlPanelsResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { ListControlPanels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlPanelsCommand}.
 */
export interface ListControlPanelsCommandInput extends ListControlPanelsRequest {}
/**
 * @public
 *
 * The output of {@link ListControlPanelsCommand}.
 */
export interface ListControlPanelsCommandOutput extends ListControlPanelsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of control panels in an account or in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListControlPanelsCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListControlPanelsCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListControlPanelsRequest
 *   ClusterArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListControlPanelsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlPanelsResponse
 * //   ControlPanels: [ // __listOfControlPanel
 * //     { // ControlPanel
 * //       ClusterArn: "STRING_VALUE",
 * //       ControlPanelArn: "STRING_VALUE",
 * //       DefaultControlPanel: true || false,
 * //       Name: "STRING_VALUE",
 * //       RoutingControlCount: Number("int"),
 * //       Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlPanelsCommandInput - {@link ListControlPanelsCommandInput}
 * @returns {@link ListControlPanelsCommandOutput}
 * @see {@link ListControlPanelsCommandInput} for command's `input` shape.
 * @see {@link ListControlPanelsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListControlPanelsCommand extends $Command
  .classBuilder<
    ListControlPanelsCommandInput,
    ListControlPanelsCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "ListControlPanels", {})
  .n("Route53RecoveryControlConfigClient", "ListControlPanelsCommand")
  .sc(ListControlPanels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlPanelsRequest;
      output: ListControlPanelsResponse;
    };
    sdk: {
      input: ListControlPanelsCommandInput;
      output: ListControlPanelsCommandOutput;
    };
  };
}
