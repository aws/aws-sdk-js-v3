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
import { CreateProfileRequest, CreateProfileResponse } from "../models/models_0";
import { de_CreateProfileCommand, se_CreateProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandInput extends CreateProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandOutput extends CreateProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a new room profile with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateProfileRequest
 *   ProfileName: "STRING_VALUE", // required
 *   Timezone: "STRING_VALUE", // required
 *   Address: "STRING_VALUE", // required
 *   DistanceUnit: "METRIC" || "IMPERIAL", // required
 *   TemperatureUnit: "FAHRENHEIT" || "CELSIUS", // required
 *   WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER", // required
 *   Locale: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   SetupModeDisabled: true || false,
 *   MaxVolumeLimit: Number("int"),
 *   PSTNEnabled: true || false,
 *   DataRetentionOptIn: true || false,
 *   MeetingRoomConfiguration: { // CreateMeetingRoomConfiguration
 *     RoomUtilizationMetricsEnabled: true || false,
 *     EndOfMeetingReminder: { // CreateEndOfMeetingReminder
 *       ReminderAtMinutes: [ // EndOfMeetingReminderMinutesList // required
 *         Number("int"),
 *       ],
 *       ReminderType: "ANNOUNCEMENT_TIME_CHECK" || "ANNOUNCEMENT_VARIABLE_TIME_LEFT" || "CHIME" || "KNOCK", // required
 *       Enabled: true || false, // required
 *     },
 *     InstantBooking: { // CreateInstantBooking
 *       DurationInMinutes: Number("int"), // required
 *       Enabled: true || false, // required
 *     },
 *     RequireCheckIn: { // CreateRequireCheckIn
 *       ReleaseAfterMinutes: Number("int"), // required
 *       Enabled: true || false, // required
 *     },
 *     ProactiveJoin: { // CreateProactiveJoin
 *       EnabledByMotion: true || false, // required
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileResponse
 * //   ProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateProfileCommand extends $Command<
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
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
  constructor(readonly input: CreateProfileCommandInput) {
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
  ): Handler<CreateProfileCommandInput, CreateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "CreateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "CreateProfile",
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
  private serialize(input: CreateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProfileCommandOutput> {
    return de_CreateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
