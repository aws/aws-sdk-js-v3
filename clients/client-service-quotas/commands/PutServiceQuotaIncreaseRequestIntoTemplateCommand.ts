import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand,
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

export type PutServiceQuotaIncreaseRequestIntoTemplateCommandInput = PutServiceQuotaIncreaseRequestIntoTemplateRequest;
export type PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput = PutServiceQuotaIncreaseRequestIntoTemplateResponse &
  __MetadataBearer;

/**
 * <p>Defines and adds a quota to the service quota template. To add a quota to the template,
 *       you must provide the <code>ServiceCode</code>, <code>QuotaCode</code>, <code>AwsRegion</code>,
 *       and <code>DesiredValue</code>. Once you add a quota to the template, use <a>ListServiceQuotaIncreaseRequestsInTemplate</a> to see the list of quotas in the
 *       template.</p>
 */
export class PutServiceQuotaIncreaseRequestIntoTemplateCommand extends $Command<
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "PutServiceQuotaIncreaseRequestIntoTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> {
    return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
