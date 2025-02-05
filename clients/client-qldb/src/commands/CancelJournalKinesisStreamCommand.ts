// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelJournalKinesisStreamRequest, CancelJournalKinesisStreamResponse } from "../models/models_0";
import { de_CancelJournalKinesisStreamCommand, se_CancelJournalKinesisStreamCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJournalKinesisStreamCommand}.
 */
export interface CancelJournalKinesisStreamCommandInput extends CancelJournalKinesisStreamRequest {}
/**
 * @public
 *
 * The output of {@link CancelJournalKinesisStreamCommand}.
 */
export interface CancelJournalKinesisStreamCommandOutput extends CancelJournalKinesisStreamResponse, __MetadataBearer {}

/**
 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
 *          status must be <code>ACTIVE</code>.</p>
 *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
 *          subject to a 7-day retention period, so they are automatically deleted after this limit
 *          expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CancelJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CancelJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QLDBClient(config);
 * const input = { // CancelJournalKinesisStreamRequest
 *   LedgerName: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE", // required
 * };
 * const command = new CancelJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * // { // CancelJournalKinesisStreamResponse
 * //   StreamId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelJournalKinesisStreamCommandInput - {@link CancelJournalKinesisStreamCommandInput}
 * @returns {@link CancelJournalKinesisStreamCommandOutput}
 * @see {@link CancelJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link CancelJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourcePreconditionNotMetException} (client fault)
 *  <p>The operation failed because a condition wasn't satisfied in advance.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 * @public
 */
export class CancelJournalKinesisStreamCommand extends $Command
  .classBuilder<
    CancelJournalKinesisStreamCommandInput,
    CancelJournalKinesisStreamCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "CancelJournalKinesisStream", {})
  .n("QLDBClient", "CancelJournalKinesisStreamCommand")
  .f(void 0, void 0)
  .ser(se_CancelJournalKinesisStreamCommand)
  .de(de_CancelJournalKinesisStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJournalKinesisStreamRequest;
      output: CancelJournalKinesisStreamResponse;
    };
    sdk: {
      input: CancelJournalKinesisStreamCommandInput;
      output: CancelJournalKinesisStreamCommandOutput;
    };
  };
}
