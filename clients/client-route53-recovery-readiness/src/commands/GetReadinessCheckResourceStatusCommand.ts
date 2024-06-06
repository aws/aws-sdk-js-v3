// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReadinessCheckResourceStatusRequest, GetReadinessCheckResourceStatusResponse } from "../models/models_0";
import {
  de_GetReadinessCheckResourceStatusCommand,
  se_GetReadinessCheckResourceStatusCommand,
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
 * The input for {@link GetReadinessCheckResourceStatusCommand}.
 */
export interface GetReadinessCheckResourceStatusCommandInput extends GetReadinessCheckResourceStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetReadinessCheckResourceStatusCommand}.
 */
export interface GetReadinessCheckResourceStatusCommandOutput
  extends GetReadinessCheckResourceStatusResponse,
    __MetadataBearer {}

/**
 * <p>Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetReadinessCheckResourceStatusCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetReadinessCheckResourceStatusCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetReadinessCheckResourceStatusRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ReadinessCheckName: "STRING_VALUE", // required
 *   ResourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetReadinessCheckResourceStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetReadinessCheckResourceStatusResponse
 * //   NextToken: "STRING_VALUE",
 * //   Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED",
 * //   Rules: [ // __listOfRuleResult
 * //     { // RuleResult
 * //       LastCheckedTimestamp: new Date("TIMESTAMP"), // required
 * //       Messages: [ // __listOfMessage // required
 * //         { // Message
 * //           MessageText: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED", // required
 * //       RuleId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadinessCheckResourceStatusCommandInput - {@link GetReadinessCheckResourceStatusCommandInput}
 * @returns {@link GetReadinessCheckResourceStatusCommandOutput}
 * @see {@link GetReadinessCheckResourceStatusCommandInput} for command's `input` shape.
 * @see {@link GetReadinessCheckResourceStatusCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetReadinessCheckResourceStatusCommand extends $Command
  .classBuilder<
    GetReadinessCheckResourceStatusCommandInput,
    GetReadinessCheckResourceStatusCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "GetReadinessCheckResourceStatus", {})
  .n("Route53RecoveryReadinessClient", "GetReadinessCheckResourceStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetReadinessCheckResourceStatusCommand)
  .de(de_GetReadinessCheckResourceStatusCommand)
  .build() {}
