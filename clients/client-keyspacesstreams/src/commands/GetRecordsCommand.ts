// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesStreamsClient";
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { GetRecords } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandInput extends GetRecordsInput {}
/**
 * @public
 *
 * The output of {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandOutput extends GetRecordsOutput, __MetadataBearer {}

/**
 * <p>Retrieves data records from a specified shard in an Amazon Keyspaces data stream. This operation returns a collection of data records from the shard, including the primary key columns and information about modifications made to the captured table data. Each record represents a single data modification in the Amazon Keyspaces table and includes metadata about when the change occurred.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesStreamsClient, GetRecordsCommand } from "@aws-sdk/client-keyspacesstreams"; // ES Modules import
 * // const { KeyspacesStreamsClient, GetRecordsCommand } = require("@aws-sdk/client-keyspacesstreams"); // CommonJS import
 * // import type { KeyspacesStreamsClientConfig } from "@aws-sdk/client-keyspacesstreams";
 * const config = {}; // type is KeyspacesStreamsClientConfig
 * const client = new KeyspacesStreamsClient(config);
 * const input = { // GetRecordsInput
 *   shardIterator: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordsOutput
 * //   changeRecords: [ // RecordList
 * //     { // Record
 * //       eventVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       origin: "USER" || "REPLICATION" || "TTL",
 * //       partitionKeys: { // KeyspacesKeysMap
 * //         "<keys>": { // KeyspacesCellValue Union: only one key present
 * //           asciiT: "STRING_VALUE",
 * //           bigintT: "STRING_VALUE",
 * //           blobT: new Uint8Array(),
 * //           boolT: true || false,
 * //           counterT: "STRING_VALUE",
 * //           dateT: "STRING_VALUE",
 * //           decimalT: "STRING_VALUE",
 * //           doubleT: "STRING_VALUE",
 * //           floatT: "STRING_VALUE",
 * //           inetT: "STRING_VALUE",
 * //           intT: "STRING_VALUE",
 * //           listT: [ // KeyspacesCellList
 * //             { // KeyspacesCell
 * //               value: {//  Union: only one key present
 * //                 asciiT: "STRING_VALUE",
 * //                 bigintT: "STRING_VALUE",
 * //                 blobT: new Uint8Array(),
 * //                 boolT: true || false,
 * //                 counterT: "STRING_VALUE",
 * //                 dateT: "STRING_VALUE",
 * //                 decimalT: "STRING_VALUE",
 * //                 doubleT: "STRING_VALUE",
 * //                 floatT: "STRING_VALUE",
 * //                 inetT: "STRING_VALUE",
 * //                 intT: "STRING_VALUE",
 * //                 listT: [
 * //                   {
 * //                     value: "<KeyspacesCellValue>",
 * //                     metadata: { // KeyspacesMetadata
 * //                       expirationTime: "STRING_VALUE",
 * //                       writeTime: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 mapT: [ // KeyspacesCellMap
 * //                   { // KeyspacesCellMapDefinition
 * //                     key: "<KeyspacesCellValue>",
 * //                     value: "<KeyspacesCellValue>",
 * //                     metadata: {
 * //                       expirationTime: "STRING_VALUE",
 * //                       writeTime: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 setT: [
 * //                   {
 * //                     value: "<KeyspacesCellValue>",
 * //                     metadata: {
 * //                       expirationTime: "STRING_VALUE",
 * //                       writeTime: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 smallintT: "STRING_VALUE",
 * //                 textT: "STRING_VALUE",
 * //                 timeT: "STRING_VALUE",
 * //                 timestampT: "STRING_VALUE",
 * //                 timeuuidT: "STRING_VALUE",
 * //                 tinyintT: "STRING_VALUE",
 * //                 tupleT: [
 * //                   {
 * //                     value: "<KeyspacesCellValue>",
 * //                     metadata: {
 * //                       expirationTime: "STRING_VALUE",
 * //                       writeTime: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 uuidT: "STRING_VALUE",
 * //                 varcharT: "STRING_VALUE",
 * //                 varintT: "STRING_VALUE",
 * //                 udtT: { // KeyspacesUdtMap
 * //                   "<keys>": {
 * //                     value: "<KeyspacesCellValue>",
 * //                     metadata: {
 * //                       expirationTime: "STRING_VALUE",
 * //                       writeTime: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //               metadata: "<KeyspacesMetadata>",
 * //             },
 * //           ],
 * //           mapT: [
 * //             {
 * //               key: "<KeyspacesCellValue>",
 * //               value: "<KeyspacesCellValue>",
 * //               metadata: "<KeyspacesMetadata>",
 * //             },
 * //           ],
 * //           setT: [
 * //             "<KeyspacesCell>",
 * //           ],
 * //           smallintT: "STRING_VALUE",
 * //           textT: "STRING_VALUE",
 * //           timeT: "STRING_VALUE",
 * //           timestampT: "STRING_VALUE",
 * //           timeuuidT: "STRING_VALUE",
 * //           tinyintT: "STRING_VALUE",
 * //           tupleT: "<KeyspacesCellList>",
 * //           uuidT: "STRING_VALUE",
 * //           varcharT: "STRING_VALUE",
 * //           varintT: "STRING_VALUE",
 * //           udtT: {
 * //             "<keys>": "<KeyspacesCell>",
 * //           },
 * //         },
 * //       },
 * //       clusteringKeys: {
 * //         "<keys>": "<KeyspacesCellValue>",
 * //       },
 * //       newImage: { // KeyspacesRow
 * //         valueCells: { // KeyspacesCells
 * //           "<keys>": "<KeyspacesCell>",
 * //         },
 * //         staticCells: {
 * //           "<keys>": "<KeyspacesCell>",
 * //         },
 * //         rowMetadata: "<KeyspacesMetadata>",
 * //       },
 * //       oldImage: {
 * //         valueCells: {
 * //           "<keys>": "<KeyspacesCell>",
 * //         },
 * //         staticCells: {
 * //           "<keys>": "<KeyspacesCell>",
 * //         },
 * //         rowMetadata: "<KeyspacesMetadata>",
 * //       },
 * //       sequenceNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextShardIterator: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecordsCommandInput - {@link GetRecordsCommandInput}
 * @returns {@link GetRecordsCommandOutput}
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
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
export class GetRecordsCommand extends $Command
  .classBuilder<
    GetRecordsCommandInput,
    GetRecordsCommandOutput,
    KeyspacesStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesStreams", "GetRecords", {})
  .n("KeyspacesStreamsClient", "GetRecordsCommand")
  .sc(GetRecords)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecordsInput;
      output: GetRecordsOutput;
    };
    sdk: {
      input: GetRecordsCommandInput;
      output: GetRecordsCommandOutput;
    };
  };
}
