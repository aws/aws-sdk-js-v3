import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsForTableRequest, GetColumnStatisticsForTableResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetColumnStatisticsForTableCommand,
  serializeAws_json1_1GetColumnStatisticsForTableCommand,
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

export type GetColumnStatisticsForTableCommandInput = GetColumnStatisticsForTableRequest;
export type GetColumnStatisticsForTableCommandOutput = GetColumnStatisticsForTableResponse & __MetadataBearer;

/**
 * <p>Retrieves table statistics of columns.</p>
 *
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
 */
export class GetColumnStatisticsForTableCommand extends $Command<
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetColumnStatisticsForTableCommandInput) {
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
  ): Handler<GetColumnStatisticsForTableCommandInput, GetColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetColumnStatisticsForTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetColumnStatisticsForTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetColumnStatisticsForTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetColumnStatisticsForTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1GetColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
