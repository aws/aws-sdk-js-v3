import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateIndexRequest, CreateIndexResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateIndexCommand,
  serializeAws_json1_1CreateIndexCommand,
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

export type CreateIndexCommandInput = CreateIndexRequest;
export type CreateIndexCommandOutput = CreateIndexResponse & __MetadataBearer;

/**
 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To
 *       determine if index creation has completed, check the <code>Status</code> field returned from a
 *       call to . The <code>Status</code> field is set to
 *         <code>ACTIVE</code> when the index is ready to use.</p>
 *          <p>Once the index is active you can index your documents using the  operation or using one of the supported data sources.
 *     </p>
 */
export class CreateIndexCommand extends $Command<
  CreateIndexCommandInput,
  CreateIndexCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIndexCommandInput) {
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
  ): Handler<CreateIndexCommandInput, CreateIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIndexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateIndexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIndexCommandOutput> {
    return deserializeAws_json1_1CreateIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
