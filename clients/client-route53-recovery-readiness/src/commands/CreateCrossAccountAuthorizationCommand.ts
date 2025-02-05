// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCrossAccountAuthorizationRequest, CreateCrossAccountAuthorizationResponse } from "../models/models_0";
import {
  de_CreateCrossAccountAuthorizationCommand,
  se_CreateCrossAccountAuthorizationCommand,
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "CreateCrossAccountAuthorization", {})
  .n("Route53RecoveryReadinessClient", "CreateCrossAccountAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCrossAccountAuthorizationCommand)
  .de(de_CreateCrossAccountAuthorizationCommand)
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
