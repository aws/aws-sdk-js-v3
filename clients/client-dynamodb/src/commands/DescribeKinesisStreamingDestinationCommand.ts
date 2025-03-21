// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeKinesisStreamingDestinationInput,
  DescribeKinesisStreamingDestinationOutput,
} from "../models/models_0";
import { DescribeKinesisStreamingDestination } from "../schemas/com.amazonaws.dynamodb";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKinesisStreamingDestinationCommand}.
 */
export interface DescribeKinesisStreamingDestinationCommandInput extends DescribeKinesisStreamingDestinationInput {}
/**
 * @public
 *
 * The output of {@link DescribeKinesisStreamingDestinationCommand}.
 */
export interface DescribeKinesisStreamingDestinationCommandOutput
  extends DescribeKinesisStreamingDestinationOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about the status of Kinesis streaming.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeKinesisStreamingDestinationInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKinesisStreamingDestinationOutput
 * //   TableName: "STRING_VALUE",
 * //   KinesisDataStreamDestinations: [ // KinesisDataStreamDestinations
 * //     { // KinesisDataStreamDestination
 * //       StreamArn: "STRING_VALUE",
 * //       DestinationStatus: "ENABLING" || "ACTIVE" || "DISABLING" || "DISABLED" || "ENABLE_FAILED" || "UPDATING",
 * //       DestinationStatusDescription: "STRING_VALUE",
 * //       ApproximateCreationDateTimePrecision: "MILLISECOND" || "MICROSECOND",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeKinesisStreamingDestinationCommandInput - {@link DescribeKinesisStreamingDestinationCommandInput}
 * @returns {@link DescribeKinesisStreamingDestinationCommandOutput}
 * @see {@link DescribeKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeKinesisStreamingDestinationCommandOutput} for command's `response` shape.
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
export class DescribeKinesisStreamingDestinationCommand extends $Command
  .classBuilder<
    DescribeKinesisStreamingDestinationCommandInput,
    DescribeKinesisStreamingDestinationCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableName" },
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DynamoDB_20120810", "DescribeKinesisStreamingDestination", {})
  .n("DynamoDBClient", "DescribeKinesisStreamingDestinationCommand")
  .f(void 0, void 0)
  .sc(DescribeKinesisStreamingDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKinesisStreamingDestinationInput;
      output: DescribeKinesisStreamingDestinationOutput;
    };
    sdk: {
      input: DescribeKinesisStreamingDestinationCommandInput;
      output: DescribeKinesisStreamingDestinationCommandOutput;
    };
  };
}
