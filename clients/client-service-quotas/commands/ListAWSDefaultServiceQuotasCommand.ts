import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
  serializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
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

export type ListAWSDefaultServiceQuotasCommandInput = ListAWSDefaultServiceQuotasRequest;
export type ListAWSDefaultServiceQuotasCommandOutput = ListAWSDefaultServiceQuotasResponse & __MetadataBearer;

/**
 * <p>Lists all default service quotas for the specified AWS service or all AWS services.
 *       ListAWSDefaultServiceQuotas is similar to <a>ListServiceQuotas</a> except for the
 *       Value object. The Value object returned by <code>ListAWSDefaultServiceQuotas</code> is the
 *       default value assigned by AWS. This request returns a list of all service quotas for the
 *       specified service. The listing of each you'll see the default values are the values that AWS
 *       provides for the quotas. </p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter when calling any of the
 *           <code>List*</code> operations. These operations can return an unexpected list of results,
 *         even when there are more results available. When this happens, the <code>NextToken</code>
 *         response parameter contains a value to pass the next call to the same API to request the
 *         next part of the list.</p>
 *          </note>
 */
export class ListAWSDefaultServiceQuotasCommand extends $Command<
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAWSDefaultServiceQuotasCommandInput) {
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
  ): Handler<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListAWSDefaultServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAWSDefaultServiceQuotasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAWSDefaultServiceQuotasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAWSDefaultServiceQuotasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput> {
    return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
