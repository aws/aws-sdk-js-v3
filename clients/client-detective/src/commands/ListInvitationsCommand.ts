// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInvitationsRequest, ListInvitationsResponse } from "../models/models_0";
import { ListInvitations } from "../schemas/schemas_2_Members";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandInput extends ListInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandOutput extends ListInvitationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of open and accepted behavior graph invitations for the member
 *          account. This operation can only be called by an invited member account.</p>
 *          <p>Open invitations are invitations that the member account has not responded to.</p>
 *          <p>The results do not include behavior graphs for which the member account declined the
 *          invitation. The results also do not include behavior graphs that the member account
 *          resigned from or was removed from.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListInvitationsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListInvitationsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListInvitationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvitationsResponse
 * //   Invitations: [ // MemberDetailList
 * //     { // MemberDetail
 * //       AccountId: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE",
 * //       AdministratorId: "STRING_VALUE",
 * //       Status: "INVITED" || "VERIFICATION_IN_PROGRESS" || "VERIFICATION_FAILED" || "ENABLED" || "ACCEPTED_BUT_DISABLED",
 * //       DisabledReason: "VOLUME_TOO_HIGH" || "VOLUME_UNKNOWN",
 * //       InvitedTime: new Date("TIMESTAMP"),
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeUsageUpdatedTime: new Date("TIMESTAMP"),
 * //       PercentOfGraphUtilization: Number("double"),
 * //       PercentOfGraphUtilizationUpdatedTime: new Date("TIMESTAMP"),
 * //       InvitationType: "INVITATION" || "ORGANIZATION",
 * //       VolumeUsageByDatasourcePackage: { // VolumeUsageByDatasourcePackage
 * //         "<keys>": { // DatasourcePackageUsageInfo
 * //           VolumeUsageInBytes: Number("long"),
 * //           VolumeUsageUpdateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       DatasourcePackageIngestStates: { // DatasourcePackageIngestStates
 * //         "<keys>": "STARTED" || "STOPPED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvitationsCommandInput - {@link ListInvitationsCommandInput}
 * @returns {@link ListInvitationsCommandOutput}
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class ListInvitationsCommand extends $Command
  .classBuilder<
    ListInvitationsCommandInput,
    ListInvitationsCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "ListInvitations", {})
  .n("DetectiveClient", "ListInvitationsCommand")
  .sc(ListInvitations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvitationsRequest;
      output: ListInvitationsResponse;
    };
    sdk: {
      input: ListInvitationsCommandInput;
      output: ListInvitationsCommandOutput;
    };
  };
}
