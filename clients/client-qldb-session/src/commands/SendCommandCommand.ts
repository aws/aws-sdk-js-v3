// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendCommandRequest, SendCommandResult } from "../models/models_0";
import { de_SendCommandCommand, se_SendCommandCommand } from "../protocols/Aws_json1_0";
import { QLDBSessionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBSessionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendCommandCommand}.
 */
export interface SendCommandCommandInput extends SendCommandRequest {}
/**
 * @public
 *
 * The output of {@link SendCommandCommand}.
 */
export interface SendCommandCommandOutput extends SendCommandResult, __MetadataBearer {}

/**
 * <p>Sends a command to an Amazon QLDB ledger.</p>
 *          <note>
 *             <p>Instead of interacting directly with this API, we recommend using the QLDB driver
 *             or the QLDB shell to execute data transactions on a ledger.</p>
 *             <ul>
 *                <li>
 *                   <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides
 *                   a high-level abstraction layer above this <i>QLDB Session</i> data
 *                   plane and manages <code>SendCommand</code> API calls for you. For information and
 *                   a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started
 *                      with the driver</a> in the <i>Amazon QLDB Developer
 *                   Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>If you are working with the AWS Command Line Interface (AWS CLI), use the
 *                   QLDB shell. The shell is a command line interface that uses the QLDB driver to
 *                   interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the
 *                      QLDB shell</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBSessionClient, SendCommandCommand } from "@aws-sdk/client-qldb-session"; // ES Modules import
 * // const { QLDBSessionClient, SendCommandCommand } = require("@aws-sdk/client-qldb-session"); // CommonJS import
 * const client = new QLDBSessionClient(config);
 * const input = { // SendCommandRequest
 *   SessionToken: "STRING_VALUE",
 *   StartSession: { // StartSessionRequest
 *     LedgerName: "STRING_VALUE", // required
 *   },
 *   StartTransaction: {},
 *   EndSession: {},
 *   CommitTransaction: { // CommitTransactionRequest
 *     TransactionId: "STRING_VALUE", // required
 *     CommitDigest: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 *   AbortTransaction: {},
 *   ExecuteStatement: { // ExecuteStatementRequest
 *     TransactionId: "STRING_VALUE", // required
 *     Statement: "STRING_VALUE", // required
 *     Parameters: [ // StatementParameters
 *       { // ValueHolder
 *         IonBinary: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         IonText: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   FetchPage: { // FetchPageRequest
 *     TransactionId: "STRING_VALUE", // required
 *     NextPageToken: "STRING_VALUE", // required
 *   },
 * };
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * // { // SendCommandResult
 * //   StartSession: { // StartSessionResult
 * //     SessionToken: "STRING_VALUE",
 * //     TimingInformation: { // TimingInformation
 * //       ProcessingTimeMilliseconds: Number("long"),
 * //     },
 * //   },
 * //   StartTransaction: { // StartTransactionResult
 * //     TransactionId: "STRING_VALUE",
 * //     TimingInformation: {
 * //       ProcessingTimeMilliseconds: Number("long"),
 * //     },
 * //   },
 * //   EndSession: { // EndSessionResult
 * //     TimingInformation: {
 * //       ProcessingTimeMilliseconds: Number("long"),
 * //     },
 * //   },
 * //   CommitTransaction: { // CommitTransactionResult
 * //     TransactionId: "STRING_VALUE",
 * //     CommitDigest: new Uint8Array(),
 * //     TimingInformation: {
 * //       ProcessingTimeMilliseconds: Number("long"),
 * //     },
 * //     ConsumedIOs: { // IOUsage
 * //       ReadIOs: Number("long"),
 * //       WriteIOs: Number("long"),
 * //     },
 * //   },
 * //   AbortTransaction: { // AbortTransactionResult
 * //     TimingInformation: {
 * //       ProcessingTimeMilliseconds: Number("long"),
 * //     },
 * //   },
 * //   ExecuteStatement: { // ExecuteStatementResult
 * //     FirstPage: { // Page
 * //       Values: [ // ValueHolders
 * //         { // ValueHolder
 * //           IonBinary: new Uint8Array(),
 * //           IonText: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextPageToken: "STRING_VALUE",
 * //     },
 * //     TimingInformation: "<TimingInformation>",
 * //     ConsumedIOs: {
 * //       ReadIOs: Number("long"),
 * //       WriteIOs: Number("long"),
 * //     },
 * //   },
 * //   FetchPage: { // FetchPageResult
 * //     Page: {
 * //       Values: [
 * //         {
 * //           IonBinary: new Uint8Array(),
 * //           IonText: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextPageToken: "STRING_VALUE",
 * //     },
 * //     TimingInformation: "<TimingInformation>",
 * //     ConsumedIOs: {
 * //       ReadIOs: Number("long"),
 * //       WriteIOs: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SendCommandCommandInput - {@link SendCommandCommandInput}
 * @returns {@link SendCommandCommandOutput}
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link QLDBSessionClientResolvedConfig | config} for QLDBSessionClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid parameter
 *          value or a missing required parameter.</p>
 *
 * @throws {@link CapacityExceededException} (server fault)
 *  <p>Returned when the request exceeds the processing capacity of the ledger.</p>
 *
 * @throws {@link InvalidSessionException} (client fault)
 *  <p>Returned if the session doesn't exist anymore because it timed out or expired.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Returned if a resource limit such as number of active sessions is exceeded.</p>
 *
 * @throws {@link OccConflictException} (client fault)
 *  <p>Returned when a transaction cannot be written to the journal due to a failure in the
 *          verification phase of <i>optimistic concurrency control</i> (OCC).</p>
 *
 * @throws {@link RateExceededException} (client fault)
 *  <p>Returned when the rate of requests exceeds the allowed throughput.</p>
 *
 * @throws {@link QLDBSessionServiceException}
 * <p>Base exception class for all service exceptions from QLDBSession service.</p>
 *
 *
 * @public
 */
export class SendCommandCommand extends $Command
  .classBuilder<
    SendCommandCommandInput,
    SendCommandCommandOutput,
    QLDBSessionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBSessionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QLDBSession", "SendCommand", {})
  .n("QLDBSessionClient", "SendCommandCommand")
  .f(void 0, void 0)
  .ser(se_SendCommandCommand)
  .de(de_SendCommandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendCommandRequest;
      output: SendCommandResult;
    };
    sdk: {
      input: SendCommandCommandInput;
      output: SendCommandCommandOutput;
    };
  };
}
