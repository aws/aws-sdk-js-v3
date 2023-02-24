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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import {
  ListAlarmModelVersionsRequest,
  ListAlarmModelVersionsRequestFilterSensitiveLog,
  ListAlarmModelVersionsResponse,
  ListAlarmModelVersionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAlarmModelVersionsCommand,
  serializeAws_restJson1ListAlarmModelVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAlarmModelVersionsCommandInput extends ListAlarmModelVersionsRequest {}
export interface ListAlarmModelVersionsCommandOutput extends ListAlarmModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of an alarm model. The operation returns only the metadata
 *       associated with each alarm model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListAlarmModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListAlarmModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListAlarmModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlarmModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAlarmModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 */
export class ListAlarmModelVersionsCommand extends $Command<
  ListAlarmModelVersionsCommandInput,
  ListAlarmModelVersionsCommandOutput,
  IoTEventsClientResolvedConfig
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

  constructor(readonly input: ListAlarmModelVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAlarmModelVersionsCommandInput, ListAlarmModelVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAlarmModelVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListAlarmModelVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAlarmModelVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAlarmModelVersionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAlarmModelVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAlarmModelVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAlarmModelVersionsCommandOutput> {
    return deserializeAws_restJson1ListAlarmModelVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
