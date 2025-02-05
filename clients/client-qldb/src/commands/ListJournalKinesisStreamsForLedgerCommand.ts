// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListJournalKinesisStreamsForLedgerRequest,
  ListJournalKinesisStreamsForLedgerResponse,
} from "../models/models_0";
import {
  de_ListJournalKinesisStreamsForLedgerCommand,
  se_ListJournalKinesisStreamsForLedgerCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJournalKinesisStreamsForLedgerCommand}.
 */
export interface ListJournalKinesisStreamsForLedgerCommandInput extends ListJournalKinesisStreamsForLedgerRequest {}
/**
 * @public
 *
 * The output of {@link ListJournalKinesisStreamsForLedgerCommand}.
 */
export interface ListJournalKinesisStreamsForLedgerCommandOutput
  extends ListJournalKinesisStreamsForLedgerResponse,
    __MetadataBearer {}

/**
 * <p>Returns all Amazon QLDB journal streams for a given ledger.</p>
 *          <p>This action does not return any expired journal streams. For more information, see
 *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer
 *             Guide</i>.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that
 *          you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code>
 *          multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListJournalKinesisStreamsForLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QLDBClient(config);
 * const input = { // ListJournalKinesisStreamsForLedgerRequest
 *   LedgerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJournalKinesisStreamsForLedgerCommand(input);
 * const response = await client.send(command);
 * // { // ListJournalKinesisStreamsForLedgerResponse
 * //   Streams: [ // JournalKinesisStreamDescriptionList
 * //     { // JournalKinesisStreamDescription
 * //       LedgerName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       InclusiveStartTime: new Date("TIMESTAMP"),
 * //       ExclusiveEndTime: new Date("TIMESTAMP"),
 * //       RoleArn: "STRING_VALUE", // required
 * //       StreamId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "COMPLETED" || "CANCELED" || "FAILED" || "IMPAIRED", // required
 * //       KinesisConfiguration: { // KinesisConfiguration
 * //         StreamArn: "STRING_VALUE", // required
 * //         AggregationEnabled: true || false,
 * //       },
 * //       ErrorCause: "KINESIS_STREAM_NOT_FOUND" || "IAM_PERMISSION_REVOKED",
 * //       StreamName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJournalKinesisStreamsForLedgerCommandInput - {@link ListJournalKinesisStreamsForLedgerCommandInput}
 * @returns {@link ListJournalKinesisStreamsForLedgerCommandOutput}
 * @see {@link ListJournalKinesisStreamsForLedgerCommandInput} for command's `input` shape.
 * @see {@link ListJournalKinesisStreamsForLedgerCommandOutput} for command's `response` shape.
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
export class ListJournalKinesisStreamsForLedgerCommand extends $Command
  .classBuilder<
    ListJournalKinesisStreamsForLedgerCommandInput,
    ListJournalKinesisStreamsForLedgerCommandOutput,
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
  .s("AmazonQLDB", "ListJournalKinesisStreamsForLedger", {})
  .n("QLDBClient", "ListJournalKinesisStreamsForLedgerCommand")
  .f(void 0, void 0)
  .ser(se_ListJournalKinesisStreamsForLedgerCommand)
  .de(de_ListJournalKinesisStreamsForLedgerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJournalKinesisStreamsForLedgerRequest;
      output: ListJournalKinesisStreamsForLedgerResponse;
    };
    sdk: {
      input: ListJournalKinesisStreamsForLedgerCommandInput;
      output: ListJournalKinesisStreamsForLedgerCommandOutput;
    };
  };
}
