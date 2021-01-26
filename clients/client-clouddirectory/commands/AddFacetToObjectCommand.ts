import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddFacetToObjectCommand,
  serializeAws_restJson1AddFacetToObjectCommand,
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

export type AddFacetToObjectCommandInput = AddFacetToObjectRequest;
export type AddFacetToObjectCommandOutput = AddFacetToObjectResponse & __MetadataBearer;

/**
 * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
 */
export class AddFacetToObjectCommand extends $Command<
  AddFacetToObjectCommandInput,
  AddFacetToObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddFacetToObjectCommandInput) {
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
  ): Handler<AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "AddFacetToObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddFacetToObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddFacetToObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddFacetToObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddFacetToObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFacetToObjectCommandOutput> {
    return deserializeAws_restJson1AddFacetToObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
