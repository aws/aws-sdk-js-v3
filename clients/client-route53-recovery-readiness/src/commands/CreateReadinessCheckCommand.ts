// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReadinessCheckRequest, CreateReadinessCheckResponse } from "../models/models_0";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { CreateReadinessCheck } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReadinessCheckCommand}.
 */
export interface CreateReadinessCheckCommandInput extends CreateReadinessCheckRequest {}
/**
 * @public
 *
 * The output of {@link CreateReadinessCheckCommand}.
 */
export interface CreateReadinessCheckCommandOutput extends CreateReadinessCheckResponse, __MetadataBearer {}

/**
 * <p>Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // CreateReadinessCheckRequest
 *   ReadinessCheckName: "STRING_VALUE", // required
 *   ResourceSetName: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReadinessCheckCommand(input);
 * const response = await client.send(command);
 * // { // CreateReadinessCheckResponse
 * //   ReadinessCheckArn: "STRING_VALUE",
 * //   ReadinessCheckName: "STRING_VALUE",
 * //   ResourceSet: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReadinessCheckCommandInput - {@link CreateReadinessCheckCommandInput}
 * @returns {@link CreateReadinessCheckCommandOutput}
 * @see {@link CreateReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link CreateReadinessCheckCommandOutput} for command's `response` shape.
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
export class CreateReadinessCheckCommand extends $Command
  .classBuilder<
    CreateReadinessCheckCommandInput,
    CreateReadinessCheckCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "CreateReadinessCheck", {})
  .n("Route53RecoveryReadinessClient", "CreateReadinessCheckCommand")
  .sc(CreateReadinessCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReadinessCheckRequest;
      output: CreateReadinessCheckResponse;
    };
    sdk: {
      input: CreateReadinessCheckCommandInput;
      output: CreateReadinessCheckCommandOutput;
    };
  };
}
