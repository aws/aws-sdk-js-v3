// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResourcePolicyInput, DeleteResourcePolicyOutput } from "../models/models_0";
import { de_DeleteResourcePolicyCommand, se_DeleteResourcePolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the resource-based policy attached to the resource, which can be a table or stream.</p>
 *          <p>
 *             <code>DeleteResourcePolicy</code> is an idempotent operation; running it multiple times on the same resource <i>doesn't</i> result in an error response, unless you specify an <code>ExpectedRevisionId</code>, which will then return a <code>PolicyNotFoundException</code>.</p>
 *          <important>
 *             <p>To make sure that you don't inadvertently lock yourself out of your own resources, the root principal in your Amazon Web Services account can perform <code>DeleteResourcePolicy</code> requests, even if your resource-based policy explicitly denies the root principal's access.
 *             </p>
 *          </important>
 *          <note>
 *             <p>
 *                <code>DeleteResourcePolicy</code> is an asynchronous operation. If you issue a <code>GetResourcePolicy</code> request immediately after running the <code>DeleteResourcePolicy</code> request, DynamoDB might still return the deleted policy. This is because the policy for your resource might not have been deleted yet. Wait for a few seconds, and then try the <code>GetResourcePolicy</code> request again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DeleteResourcePolicyInput
 *   ResourceArn: "STRING_VALUE", // required
 *   ExpectedRevisionId: "STRING_VALUE",
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResourcePolicyOutput
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *             this limit may result in request throttling.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource-based policy.</p>
 *          <p>If you specified an <code>ExpectedRevisionId</code>, it's possible that a policy is present for the resource but its revision ID didn't match the expected value.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class DeleteResourcePolicyCommand extends $Command
  .classBuilder<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput,
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
  .s("DynamoDB_20120810", "DeleteResourcePolicy", {})
  .n("DynamoDBClient", "DeleteResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResourcePolicyCommand)
  .de(de_DeleteResourcePolicyCommand)
  .build() {}
