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

import {
  SetIdentityHeadersInNotificationsEnabledRequest,
  SetIdentityHeadersInNotificationsEnabledResponse,
} from "../models/models_0";
import {
  de_SetIdentityHeadersInNotificationsEnabledCommand,
  se_SetIdentityHeadersInNotificationsEnabledCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandInput
  extends SetIdentityHeadersInNotificationsEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandOutput
  extends SetIdentityHeadersInNotificationsEnabledResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the
 *             original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
 *             type.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetIdentityHeadersInNotificationsEnabledRequest
 *   Identity: "STRING_VALUE", // required
 *   NotificationType: "Bounce" || "Complaint" || "Delivery", // required
 *   Enabled: true || false, // required
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityHeadersInNotificationsEnabledCommandInput - {@link SetIdentityHeadersInNotificationsEnabledCommandInput}
 * @returns {@link SetIdentityHeadersInNotificationsEnabledCommandOutput}
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example SetIdentityHeadersInNotificationsEnabled
 * ```javascript
 * // The following example configures Amazon SES to include the original email headers in the Amazon SNS bounce notifications for an identity:
 * const input = {
 *   "Enabled": true,
 *   "Identity": "user@example.com",
 *   "NotificationType": "Bounce"
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * await client.send(command);
 * // example id: setidentityheadersinnotificationsenabled-1469057295001
 * ```
 *
 */
export class SetIdentityHeadersInNotificationsEnabledCommand extends $Command<
  SetIdentityHeadersInNotificationsEnabledCommandInput,
  SetIdentityHeadersInNotificationsEnabledCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: SetIdentityHeadersInNotificationsEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityHeadersInNotificationsEnabledCommandInput,
    SetIdentityHeadersInNotificationsEnabledCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        SetIdentityHeadersInNotificationsEnabledCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetIdentityHeadersInNotificationsEnabledCommand";
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
  private serialize(
    input: SetIdentityHeadersInNotificationsEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SetIdentityHeadersInNotificationsEnabledCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> {
    return de_SetIdentityHeadersInNotificationsEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
