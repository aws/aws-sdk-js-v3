// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMembersRequest, ListMembersResponse } from "../models/models_0";
import { ListMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembersCommand}.
 */
export interface ListMembersCommandInput extends ListMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListMembersCommand}.
 */
export interface ListMembersCommandOutput extends ListMembersResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of member accounts for a behavior graph.</p>
 *          <p>For invited accounts, the results do not include member accounts that were removed from
 *          the behavior graph.</p>
 *          <p>For the organization behavior graph, the results do not include organization accounts
 *          that the Detective administrator account has not enabled as member
 *          accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersResponse
 * //   MemberDetails: [ // MemberDetailList
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
 * @param ListMembersCommandInput - {@link ListMembersCommandInput}
 * @returns {@link ListMembersCommandOutput}
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
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
export class ListMembersCommand extends $Command
  .classBuilder<
    ListMembersCommandInput,
    ListMembersCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "ListMembers", {})
  .n("DetectiveClient", "ListMembersCommand")
  .sc(ListMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembersRequest;
      output: ListMembersResponse;
    };
    sdk: {
      input: ListMembersCommandInput;
      output: ListMembersCommandOutput;
    };
  };
}
