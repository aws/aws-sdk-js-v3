// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddAttachmentsToSetRequest,
  AddAttachmentsToSetRequestFilterSensitiveLog,
  AddAttachmentsToSetResponse,
  AddAttachmentsToSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddAttachmentsToSetCommand,
  serializeAws_json1_1AddAttachmentsToSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface AddAttachmentsToSetCommandInput extends AddAttachmentsToSetRequest {}
export interface AddAttachmentsToSetCommandOutput extends AddAttachmentsToSetResponse, __MetadataBearer {}

/**
 * <p>Adds one or more attachments to an attachment set. </p>
 *          <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddAttachmentsToSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAttachmentsToSetCommandInput} for command's `input` shape.
 * @see {@link AddAttachmentsToSetCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 */
export class AddAttachmentsToSetCommand extends $Command<
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
  SupportClientResolvedConfig
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

  constructor(readonly input: AddAttachmentsToSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddAttachmentsToSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "AddAttachmentsToSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAttachmentsToSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddAttachmentsToSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddAttachmentsToSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddAttachmentsToSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttachmentsToSetCommandOutput> {
    return deserializeAws_json1_1AddAttachmentsToSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
