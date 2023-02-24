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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  EventSourceMappingConfiguration,
  EventSourceMappingConfigurationFilterSensitiveLog,
  GetEventSourceMappingRequest,
  GetEventSourceMappingRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEventSourceMappingCommand,
  serializeAws_restJson1GetEventSourceMappingCommand,
} from "../protocols/Aws_restJson1";

export interface GetEventSourceMappingCommandInput extends GetEventSourceMappingRequest {}
export interface GetEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of
 *         <a>ListEventSourceMappings</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link GetEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class GetEventSourceMappingCommand extends $Command<
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: GetEventSourceMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventSourceMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventSourceMappingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EventSourceMappingConfigurationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventSourceMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEventSourceMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventSourceMappingCommandOutput> {
    return deserializeAws_restJson1GetEventSourceMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
