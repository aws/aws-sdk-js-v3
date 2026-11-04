// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSessionsRequest, ListSessionsResponse } from "../models/models_0";
import { ListSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * Lists information for multiple secure browser sessions from a specific portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListSessionsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListSessionsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListSessionsRequest
 *   portalId: "STRING_VALUE", // required
 *   username: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   sortBy: "StartTimeAscending" || "StartTimeDescending",
 *   status: "Active" || "Terminated",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   sessions: [ // SessionSummaryList // required
 * //     { // SessionSummary
 * //       portalArn: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       username: "STRING_VALUE",
 * //       status: "Active" || "Terminated",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class ListSessionsCommand extends command<ListSessionsCommandInput, ListSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSessions",
  ListSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsRequest;
      output: ListSessionsResponse;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
