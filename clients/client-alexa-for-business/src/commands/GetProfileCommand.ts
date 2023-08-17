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
} from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import { de_GetProfileCommand, se_GetProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProfileCommand}.
 */
export interface GetProfileCommandInput extends GetProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileCommand}.
 */
export interface GetProfileCommandOutput extends GetProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the details of a room profile by profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetProfileRequest
 *   ProfileArn: "STRING_VALUE",
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResponse
 * //   Profile: { // Profile
 * //     ProfileArn: "STRING_VALUE",
 * //     ProfileName: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     Address: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     DistanceUnit: "METRIC" || "IMPERIAL",
 * //     TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 * //     WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 * //     Locale: "STRING_VALUE",
 * //     SetupModeDisabled: true || false,
 * //     MaxVolumeLimit: Number("int"),
 * //     PSTNEnabled: true || false,
 * //     DataRetentionOptIn: true || false,
 * //     AddressBookArn: "STRING_VALUE",
 * //     MeetingRoomConfiguration: { // MeetingRoomConfiguration
 * //       RoomUtilizationMetricsEnabled: true || false,
 * //       EndOfMeetingReminder: { // EndOfMeetingReminder
 * //         ReminderAtMinutes: [ // EndOfMeetingReminderMinutesList
 * //           Number("int"),
 * //         ],
 * //         ReminderType: "ANNOUNCEMENT_TIME_CHECK" || "ANNOUNCEMENT_VARIABLE_TIME_LEFT" || "CHIME" || "KNOCK",
 * //         Enabled: true || false,
 * //       },
 * //       InstantBooking: { // InstantBooking
 * //         DurationInMinutes: Number("int"),
 * //         Enabled: true || false,
 * //       },
 * //       RequireCheckIn: { // RequireCheckIn
 * //         ReleaseAfterMinutes: Number("int"),
 * //         Enabled: true || false,
 * //       },
 * //       ProactiveJoin: { // ProactiveJoin
 * //         EnabledByMotion: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileCommandInput - {@link GetProfileCommandInput}
 * @returns {@link GetProfileCommandOutput}
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetProfileCommand extends $Command<
  GetProfileCommandInput,
  GetProfileCommandOutput,
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
  constructor(readonly input: GetProfileCommandInput) {
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
  ): Handler<GetProfileCommandInput, GetProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProfileCommandOutput> {
    return de_GetProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
