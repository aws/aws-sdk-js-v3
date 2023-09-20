// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates an existing room profile by room profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateProfileRequest
 *   ProfileArn: "STRING_VALUE",
 *   ProfileName: "STRING_VALUE",
 *   IsDefault: true || false,
 *   Timezone: "STRING_VALUE",
 *   Address: "STRING_VALUE",
 *   DistanceUnit: "METRIC" || "IMPERIAL",
 *   TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 *   WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 *   Locale: "STRING_VALUE",
 *   SetupModeDisabled: true || false,
 *   MaxVolumeLimit: Number("int"),
 *   PSTNEnabled: true || false,
 *   DataRetentionOptIn: true || false,
 *   MeetingRoomConfiguration: { // UpdateMeetingRoomConfiguration
 *     RoomUtilizationMetricsEnabled: true || false,
 *     EndOfMeetingReminder: { // UpdateEndOfMeetingReminder
 *       ReminderAtMinutes: [ // EndOfMeetingReminderMinutesList
 *         Number("int"),
 *       ],
 *       ReminderType: "ANNOUNCEMENT_TIME_CHECK" || "ANNOUNCEMENT_VARIABLE_TIME_LEFT" || "CHIME" || "KNOCK",
 *       Enabled: true || false,
 *     },
 *     InstantBooking: { // UpdateInstantBooking
 *       DurationInMinutes: Number("int"),
 *       Enabled: true || false,
 *     },
 *     RequireCheckIn: { // UpdateRequireCheckIn
 *       ReleaseAfterMinutes: Number("int"),
 *       Enabled: true || false,
 *     },
 *     ProactiveJoin: { // UpdateProactiveJoin
 *       EnabledByMotion: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateProfileCommand extends $Command<
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "UpdateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "UpdateProfile",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileCommandOutput> {
    return de_UpdateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
