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
  CreateTimelineEventInput,
  CreateTimelineEventInputFilterSensitiveLog,
  CreateTimelineEventOutput,
  CreateTimelineEventOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateTimelineEventCommand,
  serializeAws_restJson1CreateTimelineEventCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

export interface CreateTimelineEventCommandInput extends CreateTimelineEventInput {}
export interface CreateTimelineEventCommandOutput extends CreateTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Creates a custom timeline event on the incident details page of an incident record.
 *             Timeline events are automatically created by Incident Manager, marking key moment during an
 *             incident. You can create custom timeline events to mark important events that are
 *             automatically detected by Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link CreateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 */
export class CreateTimelineEventCommand extends $Command<
  CreateTimelineEventCommandInput,
  CreateTimelineEventCommandOutput,
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

  constructor(readonly input: CreateTimelineEventCommandInput) {
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
  ): Handler<CreateTimelineEventCommandInput, CreateTimelineEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTimelineEventCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "CreateTimelineEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTimelineEventInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTimelineEventOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTimelineEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTimelineEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTimelineEventCommandOutput> {
    return deserializeAws_restJson1CreateTimelineEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
