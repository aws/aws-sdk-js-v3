import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetServiceQuotaRequest, GetServiceQuotaResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetServiceQuotaCommand,
  serializeAws_json1_1GetServiceQuotaCommand,
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

export type GetServiceQuotaCommandInput = GetServiceQuotaRequest;
export type GetServiceQuotaCommandOutput = GetServiceQuotaResponse & __MetadataBearer;

/**
 * <p>Returns the details for the specified service quota. This operation provides a different
 *       Value than the <code>GetAWSDefaultServiceQuota</code> operation. This operation returns the
 *       applied value for each quota. <code>GetAWSDefaultServiceQuota</code> returns the default AWS
 *       value for each quota. </p>
 */
export class GetServiceQuotaCommand extends $Command<
  GetServiceQuotaCommandInput,
  GetServiceQuotaCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceQuotaCommandInput) {
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
  ): Handler<GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetServiceQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetServiceQuotaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceQuotaCommandOutput> {
    return deserializeAws_json1_1GetServiceQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
