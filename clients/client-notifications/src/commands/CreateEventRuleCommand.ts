// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventRuleRequest, CreateEventRuleResponse } from "../models/models_0";
import { CreateEventRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventRuleCommand}.
 */
export interface CreateEventRuleCommandInput extends CreateEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventRuleCommand}.
 */
export interface CreateEventRuleCommandOutput extends CreateEventRuleResponse, __MetadataBearer {}

/**
 * Creates an [`EventRule`](https://docs.aws.amazon.com/notifications/latest/userguide/glossary.html) that is associated with a specified `NotificationConfiguration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, CreateEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, CreateEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // CreateEventRuleRequest
 *   notificationConfigurationArn: "STRING_VALUE", // required
 *   source: "STRING_VALUE", // required
 *   eventType: "STRING_VALUE", // required
 *   eventPattern: "STRING_VALUE",
 *   regions: [ // Regions // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventRuleResponse
 * //   arn: "STRING_VALUE", // required
 * //   notificationConfigurationArn: "STRING_VALUE", // required
 * //   statusSummaryByRegion: { // StatusSummaryByRegion // required
 * //     "<keys>": { // EventRuleStatusSummary
 * //       status: "STRING_VALUE", // required
 * //       reason: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventRuleCommandInput - {@link CreateEventRuleCommandInput}
 * @returns {@link CreateEventRuleCommandOutput}
 * @see {@link CreateEventRuleCommandInput} for command's `input` shape.
 * @see {@link CreateEventRuleCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception is thrown when the notification event fails validation.
 *
 * @throws {@link NotificationsServiceException}
 *
 * Base exception class for all service exceptions from Notifications service.
 *
 * @public
 */
export class CreateEventRuleCommand extends command<CreateEventRuleCommandInput, CreateEventRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventRule",
  CreateEventRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventRuleRequest;
      output: CreateEventRuleResponse;
    };
    sdk: {
      input: CreateEventRuleCommandInput;
      output: CreateEventRuleCommandOutput;
    };
  };
}
