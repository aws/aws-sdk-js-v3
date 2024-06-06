// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListDetectorsRequest, ListDetectorsResponse } from "../models/models_1";
import { de_ListDetectorsCommand, se_ListDetectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandInput extends ListDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorsCommand}.
 */
export interface ListDetectorsCommandOutput extends ListDetectorsResponse, __MetadataBearer {}

/**
 * <p>Lists detectorIds of all the existing Amazon GuardDuty detector resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // ListDetectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorsResponse
 * //   DetectorIds: [ // DetectorIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorsCommandInput - {@link ListDetectorsCommandInput}
 * @returns {@link ListDetectorsCommandOutput}
 * @see {@link ListDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListDetectorsCommand extends $Command
  .classBuilder<
    ListDetectorsCommandInput,
    ListDetectorsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "ListDetectors", {})
  .n("GuardDutyClient", "ListDetectorsCommand")
  .f(void 0, void 0)
  .ser(se_ListDetectorsCommand)
  .de(de_ListDetectorsCommand)
  .build() {}
