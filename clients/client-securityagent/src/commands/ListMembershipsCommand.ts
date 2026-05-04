// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMembershipsRequest, ListMembershipsResponse } from "../models/models_0";
import { ListMemberships$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListMembershipsCommand extends $Command
  .classBuilder<
    ListMembershipsCommandInput,
    ListMembershipsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListMemberships", {})
  .n("SecurityAgentClient", "ListMembershipsCommand")
  .sc(ListMemberships$)
  .build() {
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
