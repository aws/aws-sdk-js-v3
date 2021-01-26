import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateColumnStatisticsForTableCommand,
  serializeAws_json1_1UpdateColumnStatisticsForTableCommand,
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

export type UpdateColumnStatisticsForTableCommandInput = UpdateColumnStatisticsForTableRequest;
export type UpdateColumnStatisticsForTableCommandOutput = UpdateColumnStatisticsForTableResponse & __MetadataBearer;

/**
 * <p>Creates or updates table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 */
export class UpdateColumnStatisticsForTableCommand extends $Command<
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateColumnStatisticsForTableCommandInput) {
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
  ): Handler<UpdateColumnStatisticsForTableCommandInput, UpdateColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateColumnStatisticsForTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateColumnStatisticsForTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateColumnStatisticsForTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateColumnStatisticsForTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1UpdateColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
