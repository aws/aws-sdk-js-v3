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
  DeleteEventSourceMappingRequest,
  DeleteEventSourceMappingRequestFilterSensitiveLog,
  EventSourceMappingConfiguration,
  EventSourceMappingConfigurationFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteEventSourceMappingCommand,
  serializeAws_restJson1DeleteEventSourceMappingCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteEventSourceMappingCommandInput extends DeleteEventSourceMappingRequest {}
export interface DeleteEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source
 *         mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 *          <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely
 *       deleted for several seconds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, DeleteEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, DeleteEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new DeleteEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class DeleteEventSourceMappingCommand extends $Command<
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
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

  constructor(readonly input: DeleteEventSourceMappingCommandInput) {
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
  ): Handler<DeleteEventSourceMappingCommandInput, DeleteEventSourceMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventSourceMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "DeleteEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventSourceMappingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EventSourceMappingConfigurationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventSourceMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteEventSourceMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventSourceMappingCommandOutput> {
    return deserializeAws_restJson1DeleteEventSourceMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
