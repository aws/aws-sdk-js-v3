import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
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

export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput
  extends DeleteServiceQuotaIncreaseRequestFromTemplateRequest {}
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  extends DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the quota increase request for the specified quota from your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput) {
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
    DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
