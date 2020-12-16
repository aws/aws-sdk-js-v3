import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutReportDefinitionCommand,
  serializeAws_json1_1PutReportDefinitionCommand,
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

export type PutReportDefinitionCommandInput = PutReportDefinitionRequest;
export type PutReportDefinitionCommandOutput = PutReportDefinitionResponse & __MetadataBearer;

/**
 * <p>Creates a new report using the description that you provide.</p>
 */
export class PutReportDefinitionCommand extends $Command<
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput,
  CostAndUsageReportServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutReportDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostAndUsageReportServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostAndUsageReportServiceClient";
    const commandName = "PutReportDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutReportDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutReportDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutReportDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutReportDefinitionCommandOutput> {
    return deserializeAws_json1_1PutReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
