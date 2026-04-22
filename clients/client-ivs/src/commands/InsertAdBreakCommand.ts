// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { InsertAdBreakRequest, InsertAdBreakResponse } from "../models/models_0";
import { InsertAdBreak$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InsertAdBreakCommand}.
 */
export interface InsertAdBreakCommandInput extends InsertAdBreakRequest {}
/**
 * @public
 *
 * The output of {@link InsertAdBreakCommand}.
 */
export interface InsertAdBreakCommandOutput extends InsertAdBreakResponse, __MetadataBearer {}

/**
 * <p>Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel.</p> <p> <b>Note:</b> AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/monitoring-cloudwatch-metrics.html">Monitoring AWS Elemental MediaTailor with Amazon CloudWatch</a> metrics in the <i>AWS Elemental MediaTailor User Guide</i> for details on available metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, InsertAdBreakCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, InsertAdBreakCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // InsertAdBreakRequest
 *   channelArn: "STRING_VALUE", // required
 *   durationSeconds: Number("int"), // required
 * };
 * const command = new InsertAdBreakCommand(input);
 * const response = await client.send(command);
 * // { // InsertAdBreakResponse
 * //   adBreakId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InsertAdBreakCommandInput - {@link InsertAdBreakCommandInput}
 * @returns {@link InsertAdBreakCommandOutput}
 * @see {@link InsertAdBreakCommandInput} for command's `input` shape.
 * @see {@link InsertAdBreakCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class InsertAdBreakCommand extends $Command
  .classBuilder<
    InsertAdBreakCommandInput,
    InsertAdBreakCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "InsertAdBreak", {})
  .n("IvsClient", "InsertAdBreakCommand")
  .sc(InsertAdBreak$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InsertAdBreakRequest;
      output: InsertAdBreakResponse;
    };
    sdk: {
      input: InsertAdBreakCommandInput;
      output: InsertAdBreakCommandOutput;
    };
  };
}
