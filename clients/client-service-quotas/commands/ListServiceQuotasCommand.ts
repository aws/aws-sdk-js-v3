import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListServiceQuotasCommand,
  serializeAws_json1_1ListServiceQuotasCommand,
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

export type ListServiceQuotasCommandInput = ListServiceQuotasRequest;
export type ListServiceQuotasCommandOutput = ListServiceQuotasResponse & __MetadataBearer;

/**
 * <p>Lists all service quotas for the specified AWS service. This request returns a list of the
 *       service quotas for the specified service. you'll see the default values are the values that
 *       AWS provides for the quotas. </p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter when calling any of the
 *           <code>List*</code> operations. These operations can return an unexpected list of results,
 *         even when there are more results available. When this happens, the <code>NextToken</code>
 *         response parameter contains a value to pass the next call to the same API to request the
 *         next part of the list.</p>
 *          </note>
 */
export class ListServiceQuotasCommand extends $Command<
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceQuotasCommandInput) {
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
  ): Handler<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceQuotasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceQuotasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServiceQuotasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServiceQuotasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceQuotasCommandOutput> {
    return deserializeAws_json1_1ListServiceQuotasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
