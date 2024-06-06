// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCellReadinessSummaryRequest, GetCellReadinessSummaryResponse } from "../models/models_0";
import { de_GetCellReadinessSummaryCommand, se_GetCellReadinessSummaryCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetCellReadinessSummaryCommand}.
 */
export interface GetCellReadinessSummaryCommandInput extends GetCellReadinessSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetCellReadinessSummaryCommand}.
 */
export interface GetCellReadinessSummaryCommandOutput extends GetCellReadinessSummaryResponse, __MetadataBearer {}

/**
 * <p>Gets readiness for a cell. Aggregates the readiness of all the resources that are associated with the cell into a single value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetCellReadinessSummaryCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetCellReadinessSummaryCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetCellReadinessSummaryRequest
 *   CellName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCellReadinessSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetCellReadinessSummaryResponse
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
 * @param GetCellReadinessSummaryCommandInput - {@link GetCellReadinessSummaryCommandInput}
 * @returns {@link GetCellReadinessSummaryCommandOutput}
 * @see {@link GetCellReadinessSummaryCommandInput} for command's `input` shape.
 * @see {@link GetCellReadinessSummaryCommandOutput} for command's `response` shape.
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
export class GetCellReadinessSummaryCommand extends $Command
  .classBuilder<
    GetCellReadinessSummaryCommandInput,
    GetCellReadinessSummaryCommandOutput,
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
  .s("Route53RecoveryReadiness", "GetCellReadinessSummary", {})
  .n("Route53RecoveryReadinessClient", "GetCellReadinessSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetCellReadinessSummaryCommand)
  .de(de_GetCellReadinessSummaryCommand)
  .build() {}
