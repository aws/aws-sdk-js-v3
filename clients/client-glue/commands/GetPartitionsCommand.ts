import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionsRequest, GetPartitionsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetPartitionsCommand,
  serializeAws_json1_1GetPartitionsCommand,
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

export type GetPartitionsCommandInput = GetPartitionsRequest;
export type GetPartitionsCommandOutput = GetPartitionsResponse & __MetadataBearer;

/**
 * <p>Retrieves information about the partitions in a table.</p>
 */
export class GetPartitionsCommand extends $Command<
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartitionsCommandInput) {
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
  ): Handler<GetPartitionsCommandInput, GetPartitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPartitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPartitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPartitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPartitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPartitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartitionsCommandOutput> {
    return deserializeAws_json1_1GetPartitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
