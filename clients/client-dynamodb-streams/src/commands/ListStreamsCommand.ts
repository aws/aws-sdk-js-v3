// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStreamsInput, ListStreamsOutput } from "../models/models_0";
import { de_ListStreamsCommand, se_ListStreamsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandInput extends ListStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandOutput extends ListStreamsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the
 *         <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the
 *       streams ARNs for that table.</p>
 *          <note>
 *             <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, ListStreamsCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, ListStreamsCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * // import type { DynamoDBStreamsClientConfig } from "@aws-sdk/client-dynamodb-streams";
 * const config = {}; // type is DynamoDBStreamsClientConfig
 * const client = new DynamoDBStreamsClient(config);
 * const input = { // ListStreamsInput
 *   TableName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   ExclusiveStartStreamArn: "STRING_VALUE",
 * };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamsOutput
 * //   Streams: [ // StreamList
 * //     { // Stream
 * //       StreamArn: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       StreamLabel: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LastEvaluatedStreamArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamsCommandInput - {@link ListStreamsCommandInput}
 * @returns {@link ListStreamsCommandOutput}
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource
 *             might not be specified correctly, or its status might not be
 *             <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBStreamsServiceException}
 * <p>Base exception class for all service exceptions from DynamoDBStreams service.</p>
 *
 *
 * @example To list all of the stream ARNs
 * ```javascript
 * // The following example lists all of the stream ARNs.
 * const input = { /* empty *\/ };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Streams: [
 *     {
 *       StreamArn: "arn:aws:dynamodb:us-wesst-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
 *       StreamLabel: "2015-05-20T20:51:10.252",
 *       TableName: "Forum"
 *     },
 *     {
 *       StreamArn: "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:50:02.714",
 *       StreamLabel: "2015-05-20T20:50:02.714",
 *       TableName: "Forum"
 *     },
 *     {
 *       StreamArn: "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-19T23:03:50.641",
 *       StreamLabel: "2015-05-19T23:03:50.641",
 *       TableName: "Forum"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListStreamsCommand extends $Command
  .classBuilder<
    ListStreamsCommandInput,
    ListStreamsCommandOutput,
    DynamoDBStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DynamoDBStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDBStreams_20120810", "ListStreams", {})
  .n("DynamoDBStreamsClient", "ListStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamsCommand)
  .de(de_ListStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamsInput;
      output: ListStreamsOutput;
    };
    sdk: {
      input: ListStreamsCommandInput;
      output: ListStreamsCommandOutput;
    };
  };
}
