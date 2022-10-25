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
  DeleteTimelineEventInput,
  DeleteTimelineEventInputFilterSensitiveLog,
  DeleteTimelineEventOutput,
  DeleteTimelineEventOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTimelineEventCommand,
  serializeAws_restJson1DeleteTimelineEventCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

export interface DeleteTimelineEventCommandInput extends DeleteTimelineEventInput {}
export interface DeleteTimelineEventCommandOutput extends DeleteTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Deletes a timeline event from an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTimelineEventCommandInput} for command's `input` shape.
 * @see {@link DeleteTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 */
export class DeleteTimelineEventCommand extends $Command<
  DeleteTimelineEventCommandInput,
  DeleteTimelineEventCommandOutput,
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

  constructor(readonly input: DeleteTimelineEventCommandInput) {
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
  ): Handler<DeleteTimelineEventCommandInput, DeleteTimelineEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTimelineEventCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "DeleteTimelineEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTimelineEventInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTimelineEventOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTimelineEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTimelineEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTimelineEventCommandOutput> {
    return deserializeAws_restJson1DeleteTimelineEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
