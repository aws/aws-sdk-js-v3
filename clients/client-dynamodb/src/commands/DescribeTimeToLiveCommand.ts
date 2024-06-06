// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import { de_DescribeTimeToLiveCommand, se_DescribeTimeToLiveCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
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
export class DescribeTimeToLiveCommand extends $Command
  .classBuilder<
    DescribeTimeToLiveCommandInput,
    DescribeTimeToLiveCommandOutput,
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
  .s("DynamoDB_20120810", "DescribeTimeToLive", {})
  .n("DynamoDBClient", "DescribeTimeToLiveCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTimeToLiveCommand)
  .de(de_DescribeTimeToLiveCommand)
  .build() {}
