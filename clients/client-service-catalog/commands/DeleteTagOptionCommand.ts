import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteTagOptionInput, DeleteTagOptionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTagOptionCommand,
  serializeAws_json1_1DeleteTagOptionCommand,
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

export type DeleteTagOptionCommandInput = DeleteTagOptionInput;
export type DeleteTagOptionCommandOutput = DeleteTagOptionOutput & __MetadataBearer;

/**
 * <p>Deletes the specified TagOption.</p>
 *          <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
 */
export class DeleteTagOptionCommand extends $Command<
  DeleteTagOptionCommandInput,
  DeleteTagOptionCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTagOptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DeleteTagOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTagOptionInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTagOptionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTagOptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTagOptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTagOptionCommandOutput> {
    return deserializeAws_json1_1DeleteTagOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
