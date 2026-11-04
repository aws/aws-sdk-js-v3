// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { PutResourcePolicyInput, PutResourcePolicyOutput } from "../models/models_0";
import { PutResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyOutput, __MetadataBearer {}

/**
 * Attaches a resource-based policy document to the resource, which can be a table or stream. When you attach a resource-based policy using this API, the policy application is [*eventually consistent*](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html).
 *
 * `PutResourcePolicy` is an idempotent operation; running it multiple times on the same resource using the same policy document will return the same revision ID. If you specify an `ExpectedRevisionId` that doesn't match the current policy's `RevisionId`, the `PolicyNotFoundException` will be returned.
 *
 * > **Note:** `PutResourcePolicy` is an asynchronous operation. If you issue a `GetResourcePolicy` request immediately after a `PutResourcePolicy` request, DynamoDB might return your previous policy, if there was one, or return the `PolicyNotFoundException`. This is because `GetResourcePolicy` uses an eventually consistent query, and the metadata for your policy or table might not be available at that moment. Wait for a few seconds, and then try the `GetResourcePolicy` request again.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, PutResourcePolicyCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, PutResourcePolicyCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // PutResourcePolicyInput
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   ExpectedRevisionId: "STRING_VALUE",
 *   ConfirmRemoveSelfResourceAccess: true || false,
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyOutput
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * There is no limit to the number of daily on-demand backups that can be taken.
 *
 * For most purposes, up to 500 simultaneous table operations are allowed per account. These operations include `CreateTable`, `UpdateTable`, `DeleteTable`,`UpdateTimeToLive`, `RestoreTableFromBackup`, and `RestoreTableToPointInTime`.
 *
 * When you are creating a table with one or more secondary indexes, you can have up to 250 such requests running at a time. However, if the table or index specifications are complex, then DynamoDB might temporarily reduce the number of concurrent operations.
 *
 * When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.
 *
 * There is a soft account quota of 2,500 tables.
 *
 * GetRecords was called with a value of more than 1000 for the limit request parameter.
 *
 * More than 2 processes are reading from the same streams shard at the same time. Exceeding this limit may result in request throttling.
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource-based policy.
 *
 * If you specified an `ExpectedRevisionId`, it's possible that a policy is present for the resource but its revision ID didn't match the expected value.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The operation conflicts with the resource's availability. For example:
 *
 * - You attempted to recreate an existing table.
 * - You tried to delete a table currently in the `CREATING` state.
 * - You tried to update a resource that was already being updated.
 *
 * When appropriate, wait for the ongoing update to complete and attempt the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class PutResourcePolicyCommand extends command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>(
  _ep5,
  _mw0,
  "PutResourcePolicy",
  PutResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyInput;
      output: PutResourcePolicyOutput;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
