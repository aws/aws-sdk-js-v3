import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DeleteTagsRequest, DeleteTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTagsCommand,
  serializeAws_json1_1DeleteTagsCommand,
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

export type DeleteTagsCommandInput = DeleteTagsRequest;
export type DeleteTagsCommandOutput = DeleteTagsResponse & __MetadataBearer;

/**
 * <p>Deletes the association between configuration items and one or more tags. This API
 *       accepts a list of multiple configuration items.</p>
 */
export class DeleteTagsCommand extends $Command<
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DeleteTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTagsCommandOutput> {
    return deserializeAws_json1_1DeleteTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
