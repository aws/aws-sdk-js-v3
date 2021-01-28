import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeFHIRDatastoreCommand,
  serializeAws_json1_0DescribeFHIRDatastoreCommand,
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

export type DescribeFHIRDatastoreCommandInput = DescribeFHIRDatastoreRequest;
export type DescribeFHIRDatastoreCommandOutput = DescribeFHIRDatastoreResponse & __MetadataBearer;

/**
 * <p>Gets the properties associated with the FHIR datastore, including the datastore ID,
 *          datastore ARN, datastore name, datastore status, created at, datastore type version, and
 *          datastore endpoint.</p>
 */
export class DescribeFHIRDatastoreCommand extends $Command<
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFHIRDatastoreCommandInput) {
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
  ): Handler<DescribeFHIRDatastoreCommandInput, DescribeFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DescribeFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFHIRDatastoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFHIRDatastoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeFHIRDatastoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFHIRDatastoreCommandOutput> {
    return deserializeAws_json1_0DescribeFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
