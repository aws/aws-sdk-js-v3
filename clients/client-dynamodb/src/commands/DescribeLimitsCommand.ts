// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLimitsInput, DescribeLimitsOutput } from "../models/models_0";
import { de_DescribeLimitsCommand, se_DescribeLimitsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandInput extends DescribeLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandOutput extends DescribeLimitsOutput, __MetadataBearer {}

/**
 * <p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in
 *             a Region, both for the Region as a whole and for any one DynamoDB table that you create
 *             there.</p>
 *          <p>When you establish an Amazon Web Services account, the account has initial quotas on
 *             the maximum read capacity units and write capacity units that you can provision across
 *             all of your DynamoDB tables in a given Region. Also, there are per-table
 *             quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
 *                 Account, and Table Quotas</a> page in the <i>Amazon DynamoDB
 *                 Developer Guide</i>.</p>
 *          <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the
 *             increase is not instantaneous. The <code>DescribeLimits</code> action lets you write
 *             code to compare the capacity you are currently using to those quotas imposed by your
 *             account so that you have enough time to apply for an increase before you hit a
 *             quota.</p>
 *          <p>For example, you could use one of the Amazon Web Services SDKs to do the
 *             following:</p>
 *          <ol>
 *             <li>
 *                <p>Call <code>DescribeLimits</code> for a particular Region to obtain your
 *                     current account quotas on provisioned capacity there.</p>
 *             </li>
 *             <li>
 *                <p>Create a variable to hold the aggregate read capacity units provisioned for
 *                     all your tables in that Region, and one to hold the aggregate write capacity
 *                     units. Zero them both.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB
 *                     tables.</p>
 *             </li>
 *             <li>
 *                <p>For each table name listed by <code>ListTables</code>, do the
 *                     following:</p>
 *                <ul>
 *                   <li>
 *                      <p>Call <code>DescribeTable</code> with the table name.</p>
 *                   </li>
 *                   <li>
 *                      <p>Use the data returned by <code>DescribeTable</code> to add the read
 *                             capacity units and write capacity units provisioned for the table itself
 *                             to your variables.</p>
 *                   </li>
 *                   <li>
 *                      <p>If the table has one or more global secondary indexes (GSIs), loop
 *                             over these GSIs and add their provisioned capacity values to your
 *                             variables as well.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Report the account quotas for that Region returned by
 *                         <code>DescribeLimits</code>, along with the total current provisioned
 *                     capacity levels you have calculated.</p>
 *             </li>
 *          </ol>
 *          <p>This will let you see whether you are getting close to your account-level
 *             quotas.</p>
 *          <p>The per-table quotas apply only when you are creating a new table. They restrict the
 *             sum of the provisioned capacity of the new table itself and all its global secondary
 *             indexes.</p>
 *          <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned
 *             capacity extremely rapidly, but the only quota that applies is that the aggregate
 *             provisioned capacity over all your tables and GSIs cannot exceed either of the
 *             per-account quotas.</p>
 *          <note>
 *             <p>
 *                <code>DescribeLimits</code> should only be called periodically. You can expect
 *                 throttling errors if you call it more than once in a minute.</p>
 *          </note>
 *          <p>The <code>DescribeLimits</code> Request element has no content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeLimitsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeLimitsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLimitsOutput
 * //   AccountMaxReadCapacityUnits: Number("long"),
 * //   AccountMaxWriteCapacityUnits: Number("long"),
 * //   TableMaxReadCapacityUnits: Number("long"),
 * //   TableMaxWriteCapacityUnits: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeLimitsCommandInput - {@link DescribeLimitsCommandInput}
 * @returns {@link DescribeLimitsCommandOutput}
 * @see {@link DescribeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 * @example To determine capacity limits per table and account, in the current AWS region
 * ```javascript
 * // The following example returns the maximum read and write capacity units per table, and for the AWS account, in the current AWS region.
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountMaxReadCapacityUnits": 20000,
 *   "AccountMaxWriteCapacityUnits": 20000,
 *   "TableMaxReadCapacityUnits": 10000,
 *   "TableMaxWriteCapacityUnits": 10000
 * }
 * *\/
 * // example id: to-determine-capacity-limits-per-table-and-account-in-the-current-aws-region-1475884162064
 * ```
 *
 */
export class DescribeLimitsCommand extends $Command
  .classBuilder<
    DescribeLimitsCommandInput,
    DescribeLimitsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "DescribeLimits", {})
  .n("DynamoDBClient", "DescribeLimitsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLimitsCommand)
  .de(de_DescribeLimitsCommand)
  .build() {}
