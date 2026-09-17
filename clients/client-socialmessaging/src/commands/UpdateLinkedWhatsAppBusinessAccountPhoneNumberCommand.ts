// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateLinkedWhatsAppBusinessAccountPhoneNumberInput,
  UpdateLinkedWhatsAppBusinessAccountPhoneNumberOutput,
} from "../models/models_0";
import { UpdateLinkedWhatsAppBusinessAccountPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput extends UpdateLinkedWhatsAppBusinessAccountPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput extends UpdateLinkedWhatsAppBusinessAccountPhoneNumberOutput, __MetadataBearer {}

/**
 * <p>Updates the calling settings for a linked WhatsApp business phone number, such as whether calling is enabled and the hours during which the business accepts calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // UpdateLinkedWhatsAppBusinessAccountPhoneNumberInput
 *   id: "STRING_VALUE", // required
 *   callSettings: { // WhatsAppCallSettings
 *     callEnabled: true || false, // required
 *     callHours: { // WhatsAppCallHours
 *       enabled: true || false, // required
 *       timezone: "STRING_VALUE", // required
 *       weeklyOperatingHours: [ // WhatsAppWeeklyOperatingHoursList // required
 *         { // WhatsAppWeeklyOperatingHoursEntry
 *           dayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 *           openTime: { // WhatsAppTimeOfDay
 *             hours: Number("int"), // required
 *             minutes: Number("int"), // required
 *           },
 *           closeTime: {
 *             hours: Number("int"), // required
 *             minutes: Number("int"), // required
 *           },
 *         },
 *       ],
 *       holidaySchedule: [ // WhatsAppHolidayScheduleList
 *         { // WhatsAppHolidayScheduleEntry
 *           date: "STRING_VALUE", // required
 *           startTime: {
 *             hours: Number("int"), // required
 *             minutes: Number("int"), // required
 *           },
 *           endTime: {
 *             hours: Number("int"), // required
 *             minutes: Number("int"), // required
 *           },
 *         },
 *       ],
 *     },
 *     callIconVisibility: "STRING_VALUE",
 *     callbackPermissionStatus: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkedWhatsAppBusinessAccountPhoneNumberOutput
 * //   phoneNumberId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput - {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput}
 * @returns {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput}
 * @see {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommand extends command<UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput, UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLinkedWhatsAppBusinessAccountPhoneNumber",
  UpdateLinkedWhatsAppBusinessAccountPhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLinkedWhatsAppBusinessAccountPhoneNumberInput;
      output: UpdateLinkedWhatsAppBusinessAccountPhoneNumberOutput;
    };
    sdk: {
      input: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandInput;
      output: UpdateLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput;
    };
  };
}
