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

import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_UpdateNotificationSettingsCommand, se_UpdateNotificationSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationSettingsCommand}.
 */
export interface UpdateNotificationSettingsCommandInput extends UpdateNotificationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationSettingsCommand}.
 */
export interface UpdateNotificationSettingsCommandOutput extends UpdateNotificationSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>UpdateNotificationSettings</code> operation creates, updates,
 *             disables or re-enables notifications for a HIT type.
 *             If you call the UpdateNotificationSettings operation for a HIT type that already has a
 *             notification specification, the operation replaces the old specification with a new one.
 *             You can call the UpdateNotificationSettings operation to enable or disable notifications
 *             for the HIT type, without having to modify the notification specification itself by providing
 *             updates to the Active status without specifying a new notification specification.
 *             To change the Active status of a HIT type's notifications,
 *             the HIT type must already have a notification specification,
 *             or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateNotificationSettingsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateNotificationSettingsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // UpdateNotificationSettingsRequest
 *   HITTypeId: "STRING_VALUE", // required
 *   Notification: { // NotificationSpecification
 *     Destination: "STRING_VALUE", // required
 *     Transport: "STRING_VALUE", // required
 *     Version: "STRING_VALUE", // required
 *     EventTypes: [ // EventTypeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Active: true || false,
 * };
 * const command = new UpdateNotificationSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationSettingsCommandInput - {@link UpdateNotificationSettingsCommandInput}
 * @returns {@link UpdateNotificationSettingsCommandOutput}
 * @see {@link UpdateNotificationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationSettingsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class UpdateNotificationSettingsCommand extends $Command<
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: UpdateNotificationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNotificationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateNotificationSettingsCommand";
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
  private serialize(input: UpdateNotificationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNotificationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNotificationSettingsCommandOutput> {
    return de_UpdateNotificationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
