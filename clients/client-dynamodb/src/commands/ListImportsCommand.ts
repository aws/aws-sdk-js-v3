// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListImportsInput, ListImportsOutput } from "../models/models_0";
import { ListImports } from "../schemas/schemas_4_Import";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportsCommand}.
 */
export interface ListImportsCommandInput extends ListImportsInput {}
/**
 * @public
 *
 * The output of {@link ListImportsCommand}.
 */
export interface ListImportsCommandOutput extends ListImportsOutput, __MetadataBearer {}

/**
 * <p> Lists completed imports within the past 90 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListImportsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListImportsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ListImportsInput
 *   TableArn: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportsOutput
 * //   ImportSummaryList: [ // ImportSummaryList
 * //     { // ImportSummary
 * //       ImportArn: "STRING_VALUE",
 * //       ImportStatus: "IN_PROGRESS" || "COMPLETED" || "CANCELLING" || "CANCELLED" || "FAILED",
 * //       TableArn: "STRING_VALUE",
 * //       S3BucketSource: { // S3BucketSource
 * //         S3BucketOwner: "STRING_VALUE",
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3KeyPrefix: "STRING_VALUE",
 * //       },
 * //       CloudWatchLogGroupArn: "STRING_VALUE",
 * //       InputFormat: "DYNAMODB_JSON" || "ION" || "CSV",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportsCommandInput - {@link ListImportsCommandInput}
 * @returns {@link ListImportsCommandOutput}
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account.
 *             These operations include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary indexes, you can have up
 *             to 250 such requests running at a time. However, if the table or index specifications
 *             are complex, then DynamoDB might temporarily reduce the number of concurrent
 *             operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are
 *             allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request
 *             parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time.
 *             Exceeding this limit may result in request throttling.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @public
 */
export class ListImportsCommand extends $Command
  .classBuilder<
    ListImportsCommandInput,
    ListImportsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableArn" },
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DynamoDB_20120810", "ListImports", {})
  .n("DynamoDBClient", "ListImportsCommand")
  .sc(ListImports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportsInput;
      output: ListImportsOutput;
    };
    sdk: {
      input: ListImportsCommandInput;
      output: ListImportsCommandOutput;
    };
  };
}
