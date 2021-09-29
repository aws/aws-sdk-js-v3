import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { FailoverShardRequest, FailoverShardResponse } from "../models/models_0";
import {
  deserializeAws_json1_1FailoverShardCommand,
  serializeAws_json1_1FailoverShardCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface FailoverShardCommandInput extends FailoverShardRequest {}
export interface FailoverShardCommandOutput extends FailoverShardResponse, __MetadataBearer {}

/**
 * <p>Used to failover a shard</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, FailoverShardCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, FailoverShardCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new FailoverShardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverShardCommandInput} for command's `input` shape.
 * @see {@link FailoverShardCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class FailoverShardCommand extends $Command<
  FailoverShardCommandInput,
  FailoverShardCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FailoverShardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverShardCommandInput, FailoverShardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "FailoverShardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverShardRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FailoverShardResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverShardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1FailoverShardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverShardCommandOutput> {
    return deserializeAws_json1_1FailoverShardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
