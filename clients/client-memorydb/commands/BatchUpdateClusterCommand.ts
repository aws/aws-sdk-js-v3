import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { BatchUpdateClusterRequest, BatchUpdateClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchUpdateClusterCommand,
  serializeAws_json1_1BatchUpdateClusterCommand,
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

export interface BatchUpdateClusterCommandInput extends BatchUpdateClusterRequest {}
export interface BatchUpdateClusterCommandOutput extends BatchUpdateClusterResponse, __MetadataBearer {}

/**
 * <p>Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonMemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, BatchUpdateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, BatchUpdateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new BatchUpdateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateClusterCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchUpdateClusterCommand extends $Command<
  BatchUpdateClusterCommandInput,
  BatchUpdateClusterCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateClusterCommandInput) {
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
  ): Handler<BatchUpdateClusterCommandInput, BatchUpdateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "BatchUpdateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchUpdateClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateClusterCommandOutput> {
    return deserializeAws_json1_1BatchUpdateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
