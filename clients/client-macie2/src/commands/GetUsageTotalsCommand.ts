// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageTotalsRequest, GetUsageTotalsResponse } from "../models/models_0";
import { de_GetUsageTotalsCommand, se_GetUsageTotalsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsageTotalsCommand}.
 */
export interface GetUsageTotalsCommandInput extends GetUsageTotalsRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageTotalsCommand}.
 */
export interface GetUsageTotalsCommandOutput extends GetUsageTotalsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageTotalsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageTotalsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetUsageTotalsRequest
 *   timeRange: "STRING_VALUE",
 * };
 * const command = new GetUsageTotalsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageTotalsResponse
 * //   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * //   usageTotals: [ // __listOfUsageTotal
 * //     { // UsageTotal
 * //       currency: "USD",
 * //       estimatedCost: "STRING_VALUE",
 * //       type: "DATA_INVENTORY_EVALUATION" || "SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_OBJECT_MONITORING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUsageTotalsCommandInput - {@link GetUsageTotalsCommandInput}
 * @returns {@link GetUsageTotalsCommandOutput}
 * @see {@link GetUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link GetUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class GetUsageTotalsCommand extends $Command
  .classBuilder<
    GetUsageTotalsCommandInput,
    GetUsageTotalsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "GetUsageTotals", {})
  .n("Macie2Client", "GetUsageTotalsCommand")
  .f(void 0, void 0)
  .ser(se_GetUsageTotalsCommand)
  .de(de_GetUsageTotalsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageTotalsRequest;
      output: GetUsageTotalsResponse;
    };
    sdk: {
      input: GetUsageTotalsCommandInput;
      output: GetUsageTotalsCommandOutput;
    };
  };
}
