import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataSourceCommand,
  serializeAws_json1_1CreateDataSourceCommand,
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

export type CreateDataSourceCommandInput = CreateDataSourceRequest;
export type CreateDataSourceCommandOutput = CreateDataSourceResponse & __MetadataBearer;

/**
 * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
 *          <p>You specify a name, data source connector type and description for your data source. You
 *       also specify configuration information such as document metadata (author, source URI, and so
 *       on) and user context information.</p>
 *          <p>
 *             <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the
 *       data source was successfully created. Otherwise, an exception is raised.</p>
 */
export class CreateDataSourceCommand extends $Command<
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
