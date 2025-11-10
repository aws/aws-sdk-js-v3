// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApprovalTeamsRequest, ListApprovalTeamsResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { ListApprovalTeams } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApprovalTeamsCommand}.
 */
export interface ListApprovalTeamsCommandInput extends ListApprovalTeamsRequest {}
/**
 * @public
 *
 * The output of {@link ListApprovalTeamsCommand}.
 */
export interface ListApprovalTeamsCommandOutput extends ListApprovalTeamsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of approval teams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListApprovalTeamsCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListApprovalTeamsCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListApprovalTeamsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApprovalTeamsCommand(input);
 * const response = await client.send(command);
 * // { // ListApprovalTeamsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ApprovalTeams: [ // ListApprovalTeamsResponseApprovalTeams
 * //     { // ListApprovalTeamsResponseApprovalTeam
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ApprovalStrategy: { // ApprovalStrategyResponse Union: only one key present
 * //         MofN: { // MofNApprovalStrategy
 * //           MinApprovalsRequired: Number("int"), // required
 * //         },
 * //       },
 * //       NumberOfApprovers: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE" || "DELETING" || "PENDING",
 * //       StatusCode: "VALIDATING" || "PENDING_ACTIVATION" || "FAILED_VALIDATION" || "FAILED_ACTIVATION" || "UPDATE_PENDING_APPROVAL" || "UPDATE_PENDING_ACTIVATION" || "UPDATE_FAILED_APPROVAL" || "UPDATE_FAILED_ACTIVATION" || "UPDATE_FAILED_VALIDATION" || "DELETE_PENDING_APPROVAL" || "DELETE_FAILED_APPROVAL" || "DELETE_FAILED_VALIDATION",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListApprovalTeamsCommandInput - {@link ListApprovalTeamsCommandInput}
 * @returns {@link ListApprovalTeamsCommandOutput}
 * @see {@link ListApprovalTeamsCommandInput} for command's `input` shape.
 * @see {@link ListApprovalTeamsCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
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
export class ListApprovalTeamsCommand extends $Command
  .classBuilder<
    ListApprovalTeamsCommandInput,
    ListApprovalTeamsCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "ListApprovalTeams", {})
  .n("MPAClient", "ListApprovalTeamsCommand")
  .sc(ListApprovalTeams)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApprovalTeamsRequest;
      output: ListApprovalTeamsResponse;
    };
    sdk: {
      input: ListApprovalTeamsCommandInput;
      output: ListApprovalTeamsCommandOutput;
    };
  };
}
