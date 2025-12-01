// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateOpsItemRequest, UpdateOpsItemResponse } from "../models/models_1";
import { UpdateOpsItem } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOpsItemCommand}.
 */
export interface UpdateOpsItemCommandInput extends UpdateOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpsItemCommand}.
 */
export interface UpdateOpsItemCommandOutput extends UpdateOpsItemResponse, __MetadataBearer {}

/**
 * <p>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateOpsItemRequest
 *   Description: "STRING_VALUE",
 *   OperationalData: { // OpsItemOperationalData
 *     "<keys>": { // OpsItemDataValue
 *       Value: "STRING_VALUE",
 *       Type: "SearchableString" || "String",
 *     },
 *   },
 *   OperationalDataToDelete: [ // OpsItemOpsDataKeysList
 *     "STRING_VALUE",
 *   ],
 *   Notifications: [ // OpsItemNotifications
 *     { // OpsItemNotification
 *       Arn: "STRING_VALUE",
 *     },
 *   ],
 *   Priority: Number("int"),
 *   RelatedOpsItems: [ // RelatedOpsItems
 *     { // RelatedOpsItem
 *       OpsItemId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Revoked" || "Rejected" || "Closed",
 *   OpsItemId: "STRING_VALUE", // required
 *   Title: "STRING_VALUE",
 *   Category: "STRING_VALUE",
 *   Severity: "STRING_VALUE",
 *   ActualStartTime: new Date("TIMESTAMP"),
 *   ActualEndTime: new Date("TIMESTAMP"),
 *   PlannedStartTime: new Date("TIMESTAMP"),
 *   PlannedEndTime: new Date("TIMESTAMP"),
 *   OpsItemArn: "STRING_VALUE",
 * };
 * const command = new UpdateOpsItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOpsItemCommandInput - {@link UpdateOpsItemCommandInput}
 * @returns {@link UpdateOpsItemCommandOutput}
 * @see {@link UpdateOpsItemCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemAccessDeniedException} (client fault)
 *  <p>You don't have permission to view OpsItems in the specified account. Verify that your account
 *    is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations
 *    management account.</p>
 *
 * @throws {@link OpsItemAlreadyExistsException} (client fault)
 *  <p>The OpsItem already exists.</p>
 *
 * @throws {@link OpsItemConflictException} (client fault)
 *  <p>The specified OpsItem is in the process of being deleted.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateOpsItemCommand extends $Command
  .classBuilder<
    UpdateOpsItemCommandInput,
    UpdateOpsItemCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateOpsItem", {})
  .n("SSMClient", "UpdateOpsItemCommand")
  .sc(UpdateOpsItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOpsItemRequest;
      output: {};
    };
    sdk: {
      input: UpdateOpsItemCommandInput;
      output: UpdateOpsItemCommandOutput;
    };
  };
}
