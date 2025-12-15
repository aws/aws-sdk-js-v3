// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateCrossAccountAuthorizationRequest,
  CreateCrossAccountAuthorizationResponse,
} from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { CreateCrossAccountAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCrossAccountAuthorizationCommand}.
 */
export interface CreateCrossAccountAuthorizationCommandInput extends CreateCrossAccountAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCrossAccountAuthorizationCommand}.
 */
export interface CreateCrossAccountAuthorizationCommandOutput
  extends CreateCrossAccountAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a cross-account readiness authorization. This lets you authorize another account to work with Route 53 Application Recovery Controller, for example, to check the readiness status of resources in a separate account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateCrossAccountAuthorizationCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateCrossAccountAuthorizationCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // CreateCrossAccountAuthorizationRequest
 *   CrossAccountAuthorization: "STRING_VALUE", // required
 * };
 * const command = new CreateCrossAccountAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCrossAccountAuthorizationResponse
 * //   CrossAccountAuthorization: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCrossAccountAuthorizationCommandInput - {@link CreateCrossAccountAuthorizationCommandInput}
 * @returns {@link CreateCrossAccountAuthorizationCommandOutput}
 * @see {@link CreateCrossAccountAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateCrossAccountAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
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
export class CreateCrossAccountAuthorizationCommand extends $Command
  .classBuilder<
    CreateCrossAccountAuthorizationCommandInput,
    CreateCrossAccountAuthorizationCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "CreateCrossAccountAuthorization", {})
  .n("Route53RecoveryReadinessClient", "CreateCrossAccountAuthorizationCommand")
  .sc(CreateCrossAccountAuthorization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCrossAccountAuthorizationRequest;
      output: CreateCrossAccountAuthorizationResponse;
    };
    sdk: {
      input: CreateCrossAccountAuthorizationCommandInput;
      output: CreateCrossAccountAuthorizationCommandOutput;
    };
  };
}
