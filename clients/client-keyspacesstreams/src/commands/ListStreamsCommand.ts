// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KeyspacesStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KeyspacesStreamsClient";
import type { ListStreamsInput, ListStreamsOutput } from "../models/models_0";
import { ListStreams } from "../schemas/schemas_0";

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
 * <p>Returns a list of all data capture streams associated with your Amazon Keyspaces account or for a specific keyspace or table. The response includes information such as stream ARNs, table associations, creation timestamps, and current status. This operation helps you discover and manage all active data streams in your Amazon Keyspaces environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesStreamsClient, ListStreamsCommand } from "@aws-sdk/client-keyspacesstreams"; // ES Modules import
 * // const { KeyspacesStreamsClient, ListStreamsCommand } = require("@aws-sdk/client-keyspacesstreams"); // CommonJS import
 * // import type { KeyspacesStreamsClientConfig } from "@aws-sdk/client-keyspacesstreams";
 * const config = {}; // type is KeyspacesStreamsClientConfig
 * const client = new KeyspacesStreamsClient(config);
 * const input = { // ListStreamsInput
 *   keyspaceName: "STRING_VALUE",
 *   tableName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamsOutput
 * //   streams: [ // StreamList
 * //     { // Stream
 * //       streamArn: "STRING_VALUE", // required
 * //       keyspaceName: "STRING_VALUE", // required
 * //       tableName: "STRING_VALUE", // required
 * //       streamLabel: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamsCommandInput - {@link ListStreamsCommandInput}
 * @returns {@link ListStreamsCommandOutput}
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
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
export class ListStreamsCommand extends $Command
  .classBuilder<
    ListStreamsCommandInput,
    ListStreamsCommandOutput,
    KeyspacesStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesStreams", "ListStreams", {})
  .n("KeyspacesStreamsClient", "ListStreamsCommand")
  .sc(ListStreams)
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
