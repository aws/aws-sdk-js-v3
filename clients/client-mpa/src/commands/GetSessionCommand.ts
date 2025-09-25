// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { GetSession } from "../schemas/schemas_2_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Returns details for an approval session. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Session</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, GetSessionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, GetSessionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // GetSessionRequest
 *   SessionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   SessionArn: "STRING_VALUE",
 * //   ApprovalTeamArn: "STRING_VALUE",
 * //   ApprovalTeamName: "STRING_VALUE",
 * //   ProtectedResourceArn: "STRING_VALUE",
 * //   ApprovalStrategy: { // ApprovalStrategyResponse Union: only one key present
 * //     MofN: { // MofNApprovalStrategy
 * //       MinApprovalsRequired: Number("int"), // required
 * //     },
 * //   },
 * //   NumberOfApprovers: Number("int"),
 * //   InitiationTime: new Date("TIMESTAMP"),
 * //   ExpirationTime: new Date("TIMESTAMP"),
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Metadata: { // SessionMetadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "PENDING" || "CANCELLED" || "APPROVED" || "FAILED" || "CREATING",
 * //   StatusCode: "REJECTED" || "EXPIRED" || "CONFIGURATION_CHANGED",
 * //   StatusMessage: "STRING_VALUE",
 * //   ExecutionStatus: "EXECUTED" || "FAILED" || "PENDING",
 * //   ActionName: "STRING_VALUE",
 * //   RequesterServicePrincipal: "STRING_VALUE",
 * //   RequesterPrincipalArn: "STRING_VALUE",
 * //   RequesterAccountId: "STRING_VALUE",
 * //   RequesterRegion: "STRING_VALUE",
 * //   RequesterComment: "STRING_VALUE",
 * //   ActionCompletionStrategy: "AUTO_COMPLETION_UPON_APPROVAL",
 * //   ApproverResponses: [ // GetSessionResponseApproverResponses
 * //     { // GetSessionResponseApproverResponse
 * //       ApproverId: "STRING_VALUE",
 * //       IdentitySourceArn: "STRING_VALUE",
 * //       IdentityId: "STRING_VALUE",
 * //       Response: "APPROVED" || "REJECTED" || "NO_RESPONSE",
 * //       ResponseTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "GetSession", {})
  .n("MPAClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
