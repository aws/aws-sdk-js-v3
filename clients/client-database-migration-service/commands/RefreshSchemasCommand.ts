import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RefreshSchemasCommand,
  serializeAws_json1_1RefreshSchemasCommand,
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

export type RefreshSchemasCommandInput = RefreshSchemasMessage;
export type RefreshSchemasCommandOutput = RefreshSchemasResponse & __MetadataBearer;

/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 */
export class RefreshSchemasCommand extends $Command<
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RefreshSchemasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "RefreshSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshSchemasMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RefreshSchemasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RefreshSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RefreshSchemasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshSchemasCommandOutput> {
    return deserializeAws_json1_1RefreshSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
