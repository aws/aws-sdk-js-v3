// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReadinessCheckStatusRequest, GetReadinessCheckStatusResponse } from "../models/models_0";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { GetReadinessCheckStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadinessCheckStatusCommand}.
 */
export interface GetReadinessCheckStatusCommandInput extends GetReadinessCheckStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetReadinessCheckStatusCommand}.
 */
export interface GetReadinessCheckStatusCommandOutput extends GetReadinessCheckStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the readiness status for an individual readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in a recovery group, use GetRecoveryGroupReadinessSummary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetReadinessCheckStatusCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetReadinessCheckStatusCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetReadinessCheckStatusRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ReadinessCheckName: "STRING_VALUE", // required
 * };
 * const command = new GetReadinessCheckStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetReadinessCheckStatusResponse
 * //   Messages: [ // __listOfMessage
 * //     { // Message
 * //       MessageText: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED",
 * //   Resources: [ // __listOfResourceResult
 * //     { // ResourceResult
 * //       ComponentId: "STRING_VALUE",
 * //       LastCheckedTimestamp: new Date("TIMESTAMP"), // required
 * //       Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED", // required
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadinessCheckStatusCommandInput - {@link GetReadinessCheckStatusCommandInput}
 * @returns {@link GetReadinessCheckStatusCommandOutput}
 * @see {@link GetReadinessCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetReadinessCheckStatusCommandOutput} for command's `response` shape.
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
export class GetReadinessCheckStatusCommand extends $Command
  .classBuilder<
    GetReadinessCheckStatusCommandInput,
    GetReadinessCheckStatusCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "GetReadinessCheckStatus", {})
  .n("Route53RecoveryReadinessClient", "GetReadinessCheckStatusCommand")
  .sc(GetReadinessCheckStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadinessCheckStatusRequest;
      output: GetReadinessCheckStatusResponse;
    };
    sdk: {
      input: GetReadinessCheckStatusCommandInput;
      output: GetReadinessCheckStatusCommandOutput;
    };
  };
}
