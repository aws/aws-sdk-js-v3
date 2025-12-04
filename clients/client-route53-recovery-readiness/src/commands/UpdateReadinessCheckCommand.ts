// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateReadinessCheckRequest, UpdateReadinessCheckResponse } from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { UpdateReadinessCheck } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReadinessCheckCommand}.
 */
export interface UpdateReadinessCheckCommandInput extends UpdateReadinessCheckRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReadinessCheckCommand}.
 */
export interface UpdateReadinessCheckCommandOutput extends UpdateReadinessCheckResponse, __MetadataBearer {}

/**
 * <p>Updates a readiness check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateReadinessCheckCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, UpdateReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // UpdateReadinessCheckRequest
 *   ReadinessCheckName: "STRING_VALUE", // required
 *   ResourceSetName: "STRING_VALUE", // required
 * };
 * const command = new UpdateReadinessCheckCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReadinessCheckResponse
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
 * @param UpdateReadinessCheckCommandInput - {@link UpdateReadinessCheckCommandInput}
 * @returns {@link UpdateReadinessCheckCommandOutput}
 * @see {@link UpdateReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link UpdateReadinessCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
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
export class UpdateReadinessCheckCommand extends $Command
  .classBuilder<
    UpdateReadinessCheckCommandInput,
    UpdateReadinessCheckCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "UpdateReadinessCheck", {})
  .n("Route53RecoveryReadinessClient", "UpdateReadinessCheckCommand")
  .sc(UpdateReadinessCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReadinessCheckRequest;
      output: UpdateReadinessCheckResponse;
    };
    sdk: {
      input: UpdateReadinessCheckCommandInput;
      output: UpdateReadinessCheckCommandOutput;
    };
  };
}
