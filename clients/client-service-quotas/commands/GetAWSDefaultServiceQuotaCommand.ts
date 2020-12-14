import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetAWSDefaultServiceQuotaRequest, GetAWSDefaultServiceQuotaResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand,
  serializeAws_json1_1GetAWSDefaultServiceQuotaCommand,
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

export type GetAWSDefaultServiceQuotaCommandInput = GetAWSDefaultServiceQuotaRequest;
export type GetAWSDefaultServiceQuotaCommandOutput = GetAWSDefaultServiceQuotaResponse & __MetadataBearer;

/**
 * <p>Retrieves the default service quotas values. The Value returned for each quota is the AWS
 *       default value, even if the quotas have been increased.. </p>
 */
export class GetAWSDefaultServiceQuotaCommand extends $Command<
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAWSDefaultServiceQuotaCommandInput) {
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
  ): Handler<GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetAWSDefaultServiceQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAWSDefaultServiceQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAWSDefaultServiceQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAWSDefaultServiceQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAWSDefaultServiceQuotaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput> {
    return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
