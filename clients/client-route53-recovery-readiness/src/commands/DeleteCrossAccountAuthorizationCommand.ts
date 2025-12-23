// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteCrossAccountAuthorizationRequest,
  DeleteCrossAccountAuthorizationResponse,
} from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { DeleteCrossAccountAuthorization$ } from "../schemas/schemas_0";

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
export interface DeleteCrossAccountAuthorizationCommandOutput extends DeleteCrossAccountAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Deletes cross account readiness authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, DeleteCrossAccountAuthorizationCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, DeleteCrossAccountAuthorizationCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "DeleteCrossAccountAuthorization", {})
  .n("Route53RecoveryReadinessClient", "DeleteCrossAccountAuthorizationCommand")
  .sc(DeleteCrossAccountAuthorization$)
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
