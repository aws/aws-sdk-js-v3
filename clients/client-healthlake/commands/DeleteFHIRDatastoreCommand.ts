import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteFHIRDatastoreCommand,
  serializeAws_json1_0DeleteFHIRDatastoreCommand,
} from "../protocols/Aws_json1_0";
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

export type DeleteFHIRDatastoreCommandInput = DeleteFHIRDatastoreRequest;
export type DeleteFHIRDatastoreCommandOutput = DeleteFHIRDatastoreResponse & __MetadataBearer;

/**
 * <p>Deletes a datastore. </p>
 */
export class DeleteFHIRDatastoreCommand extends $Command<
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFHIRDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFHIRDatastoreCommandInput, DeleteFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DeleteFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFHIRDatastoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFHIRDatastoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteFHIRDatastoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFHIRDatastoreCommandOutput> {
    return deserializeAws_json1_0DeleteFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
