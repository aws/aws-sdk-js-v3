import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteColumnStatisticsForTableRequest, DeleteColumnStatisticsForTableResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteColumnStatisticsForTableCommand,
  serializeAws_json1_1DeleteColumnStatisticsForTableCommand,
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

export type DeleteColumnStatisticsForTableCommandInput = DeleteColumnStatisticsForTableRequest;
export type DeleteColumnStatisticsForTableCommandOutput = DeleteColumnStatisticsForTableResponse & __MetadataBearer;

/**
 * <p>Retrieves table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
 */
export class DeleteColumnStatisticsForTableCommand extends $Command<
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteColumnStatisticsForTableCommandInput) {
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
  ): Handler<DeleteColumnStatisticsForTableCommandInput, DeleteColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteColumnStatisticsForTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteColumnStatisticsForTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteColumnStatisticsForTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteColumnStatisticsForTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1DeleteColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
