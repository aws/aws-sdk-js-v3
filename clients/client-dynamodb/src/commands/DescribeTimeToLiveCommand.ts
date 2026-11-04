// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import { DescribeTimeToLive$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTimeToLiveCommand}.
 */
export interface DescribeTimeToLiveCommandInput extends DescribeTimeToLiveInput {}
/**
 * @public
 *
 * The output of {@link DescribeTimeToLiveCommand}.
 */
export interface DescribeTimeToLiveCommandOutput extends DescribeTimeToLiveOutput, __MetadataBearer {}

/**
 * Gives a description of the Time to Live (TTL) status on the specified table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeTimeToLiveInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTimeToLiveCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTimeToLiveOutput
 * //   TimeToLiveDescription: { // TimeToLiveDescription
 * //     TimeToLiveStatus: "ENABLING" || "DISABLING" || "ENABLED" || "DISABLED",
 * //     AttributeName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTimeToLiveCommandInput - {@link DescribeTimeToLiveCommandInput}
 * @returns {@link DescribeTimeToLiveCommandOutput}
 * @see {@link DescribeTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
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
export class DescribeTimeToLiveCommand extends command<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput>(
  _ep2,
  _mw0,
  "DescribeTimeToLive",
  DescribeTimeToLive$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTimeToLiveInput;
      output: DescribeTimeToLiveOutput;
    };
    sdk: {
      input: DescribeTimeToLiveCommandInput;
      output: DescribeTimeToLiveCommandOutput;
    };
  };
}
