// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListShareInvitationsInput, ListShareInvitationsOutput } from "../models/models_0";
import { de_ListShareInvitationsCommand, se_ListShareInvitationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListShareInvitationsCommand}.
 */
export interface ListShareInvitationsCommandInput extends ListShareInvitationsInput {}
/**
 * @public
 *
 * The output of {@link ListShareInvitationsCommand}.
 */
export interface ListShareInvitationsCommandOutput extends ListShareInvitationsOutput, __MetadataBearer {}

/**
 * <p>List the share invitations.</p>
 *          <p>
 *             <code>WorkloadNamePrefix</code>, <code>LensNamePrefix</code>,
 *                 <code>ProfileNamePrefix</code>, and <code>TemplateNamePrefix</code> are mutually
 *             exclusive. Use the parameter that matches your <code>ShareResourceType</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListShareInvitationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListShareInvitationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListShareInvitationsInput
 *   WorkloadNamePrefix: "STRING_VALUE",
 *   LensNamePrefix: "STRING_VALUE",
 *   ShareResourceType: "WORKLOAD" || "LENS" || "PROFILE" || "TEMPLATE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProfileNamePrefix: "STRING_VALUE",
 *   TemplateNamePrefix: "STRING_VALUE",
 * };
 * const command = new ListShareInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListShareInvitationsOutput
 * //   ShareInvitationSummaries: [ // ShareInvitationSummaries
 * //     { // ShareInvitationSummary
 * //       ShareInvitationId: "STRING_VALUE",
 * //       SharedBy: "STRING_VALUE",
 * //       SharedWith: "STRING_VALUE",
 * //       PermissionType: "READONLY" || "CONTRIBUTOR",
 * //       ShareResourceType: "WORKLOAD" || "LENS" || "PROFILE" || "TEMPLATE",
 * //       WorkloadName: "STRING_VALUE",
 * //       WorkloadId: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       ProfileArn: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       TemplateArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListShareInvitationsCommandInput - {@link ListShareInvitationsCommandInput}
 * @returns {@link ListShareInvitationsCommandOutput}
 * @see {@link ListShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListShareInvitationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListShareInvitationsCommand extends $Command
  .classBuilder<
    ListShareInvitationsCommandInput,
    ListShareInvitationsCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListShareInvitations", {})
  .n("WellArchitectedClient", "ListShareInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_ListShareInvitationsCommand)
  .de(de_ListShareInvitationsCommand)
  .build() {}
