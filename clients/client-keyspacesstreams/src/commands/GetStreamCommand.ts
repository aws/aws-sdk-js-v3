// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesStreamsClient";
import { GetStreamInput, GetStreamOutput } from "../models/models_0";
import { GetStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamCommand}.
 */
export interface GetStreamCommandInput extends GetStreamInput {}
/**
 * @public
 *
 * The output of {@link GetStreamCommand}.
 */
export interface GetStreamCommandOutput extends GetStreamOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about a specific data capture stream for an Amazon Keyspaces table. The information includes the stream's Amazon Resource Name (ARN), creation time, current status, retention period, shard composition, and associated table details. This operation helps you monitor and manage the configuration of your Amazon Keyspaces data streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesStreamsClient, GetStreamCommand } from "@aws-sdk/client-keyspacesstreams"; // ES Modules import
 * // const { KeyspacesStreamsClient, GetStreamCommand } = require("@aws-sdk/client-keyspacesstreams"); // CommonJS import
 * // import type { KeyspacesStreamsClientConfig } from "@aws-sdk/client-keyspacesstreams";
 * const config = {}; // type is KeyspacesStreamsClientConfig
 * const client = new KeyspacesStreamsClient(config);
 * const input = { // GetStreamInput
 *   streamArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   shardFilter: { // ShardFilter
 *     type: "CHILD_SHARDS",
 *     shardId: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamOutput
 * //   streamArn: "STRING_VALUE", // required
 * //   streamLabel: "STRING_VALUE", // required
 * //   streamStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED", // required
 * //   streamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY", // required
 * //   creationRequestDateTime: new Date("TIMESTAMP"), // required
 * //   keyspaceName: "STRING_VALUE", // required
 * //   tableName: "STRING_VALUE", // required
 * //   shards: [ // ShardDescriptionList
 * //     { // Shard
 * //       shardId: "STRING_VALUE",
 * //       sequenceNumberRange: { // SequenceNumberRange
 * //         startingSequenceNumber: "STRING_VALUE",
 * //         endingSequenceNumber: "STRING_VALUE",
 * //       },
 * //       parentShardIds: [ // ShardIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStreamCommandInput - {@link GetStreamCommandInput}
 * @returns {@link GetStreamCommandOutput}
 * @see {@link GetStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesStreamsClientResolvedConfig | config} for KeyspacesStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this operation. </p> <p>This exception occurs when your IAM user or role lacks the required permissions to access the Amazon Keyspaces resource or perform the requested action. Check your IAM policies and ensure they grant the necessary permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Keyspaces service encountered an unexpected error while processing the request. </p> <p>This internal server error is not related to your request parameters. Retry your request after a brief delay. If the issue persists, contact Amazon Web Services Support with details of your request to help identify and resolve the problem.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource doesn't exist or could not be found. </p> <p>This exception occurs when you attempt to access a keyspace, table, stream, or other Amazon Keyspaces resource that doesn't exist or that has been deleted. Verify that the resource identifier is correct and that the resource exists in your account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate is too high and exceeds the service's throughput limits. </p> <p>This exception occurs when you send too many requests in a short period of time. Implement exponential backoff in your retry strategy to handle this exception. Reducing your request frequency or distributing requests more evenly can help avoid throughput exceptions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation failed because one or more input parameters failed validation. </p> <p>This exception occurs when there are syntax errors in the request, field constraints are violated, or required parameters are missing. To help you fix the issue, the exception message provides details about which parameter failed and why.</p>
 *
 * @throws {@link KeyspacesStreamsServiceException}
 * <p>Base exception class for all service exceptions from KeyspacesStreams service.</p>
 *
 *
 * @public
 */
export class GetStreamCommand extends $Command
  .classBuilder<
    GetStreamCommandInput,
    GetStreamCommandOutput,
    KeyspacesStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesStreams", "GetStream", {})
  .n("KeyspacesStreamsClient", "GetStreamCommand")
  .sc(GetStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamInput;
      output: GetStreamOutput;
    };
    sdk: {
      input: GetStreamCommandInput;
      output: GetStreamCommandOutput;
    };
  };
}
