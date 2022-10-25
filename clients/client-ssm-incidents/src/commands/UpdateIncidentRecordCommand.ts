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
  UpdateIncidentRecordInput,
  UpdateIncidentRecordInputFilterSensitiveLog,
  UpdateIncidentRecordOutput,
  UpdateIncidentRecordOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIncidentRecordCommand,
  serializeAws_restJson1UpdateIncidentRecordCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

export interface UpdateIncidentRecordCommandInput extends UpdateIncidentRecordInput {}
export interface UpdateIncidentRecordCommandOutput extends UpdateIncidentRecordOutput, __MetadataBearer {}

/**
 * <p>Update the details of an incident record. You can use this operation to update an
 *             incident record from the defined chat channel. For more information about using actions
 *             in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 */
export class UpdateIncidentRecordCommand extends $Command<
  UpdateIncidentRecordCommandInput,
  UpdateIncidentRecordCommandOutput,
  SSMIncidentsClientResolvedConfig
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

  constructor(readonly input: UpdateIncidentRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIncidentRecordCommandInput, UpdateIncidentRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIncidentRecordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "UpdateIncidentRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIncidentRecordInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateIncidentRecordOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateIncidentRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIncidentRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIncidentRecordCommandOutput> {
    return deserializeAws_restJson1UpdateIncidentRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
