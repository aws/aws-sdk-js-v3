// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddNotificationChannelRequest, AddNotificationChannelResponse } from "../models/models_0";
import { AddNotificationChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated.
 *
 * If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see [Permissions for Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html).
 *
 * If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see [Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics](https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html).
 *
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
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An exception that is thrown when a conflict occurs.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request contains a value that exceeds a maximum quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class AddNotificationChannelCommand extends command<AddNotificationChannelCommandInput, AddNotificationChannelCommandOutput>(
  _ep0,
  _mw0,
  "AddNotificationChannel",
  AddNotificationChannel$
) {
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
