import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetRequestedServiceQuotaChangeRequest, GetRequestedServiceQuotaChangeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand,
  serializeAws_json1_1GetRequestedServiceQuotaChangeCommand,
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

export type GetRequestedServiceQuotaChangeCommandInput = GetRequestedServiceQuotaChangeRequest;
export type GetRequestedServiceQuotaChangeCommandOutput = GetRequestedServiceQuotaChangeResponse & __MetadataBearer;

/**
 * <p>Retrieves the details for a particular increase request. </p>
 */
export class GetRequestedServiceQuotaChangeCommand extends $Command<
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRequestedServiceQuotaChangeCommandInput) {
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
  ): Handler<GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetRequestedServiceQuotaChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRequestedServiceQuotaChangeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRequestedServiceQuotaChangeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRequestedServiceQuotaChangeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRequestedServiceQuotaChangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRequestedServiceQuotaChangeCommandOutput> {
    return deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
