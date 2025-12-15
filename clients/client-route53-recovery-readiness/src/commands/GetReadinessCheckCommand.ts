// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReadinessCheckRequest, GetReadinessCheckResponse } from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { GetReadinessCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadinessCheckCommand}.
 */
export interface GetReadinessCheckCommandInput extends GetReadinessCheckRequest {}
/**
 * @public
 *
 * The output of {@link GetReadinessCheckCommand}.
 */
export interface GetReadinessCheckCommandOutput extends GetReadinessCheckResponse, __MetadataBearer {}

/**
 * <p>Gets details about a readiness check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetReadinessCheckCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetReadinessCheckRequest
 *   ReadinessCheckName: "STRING_VALUE", // required
 * };
 * const command = new GetReadinessCheckCommand(input);
 * const response = await client.send(command);
 * // { // GetReadinessCheckResponse
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
 * @param GetReadinessCheckCommandInput - {@link GetReadinessCheckCommandInput}
 * @returns {@link GetReadinessCheckCommandOutput}
 * @see {@link GetReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link GetReadinessCheckCommandOutput} for command's `response` shape.
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
export class GetReadinessCheckCommand extends $Command
  .classBuilder<
    GetReadinessCheckCommandInput,
    GetReadinessCheckCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "GetReadinessCheck", {})
  .n("Route53RecoveryReadinessClient", "GetReadinessCheckCommand")
  .sc(GetReadinessCheck$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadinessCheckRequest;
      output: GetReadinessCheckResponse;
    };
    sdk: {
      input: GetReadinessCheckCommandInput;
      output: GetReadinessCheckCommandOutput;
    };
  };
}
