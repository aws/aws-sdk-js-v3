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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListV2LoggingLevelsRequest,
  ListV2LoggingLevelsRequestFilterSensitiveLog,
  ListV2LoggingLevelsResponse,
  ListV2LoggingLevelsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1ListV2LoggingLevelsCommand,
  serializeAws_restJson1ListV2LoggingLevelsCommand,
} from "../protocols/Aws_restJson1";

export interface ListV2LoggingLevelsCommandInput extends ListV2LoggingLevelsRequest {}
export interface ListV2LoggingLevelsCommandOutput extends ListV2LoggingLevelsResponse, __MetadataBearer {}

/**
 * <p>Lists logging levels.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListV2LoggingLevelsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListV2LoggingLevelsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListV2LoggingLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListV2LoggingLevelsCommandInput} for command's `input` shape.
 * @see {@link ListV2LoggingLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListV2LoggingLevelsCommand extends $Command<
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: ListV2LoggingLevelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListV2LoggingLevelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListV2LoggingLevelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListV2LoggingLevelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListV2LoggingLevelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListV2LoggingLevelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListV2LoggingLevelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListV2LoggingLevelsCommandOutput> {
    return deserializeAws_restJson1ListV2LoggingLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
