// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGraphsRequest, ListGraphsResponse } from "../models/models_0";
import { ListGraphs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandInput extends ListGraphsRequest {}
/**
 * @public
 *
 * The output of {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandOutput extends ListGraphsResponse, __MetadataBearer {}

/**
 * Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.
 *
 * Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListGraphsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListGraphsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListGraphsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * // { // ListGraphsResponse
 * //   GraphList: [ // GraphList
 * //     { // Graph
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGraphsCommandInput - {@link ListGraphsCommandInput}
 * @returns {@link ListGraphsCommandOutput}
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request issuer does not have permission to access this resource or perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request was valid but failed because of a problem with the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters are invalid.
 *
 * @throws {@link DetectiveServiceException}
 *
 * Base exception class for all service exceptions from Detective service.
 *
 * @public
 */
export class ListGraphsCommand extends command<ListGraphsCommandInput, ListGraphsCommandOutput>(
  _ep0,
  _mw0,
  "ListGraphs",
  ListGraphs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGraphsRequest;
      output: ListGraphsResponse;
    };
    sdk: {
      input: ListGraphsCommandInput;
      output: ListGraphsCommandOutput;
    };
  };
}
