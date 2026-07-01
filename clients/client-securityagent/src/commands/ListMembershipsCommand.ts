// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMembershipsRequest, ListMembershipsResponse } from "../models/models_0";
import { ListMemberships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandInput extends ListMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandOutput extends ListMembershipsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of membership summaries for the specified agent space within an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListMembershipsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListMembershipsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListMembershipsRequest
 *   applicationId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   memberType: "USER" || "ALL",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListMembershipsResponse
 * //   membershipSummaries: [ // MembershipSummaryList // required
 * //     { // MembershipSummary
 * //       membershipId: "STRING_VALUE", // required
 * //       applicationId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       memberType: "USER", // required
 * //       config: { // MembershipConfig Union: only one key present
 * //         user: { // UserConfig
 * //           role: "MEMBER",
 * //         },
 * //       },
 * //       metadata: { // MemberMetadata Union: only one key present
 * //         user: { // UserMetadata
 * //           username: "STRING_VALUE", // required
 * //           email: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedBy: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMembershipsCommandInput - {@link ListMembershipsCommandInput}
 * @returns {@link ListMembershipsCommandOutput}
 * @see {@link ListMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListMembershipsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListMembershipsCommand extends command<ListMembershipsCommandInput, ListMembershipsCommandOutput>(
  _ep0,
  _mw0,
  "ListMemberships",
  ListMemberships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembershipsRequest;
      output: ListMembershipsResponse;
    };
    sdk: {
      input: ListMembershipsCommandInput;
      output: ListMembershipsCommandOutput;
    };
  };
}
