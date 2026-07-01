// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExtensibleSourceServersRequest, ListExtensibleSourceServersResponse } from "../models/models_0";
import { ListExtensibleSourceServers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExtensibleSourceServersCommand}.
 */
export interface ListExtensibleSourceServersCommandInput extends ListExtensibleSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link ListExtensibleSourceServersCommand}.
 */
export interface ListExtensibleSourceServersCommandOutput extends ListExtensibleSourceServersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListExtensibleSourceServersCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListExtensibleSourceServersCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListExtensibleSourceServersRequest
 *   stagingAccountID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExtensibleSourceServersCommand(input);
 * const response = await client.send(command);
 * // { // ListExtensibleSourceServersResponse
 * //   items: [ // StagingSourceServersList
 * //     { // StagingSourceServer
 * //       hostname: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtensibleSourceServersCommandInput - {@link ListExtensibleSourceServersCommandInput}
 * @returns {@link ListExtensibleSourceServersCommandOutput}
 * @see {@link ListExtensibleSourceServersCommandInput} for command's `input` shape.
 * @see {@link ListExtensibleSourceServersCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class ListExtensibleSourceServersCommand extends command<ListExtensibleSourceServersCommandInput, ListExtensibleSourceServersCommandOutput>(
  _ep0,
  _mw0,
  "ListExtensibleSourceServers",
  ListExtensibleSourceServers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExtensibleSourceServersRequest;
      output: ListExtensibleSourceServersResponse;
    };
    sdk: {
      input: ListExtensibleSourceServersCommandInput;
      output: ListExtensibleSourceServersCommandOutput;
    };
  };
}
