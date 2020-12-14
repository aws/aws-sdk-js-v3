import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRImportJobRequest, DescribeFHIRImportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeFHIRImportJobCommand,
  serializeAws_json1_0DescribeFHIRImportJobCommand,
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

export type DescribeFHIRImportJobCommandInput = DescribeFHIRImportJobRequest;
export type DescribeFHIRImportJobCommandOutput = DescribeFHIRImportJobResponse & __MetadataBearer;

/**
 * <p>Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore.</p>
 */
export class DescribeFHIRImportJobCommand extends $Command<
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFHIRImportJobCommandInput) {
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
  ): Handler<DescribeFHIRImportJobCommandInput, DescribeFHIRImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DescribeFHIRImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFHIRImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFHIRImportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFHIRImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeFHIRImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFHIRImportJobCommandOutput> {
    return deserializeAws_json1_0DescribeFHIRImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
