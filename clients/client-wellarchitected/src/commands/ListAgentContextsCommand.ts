// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentContextsRequest, ListAgentContextsResponse } from "../models/models_0";
import { ListAgentContexts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentContextsCommand}.
 */
export interface ListAgentContextsCommandInput extends ListAgentContextsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentContextsCommand}.
 */
export interface ListAgentContextsCommandOutput extends ListAgentContextsResponse, __MetadataBearer {}

/**
 * <p>Lists contexts associated with a profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentContextsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentContextsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentContextsRequest
 *   profileArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentContextsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentContextsResponse
 * //   items: [ // ContextSummaries // required
 * //     { // ContextSummary
 * //       id: "STRING_VALUE", // required
 * //       profileArn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       contextType: "APPLICATION", // required
 * //       content: { // ContextContent
 * //         accountIds: [ // ContextAccountIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         regions: [ // ContextRegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         awsServices: [ // ContextAwsServiceList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTypes: [ // ContextResourceTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         resourceTags: [ // ContextResourceTagList
 * //           { // ContextResourceTag
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         applicationOverview: "STRING_VALUE",
 * //         industry: "STRING_VALUE",
 * //         applicationType: "SAS" || "DESKTOP_APPLICATION" || "OTHER",
 * //         criticality: "MISSION_CRITICAL" || "BUSINESS_CRITICAL" || "NON_CRITICAL" || "TEST_DEVELOPMENT",
 * //         architectureOverview: "STRING_VALUE",
 * //         additionalContext: "STRING_VALUE",
 * //       },
 * //       applicationType: "SAS" || "DESKTOP_APPLICATION" || "OTHER",
 * //       criticality: "MISSION_CRITICAL" || "BUSINESS_CRITICAL" || "NON_CRITICAL" || "TEST_DEVELOPMENT",
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE",
 * //       lastModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentContextsCommandInput - {@link ListAgentContextsCommandInput}
 * @returns {@link ListAgentContextsCommandOutput}
 * @see {@link ListAgentContextsCommandInput} for command's `input` shape.
 * @see {@link ListAgentContextsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListAgentContextsCommand extends command<ListAgentContextsCommandInput, ListAgentContextsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentContexts",
  ListAgentContexts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentContextsRequest;
      output: ListAgentContextsResponse;
    };
    sdk: {
      input: ListAgentContextsCommandInput;
      output: ListAgentContextsCommandOutput;
    };
  };
}
