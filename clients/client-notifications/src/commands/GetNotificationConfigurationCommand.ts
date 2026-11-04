// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNotificationConfigurationRequest, GetNotificationConfigurationResponse } from "../models/models_0";
import { GetNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandInput extends GetNotificationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetNotificationConfigurationCommand}.
 */
export interface GetNotificationConfigurationCommandOutput extends GetNotificationConfigurationResponse, __MetadataBearer {}

/**
 * Returns a specified `NotificationConfiguration`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetNotificationConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetNotificationConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   aggregationDuration: "STRING_VALUE",
 * //   subtype: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNotificationConfigurationCommandInput - {@link GetNotificationConfigurationCommandInput}
 * @returns {@link GetNotificationConfigurationCommandOutput}
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
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
export class GetNotificationConfigurationCommand extends command<GetNotificationConfigurationCommandInput, GetNotificationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetNotificationConfiguration",
  GetNotificationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotificationConfigurationRequest;
      output: GetNotificationConfigurationResponse;
    };
    sdk: {
      input: GetNotificationConfigurationCommandInput;
      output: GetNotificationConfigurationCommandOutput;
    };
  };
}
