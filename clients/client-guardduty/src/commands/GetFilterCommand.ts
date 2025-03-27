// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetFilterRequest, GetFilterResponse } from "../models/models_0";
import { de_GetFilterCommand, se_GetFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFilterCommand}.
 */
export interface GetFilterCommandInput extends GetFilterRequest {}
/**
 * @public
 *
 * The output of {@link GetFilterCommand}.
 */
export interface GetFilterCommandOutput extends GetFilterResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetFilterRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterName: "STRING_VALUE", // required
 * };
 * const command = new GetFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetFilterResponse
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Action: "NOOP" || "ARCHIVE", // required
 * //   Rank: Number("int"),
 * //   FindingCriteria: { // FindingCriteria
 * //     Criterion: { // Criterion
 * //       "<keys>": { // Condition
 * //         Eq: [ // Eq
 * //           "STRING_VALUE",
 * //         ],
 * //         Neq: [ // Neq
 * //           "STRING_VALUE",
 * //         ],
 * //         Gt: Number("int"),
 * //         Gte: Number("int"),
 * //         Lt: Number("int"),
 * //         Lte: Number("int"),
 * //         Equals: [ // Equals
 * //           "STRING_VALUE",
 * //         ],
 * //         NotEquals: [ // NotEquals
 * //           "STRING_VALUE",
 * //         ],
 * //         GreaterThan: Number("long"),
 * //         GreaterThanOrEqual: Number("long"),
 * //         LessThan: Number("long"),
 * //         LessThanOrEqual: Number("long"),
 * //       },
 * //     },
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFilterCommandInput - {@link GetFilterCommandInput}
 * @returns {@link GetFilterCommandOutput}
 * @see {@link GetFilterCommandInput} for command's `input` shape.
 * @see {@link GetFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class GetFilterCommand extends $Command
  .classBuilder<
    GetFilterCommandInput,
    GetFilterCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "GetFilter", {})
  .n("GuardDutyClient", "GetFilterCommand")
  .f(void 0, void 0)
  .ser(se_GetFilterCommand)
  .de(de_GetFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFilterRequest;
      output: GetFilterResponse;
    };
    sdk: {
      input: GetFilterCommandInput;
      output: GetFilterCommandOutput;
    };
  };
}
