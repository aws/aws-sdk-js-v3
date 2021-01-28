import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
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

export type ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput = ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
export type ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput = ListRequestedServiceQuotaChangeHistoryByQuotaResponse &
  __MetadataBearer;

/**
 * <p>Requests a list of the changes to specific service quotas. This command provides
 *       additional granularity over the <code>ListRequestedServiceQuotaChangeHistory</code> command.
 *       Once a quota change request has reached <code>CASE_CLOSED, APPROVED,</code> or
 *         <code>DENIED</code>, the history has been kept for 90 days.</p>
 */
export class ListRequestedServiceQuotaChangeHistoryByQuotaCommand extends $Command<
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput) {
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
    ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
