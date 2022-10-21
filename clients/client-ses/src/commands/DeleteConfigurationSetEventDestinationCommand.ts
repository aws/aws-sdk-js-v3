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
import {
  deserializeAws_queryDeleteConfigurationSetEventDestinationCommand,
  serializeAws_queryDeleteConfigurationSetEventDestinationCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface DeleteConfigurationSetEventDestinationCommandInput
  extends DeleteConfigurationSetEventDestinationRequest {}
export interface DeleteConfigurationSetEventDestinationCommandOutput
  extends DeleteConfigurationSetEventDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a configuration set event destination. Configuration set event destinations
 *             are associated with configuration sets, which enable you to publish email sending
 *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class DeleteConfigurationSetEventDestinationCommand extends $Command<
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
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
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfigurationSetEventDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
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
    return serializeAws_queryDeleteConfigurationSetEventDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
    return deserializeAws_queryDeleteConfigurationSetEventDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
