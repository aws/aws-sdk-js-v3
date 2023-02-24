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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import {
  ExecuteQueryRequest,
  ExecuteQueryRequestFilterSensitiveLog,
  ExecuteQueryResponse,
  ExecuteQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExecuteQueryCommand,
  serializeAws_restJson1ExecuteQueryCommand,
} from "../protocols/Aws_restJson1";

export interface ExecuteQueryCommandInput extends ExecuteQueryRequest {}
export interface ExecuteQueryCommandOutput extends ExecuteQueryResponse, __MetadataBearer {}

/**
 * <p>Run queries to access information from your knowledge graph of entities within individual workspaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ExecuteQueryCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ExecuteQueryCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const command = new ExecuteQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteQueryCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 */
export class ExecuteQueryCommand extends $Command<
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
  IoTTwinMakerClientResolvedConfig
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

  constructor(readonly input: ExecuteQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteQueryCommandInput, ExecuteQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExecuteQueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "ExecuteQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteQueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteQueryCommandOutput> {
    return deserializeAws_restJson1ExecuteQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
