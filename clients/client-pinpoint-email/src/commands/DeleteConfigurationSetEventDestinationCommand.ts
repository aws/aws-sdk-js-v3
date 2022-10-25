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
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationRequestFilterSensitiveLog,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetEventDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand,
  serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteConfigurationSetEventDestinationCommandInput
  extends DeleteConfigurationSetEventDestinationRequest {}
export interface DeleteConfigurationSetEventDestinationCommandOutput
  extends DeleteConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Delete an event destination.</p>
 *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, DeleteConfigurationSetEventDestinationCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, DeleteConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new DeleteConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class DeleteConfigurationSetEventDestinationCommand extends $Command<
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
  PinpointEmailClientResolvedConfig
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

  constructor(readonly input: DeleteConfigurationSetEventDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfigurationSetEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "DeleteConfigurationSetEventDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationSetEventDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfigurationSetEventDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfigurationSetEventDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
    return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
