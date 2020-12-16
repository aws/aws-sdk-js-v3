import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationEfsCommand,
  serializeAws_json1_1CreateLocationEfsCommand,
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

export type CreateLocationEfsCommandInput = CreateLocationEfsRequest;
export type CreateLocationEfsCommandOutput = CreateLocationEfsResponse & __MetadataBearer;

/**
 * <p>Creates an endpoint for an Amazon EFS file system.</p>
 */
export class CreateLocationEfsCommand extends $Command<
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationEfsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationEfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationEfsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationEfsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationEfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationEfsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationEfsCommandOutput> {
    return deserializeAws_json1_1CreateLocationEfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
