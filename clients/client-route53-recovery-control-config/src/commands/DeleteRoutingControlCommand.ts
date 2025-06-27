// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRoutingControlRequest, DeleteRoutingControlResponse } from "../models/models_0";
import { de_DeleteRoutingControlCommand, se_DeleteRoutingControlCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link DeleteRoutingControlCommand}.
 */
export interface DeleteRoutingControlCommandInput extends DeleteRoutingControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoutingControlCommand}.
 */
export interface DeleteRoutingControlCommandOutput extends DeleteRoutingControlResponse, __MetadataBearer {}

/**
 * <p>Deletes a routing control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DeleteRoutingControlCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DeleteRoutingControlCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DeleteRoutingControlRequest
 *   RoutingControlArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoutingControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoutingControlCommandInput - {@link DeleteRoutingControlCommandInput}
 * @returns {@link DeleteRoutingControlCommandOutput}
 * @see {@link DeleteRoutingControlCommandInput} for command's `input` shape.
 * @see {@link DeleteRoutingControlCommandOutput} for command's `response` shape.
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
export class DeleteRoutingControlCommand extends $Command
  .classBuilder<
    DeleteRoutingControlCommandInput,
    DeleteRoutingControlCommandOutput,
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
  .s("Route53RecoveryControlConfig", "DeleteRoutingControl", {})
  .n("Route53RecoveryControlConfigClient", "DeleteRoutingControlCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRoutingControlCommand)
  .de(de_DeleteRoutingControlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoutingControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoutingControlCommandInput;
      output: DeleteRoutingControlCommandOutput;
    };
  };
}
