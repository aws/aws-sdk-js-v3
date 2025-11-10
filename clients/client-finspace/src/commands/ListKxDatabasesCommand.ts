// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxDatabasesRequest, ListKxDatabasesResponse } from "../models/models_0";
import { ListKxDatabases } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxDatabasesCommand}.
 */
export interface ListKxDatabasesCommandInput extends ListKxDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link ListKxDatabasesCommand}.
 */
export interface ListKxDatabasesCommandOutput extends ListKxDatabasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the databases in the kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxDatabasesCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxDatabasesCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // ListKxDatabasesRequest
 *   environmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // ListKxDatabasesResponse
 * //   kxDatabases: [ // KxDatabases
 * //     { // KxDatabaseListEntry
 * //       databaseName: "STRING_VALUE",
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxDatabasesCommandInput - {@link ListKxDatabasesCommandInput}
 * @returns {@link ListKxDatabasesCommandOutput}
 * @see {@link ListKxDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListKxDatabasesCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class ListKxDatabasesCommand extends $Command
  .classBuilder<
    ListKxDatabasesCommandInput,
    ListKxDatabasesCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "ListKxDatabases", {})
  .n("FinspaceClient", "ListKxDatabasesCommand")
  .sc(ListKxDatabases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxDatabasesRequest;
      output: ListKxDatabasesResponse;
    };
    sdk: {
      input: ListKxDatabasesCommandInput;
      output: ListKxDatabasesCommandOutput;
    };
  };
}
