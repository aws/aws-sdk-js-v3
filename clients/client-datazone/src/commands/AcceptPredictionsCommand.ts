// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AcceptPredictionsInput,
  AcceptPredictionsInputFilterSensitiveLog,
  AcceptPredictionsOutput,
} from "../models/models_0";
import { de_AcceptPredictionsCommand, se_AcceptPredictionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandInput extends AcceptPredictionsInput {}
/**
 * @public
 *
 * The output of {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandOutput extends AcceptPredictionsOutput, __MetadataBearer {}

/**
 * <p>Accepts automatically generated business-friendly metadata for your Amazon DataZone assets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AcceptPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AcceptPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // AcceptPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   acceptRule: { // AcceptRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   acceptChoices: [ // AcceptChoices
 *     { // AcceptChoice
 *       predictionTarget: "STRING_VALUE", // required
 *       predictionChoice: Number("int"),
 *       editedValue: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // AcceptPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AcceptPredictionsCommandInput - {@link AcceptPredictionsCommandInput}
 * @returns {@link AcceptPredictionsCommandOutput}
 * @see {@link AcceptPredictionsCommandInput} for command's `input` shape.
 * @see {@link AcceptPredictionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class AcceptPredictionsCommand extends $Command
  .classBuilder<
    AcceptPredictionsCommandInput,
    AcceptPredictionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "AcceptPredictions", {})
  .n("DataZoneClient", "AcceptPredictionsCommand")
  .f(AcceptPredictionsInputFilterSensitiveLog, void 0)
  .ser(se_AcceptPredictionsCommand)
  .de(de_AcceptPredictionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptPredictionsInput;
      output: AcceptPredictionsOutput;
    };
    sdk: {
      input: AcceptPredictionsCommandInput;
      output: AcceptPredictionsCommandOutput;
    };
  };
}
