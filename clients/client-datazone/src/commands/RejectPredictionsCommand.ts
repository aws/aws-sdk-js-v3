// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectPredictionsInput, RejectPredictionsOutput } from "../models/models_1";
import { de_RejectPredictionsCommand, se_RejectPredictionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandInput extends RejectPredictionsInput {}
/**
 * @public
 *
 * The output of {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandOutput extends RejectPredictionsOutput, __MetadataBearer {}

/**
 * <p>Rejects automatically generated business-friendly metadata for your Amazon DataZone
 *          assets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RejectPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RejectPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataZoneClient(config);
 * const input = { // RejectPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   rejectRule: { // RejectRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   rejectChoices: [ // RejectChoices
 *     { // RejectChoice
 *       predictionTarget: "STRING_VALUE", // required
 *       predictionChoices: [ // PredictionChoices
 *         Number("int"),
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RejectPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // RejectPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   assetRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RejectPredictionsCommandInput - {@link RejectPredictionsCommandInput}
 * @returns {@link RejectPredictionsCommandOutput}
 * @see {@link RejectPredictionsCommandInput} for command's `input` shape.
 * @see {@link RejectPredictionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RejectPredictionsCommand extends $Command
  .classBuilder<
    RejectPredictionsCommandInput,
    RejectPredictionsCommandOutput,
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
  .s("DataZone", "RejectPredictions", {})
  .n("DataZoneClient", "RejectPredictionsCommand")
  .f(void 0, void 0)
  .ser(se_RejectPredictionsCommand)
  .de(de_RejectPredictionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectPredictionsInput;
      output: RejectPredictionsOutput;
    };
    sdk: {
      input: RejectPredictionsCommandInput;
      output: RejectPredictionsCommandOutput;
    };
  };
}
