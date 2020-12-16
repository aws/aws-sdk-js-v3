import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSchemaCommand,
  serializeAws_restJson1CreateSchemaCommand,
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

export type CreateSchemaCommandInput = CreateSchemaRequest;
export type CreateSchemaCommandOutput = CreateSchemaResponse & __MetadataBearer;

/**
 * <p>Creates a new schema in a development state. A schema can exist in three
 *       phases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Development:</i> This is a mutable phase of the schema. All new
 *           schemas are in the development phase. Once the schema is finalized, it can be
 *           published.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Published:</i> Published schemas are immutable and have a version
 *           associated with them.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
 *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
 *           facets. You can apply only published schemas to directories. </p>
 *             </li>
 *          </ul>
 */
export class CreateSchemaCommand extends $Command<
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSchemaCommandInput, CreateSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "CreateSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSchemaCommandOutput> {
    return deserializeAws_restJson1CreateSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
