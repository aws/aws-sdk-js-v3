import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetBlueprintsRequest, BatchGetBlueprintsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetBlueprintsCommand,
  serializeAws_json1_1BatchGetBlueprintsCommand,
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

export interface BatchGetBlueprintsCommandInput extends BatchGetBlueprintsRequest {}
export interface BatchGetBlueprintsCommandOutput extends BatchGetBlueprintsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a list of blueprints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetBlueprintsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetBlueprintsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetBlueprintsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link BatchGetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchGetBlueprintsCommand extends $Command<
  BatchGetBlueprintsCommandInput,
  BatchGetBlueprintsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetBlueprintsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetBlueprintsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetBlueprintsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetBlueprintsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetBlueprintsCommandOutput> {
    return deserializeAws_json1_1BatchGetBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
