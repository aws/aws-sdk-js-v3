// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCrossAccountAuthorizationRequest, DeleteCrossAccountAuthorizationResponse } from "../models/models_0";
import {
  de_DeleteCrossAccountAuthorizationCommand,
  se_DeleteCrossAccountAuthorizationCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCrossAccountAuthorizationCommand}.
 */
export interface DeleteCrossAccountAuthorizationCommandInput extends DeleteCrossAccountAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCrossAccountAuthorizationCommand}.
 */
export interface DeleteCrossAccountAuthorizationCommandOutput
  extends DeleteCrossAccountAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes cross account readiness authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, DeleteCrossAccountAuthorizationCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, DeleteCrossAccountAuthorizationCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // DeleteCrossAccountAuthorizationRequest
 *   CrossAccountAuthorization: "STRING_VALUE", // required
 * };
 * const command = new DeleteCrossAccountAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCrossAccountAuthorizationCommandInput - {@link DeleteCrossAccountAuthorizationCommandInput}
 * @returns {@link DeleteCrossAccountAuthorizationCommandOutput}
 * @see {@link DeleteCrossAccountAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteCrossAccountAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 * @public
 */
export class DeleteCrossAccountAuthorizationCommand extends $Command
  .classBuilder<
    DeleteCrossAccountAuthorizationCommandInput,
    DeleteCrossAccountAuthorizationCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "DeleteCrossAccountAuthorization", {})
  .n("Route53RecoveryReadinessClient", "DeleteCrossAccountAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCrossAccountAuthorizationCommand)
  .de(de_DeleteCrossAccountAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCrossAccountAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: DeleteCrossAccountAuthorizationCommandInput;
      output: DeleteCrossAccountAuthorizationCommandOutput;
    };
  };
}
