// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCalculationExecutionsRequest, ListCalculationExecutionsResponse } from "../models/models_0";
import { de_ListCalculationExecutionsCommand, se_ListCalculationExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCalculationExecutionsCommand}.
 */
export interface ListCalculationExecutionsCommandInput extends ListCalculationExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCalculationExecutionsCommand}.
 */
export interface ListCalculationExecutionsCommandOutput extends ListCalculationExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists the calculations that have been submitted to a session in descending order.
 *             Newer calculations are listed first; older calculations are listed later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListCalculationExecutionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListCalculationExecutionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListCalculationExecutionsRequest
 *   SessionId: "STRING_VALUE", // required
 *   StateFilter: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCalculationExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCalculationExecutionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Calculations: [ // CalculationsList
 * //     { // CalculationSummary
 * //       CalculationExecutionId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: { // CalculationStatus
 * //         SubmissionDateTime: new Date("TIMESTAMP"),
 * //         CompletionDateTime: new Date("TIMESTAMP"),
 * //         State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * //         StateChangeReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCalculationExecutionsCommandInput - {@link ListCalculationExecutionsCommandInput}
 * @returns {@link ListCalculationExecutionsCommandOutput}
 * @see {@link ListCalculationExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListCalculationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class ListCalculationExecutionsCommand extends $Command
  .classBuilder<
    ListCalculationExecutionsCommandInput,
    ListCalculationExecutionsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "ListCalculationExecutions", {})
  .n("AthenaClient", "ListCalculationExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCalculationExecutionsCommand)
  .de(de_ListCalculationExecutionsCommand)
  .build() {}
