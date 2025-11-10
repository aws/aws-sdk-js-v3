// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddNotificationChannelRequest, AddNotificationChannelResponse } from "../models/models_0";
import { AddNotificationChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddNotificationChannelCommand}.
 */
export interface AddNotificationChannelCommandInput extends AddNotificationChannelRequest {}
/**
 * @public
 *
 * The output of {@link AddNotificationChannelCommand}.
 */
export interface AddNotificationChannelCommandOutput extends AddNotificationChannelResponse, __MetadataBearer {}

/**
 * <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you
 * 			about important DevOps Guru events, such as when an insight is generated. </p>
 *          <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for Amazon SNS topics</a>.</p>
 *          <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, AddNotificationChannelCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, AddNotificationChannelCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // AddNotificationChannelRequest
 *   Config: { // NotificationChannelConfig
 *     Sns: { // SnsChannelConfig
 *       TopicArn: "STRING_VALUE",
 *     },
 *     Filters: { // NotificationFilterConfig
 *       Severities: [ // InsightSeverities
 *         "LOW" || "MEDIUM" || "HIGH",
 *       ],
 *       MessageTypes: [ // NotificationMessageTypes
 *         "NEW_INSIGHT" || "CLOSED_INSIGHT" || "NEW_ASSOCIATION" || "SEVERITY_UPGRADED" || "NEW_RECOMMENDATION",
 *       ],
 *     },
 *   },
 * };
 * const command = new AddNotificationChannelCommand(input);
 * const response = await client.send(command);
 * // { // AddNotificationChannelResponse
 * //   Id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AddNotificationChannelCommandInput - {@link AddNotificationChannelCommandInput}
 * @returns {@link AddNotificationChannelCommandOutput}
 * @see {@link AddNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> An exception that is thrown when a conflict occurs. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request contains a value that exceeds a maximum quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class AddNotificationChannelCommand extends $Command
  .classBuilder<
    AddNotificationChannelCommandInput,
    AddNotificationChannelCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "AddNotificationChannel", {})
  .n("DevOpsGuruClient", "AddNotificationChannelCommand")
  .sc(AddNotificationChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddNotificationChannelRequest;
      output: AddNotificationChannelResponse;
    };
    sdk: {
      input: AddNotificationChannelCommandInput;
      output: AddNotificationChannelCommandOutput;
    };
  };
}
