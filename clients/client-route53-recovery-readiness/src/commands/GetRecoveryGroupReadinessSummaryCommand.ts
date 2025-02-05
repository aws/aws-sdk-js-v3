// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecoveryGroupReadinessSummaryRequest, GetRecoveryGroupReadinessSummaryResponse } from "../models/models_0";
import {
  de_GetRecoveryGroupReadinessSummaryCommand,
  se_GetRecoveryGroupReadinessSummaryCommand,
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
 * The input for {@link GetRecoveryGroupReadinessSummaryCommand}.
 */
export interface GetRecoveryGroupReadinessSummaryCommandInput extends GetRecoveryGroupReadinessSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryGroupReadinessSummaryCommand}.
 */
export interface GetRecoveryGroupReadinessSummaryCommandOutput
  extends GetRecoveryGroupReadinessSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetRecoveryGroupReadinessSummaryCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetRecoveryGroupReadinessSummaryCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetRecoveryGroupReadinessSummaryRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryGroupReadinessSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryGroupReadinessSummaryResponse
 * //   NextToken: "STRING_VALUE",
 * //   Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED",
 * //   ReadinessChecks: [ // __listOfReadinessCheckSummary
 * //     { // ReadinessCheckSummary
 * //       Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED",
 * //       ReadinessCheckName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecoveryGroupReadinessSummaryCommandInput - {@link GetRecoveryGroupReadinessSummaryCommandInput}
 * @returns {@link GetRecoveryGroupReadinessSummaryCommandOutput}
 * @see {@link GetRecoveryGroupReadinessSummaryCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryGroupReadinessSummaryCommandOutput} for command's `response` shape.
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
export class GetRecoveryGroupReadinessSummaryCommand extends $Command
  .classBuilder<
    GetRecoveryGroupReadinessSummaryCommandInput,
    GetRecoveryGroupReadinessSummaryCommandOutput,
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
  .s("Route53RecoveryReadiness", "GetRecoveryGroupReadinessSummary", {})
  .n("Route53RecoveryReadinessClient", "GetRecoveryGroupReadinessSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetRecoveryGroupReadinessSummaryCommand)
  .de(de_GetRecoveryGroupReadinessSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryGroupReadinessSummaryRequest;
      output: GetRecoveryGroupReadinessSummaryResponse;
    };
    sdk: {
      input: GetRecoveryGroupReadinessSummaryCommandInput;
      output: GetRecoveryGroupReadinessSummaryCommandOutput;
    };
  };
}
