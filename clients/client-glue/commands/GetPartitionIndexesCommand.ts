import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionIndexesRequest, GetPartitionIndexesResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetPartitionIndexesCommand,
  serializeAws_json1_1GetPartitionIndexesCommand,
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

export type GetPartitionIndexesCommandInput = GetPartitionIndexesRequest;
export type GetPartitionIndexesCommandOutput = GetPartitionIndexesResponse & __MetadataBearer;

/**
 * <p>Retrieves the partition indexes associated with a table.</p>
 */
export class GetPartitionIndexesCommand extends $Command<
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartitionIndexesCommandInput) {
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
  ): Handler<GetPartitionIndexesCommandInput, GetPartitionIndexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPartitionIndexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPartitionIndexesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPartitionIndexesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPartitionIndexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPartitionIndexesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartitionIndexesCommandOutput> {
    return deserializeAws_json1_1GetPartitionIndexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
