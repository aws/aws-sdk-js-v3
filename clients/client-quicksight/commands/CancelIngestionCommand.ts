import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CancelIngestionRequest, CancelIngestionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelIngestionCommand,
  serializeAws_restJson1CancelIngestionCommand,
} from "../protocols/Aws_restJson1";
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

export interface CancelIngestionCommandInput extends CancelIngestionRequest {}
export interface CancelIngestionCommandOutput extends CancelIngestionResponse, __MetadataBearer {}

/**
 * <p>Cancels an ongoing ingestion of data into SPICE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CancelIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CancelIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CancelIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelIngestionCommandInput} for command's `input` shape.
 * @see {@link CancelIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelIngestionCommand extends $Command<
  CancelIngestionCommandInput,
  CancelIngestionCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelIngestionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelIngestionCommandInput, CancelIngestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CancelIngestionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelIngestionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelIngestionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelIngestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelIngestionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelIngestionCommandOutput> {
    return deserializeAws_restJson1CancelIngestionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
