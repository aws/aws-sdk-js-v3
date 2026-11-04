// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventRuleRequest, GetEventRuleResponse } from "../models/models_0";
import { GetEventRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventRuleCommand}.
 */
export interface GetEventRuleCommandInput extends GetEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetEventRuleCommand}.
 */
export interface GetEventRuleCommandOutput extends GetEventRuleResponse, __MetadataBearer {}

/**
 * Returns a specified `EventRule`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetEventRuleRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetEventRuleResponse
 * //   arn: "STRING_VALUE", // required
 * //   notificationConfigurationArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   source: "STRING_VALUE", // required
 * //   eventType: "STRING_VALUE", // required
 * //   eventPattern: "STRING_VALUE", // required
 * //   regions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * //   managedRules: [ // ManagedRuleArns // required
 * //     "STRING_VALUE",
 * //   ],
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
 * @param GetEventRuleCommandInput - {@link GetEventRuleCommandInput}
 * @returns {@link GetEventRuleCommandOutput}
 * @see {@link GetEventRuleCommandInput} for command's `input` shape.
 * @see {@link GetEventRuleCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
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
export class GetEventRuleCommand extends command<GetEventRuleCommandInput, GetEventRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetEventRule",
  GetEventRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventRuleRequest;
      output: GetEventRuleResponse;
    };
    sdk: {
      input: GetEventRuleCommandInput;
      output: GetEventRuleCommandOutput;
    };
  };
}
