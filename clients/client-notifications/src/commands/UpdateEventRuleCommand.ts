// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventRuleRequest, UpdateEventRuleResponse } from "../models/models_0";
import { UpdateEventRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventRuleCommand}.
 */
export interface UpdateEventRuleCommandInput extends UpdateEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventRuleCommand}.
 */
export interface UpdateEventRuleCommandOutput extends UpdateEventRuleResponse, __MetadataBearer {}

/**
 * Updates an existing `EventRule`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, UpdateEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, UpdateEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // UpdateEventRuleRequest
 *   arn: "STRING_VALUE", // required
 *   eventPattern: "STRING_VALUE",
 *   regions: [ // Regions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventRuleResponse
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
 * @param UpdateEventRuleCommandInput - {@link UpdateEventRuleCommandInput}
 * @returns {@link UpdateEventRuleCommandOutput}
 * @see {@link UpdateEventRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateEventRuleCommandOutput} for command's `response` shape.
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
export class UpdateEventRuleCommand extends command<UpdateEventRuleCommandInput, UpdateEventRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventRule",
  UpdateEventRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventRuleRequest;
      output: UpdateEventRuleResponse;
    };
    sdk: {
      input: UpdateEventRuleCommandInput;
      output: UpdateEventRuleCommandOutput;
    };
  };
}
