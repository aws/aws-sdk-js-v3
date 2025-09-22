// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSessionsRequest, ListSessionsResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { ListSessions } from "../schemas/schemas_2_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of approval sessions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Session</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListSessionsCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListSessionsCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListSessionsRequest
 *   ApprovalTeamArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       FieldName: "ActionName" || "ApprovalTeamName" || "VotingTime" || "Vote" || "SessionStatus" || "InitiationTime",
 *       Operator: "EQ" || "NE" || "GT" || "LT" || "GTE" || "LTE" || "CONTAINS" || "NOT_CONTAINS" || "BETWEEN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Sessions: [ // ListSessionsResponseSessions
 * //     { // ListSessionsResponseSession
 * //       SessionArn: "STRING_VALUE",
 * //       ApprovalTeamName: "STRING_VALUE",
 * //       ApprovalTeamArn: "STRING_VALUE",
 * //       InitiationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       ActionName: "STRING_VALUE",
 * //       ProtectedResourceArn: "STRING_VALUE",
 * //       RequesterServicePrincipal: "STRING_VALUE",
 * //       RequesterPrincipalArn: "STRING_VALUE",
 * //       RequesterRegion: "STRING_VALUE",
 * //       RequesterAccountId: "STRING_VALUE",
 * //       Status: "PENDING" || "CANCELLED" || "APPROVED" || "FAILED" || "CREATING",
 * //       StatusCode: "REJECTED" || "EXPIRED" || "CONFIGURATION_CHANGED",
 * //       StatusMessage: "STRING_VALUE",
 * //       ActionCompletionStrategy: "AUTO_COMPLETION_UPON_APPROVAL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class ListSessionsCommand extends $Command
  .classBuilder<
    ListSessionsCommandInput,
    ListSessionsCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "ListSessions", {})
  .n("MPAClient", "ListSessionsCommand")
  .sc(ListSessions)
  .build() {
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
