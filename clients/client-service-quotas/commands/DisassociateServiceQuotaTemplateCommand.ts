import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { DisassociateServiceQuotaTemplateRequest, DisassociateServiceQuotaTemplateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand,
  serializeAws_json1_1DisassociateServiceQuotaTemplateCommand,
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

export type DisassociateServiceQuotaTemplateCommandInput = DisassociateServiceQuotaTemplateRequest;
export type DisassociateServiceQuotaTemplateCommandOutput = DisassociateServiceQuotaTemplateResponse & __MetadataBearer;

/**
 * <p>Disables the Service Quotas template. Once the template is disabled, it does not request
 *       quota increases for new accounts in your organization. Disabling the quota template does not
 *       apply the quota increase requests from the template. </p>
 *
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To enable the quota template, call <a>AssociateServiceQuotaTemplate</a>.
 *         </p>
 *             </li>
 *             <li>
 *                <p>To delete a specific service quota from the template, use <a>DeleteServiceQuotaIncreaseRequestFromTemplate</a>.</p>
 *             </li>
 *          </ul>
 */
export class DisassociateServiceQuotaTemplateCommand extends $Command<
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateServiceQuotaTemplateCommandInput) {
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
  ): Handler<DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "DisassociateServiceQuotaTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateServiceQuotaTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateServiceQuotaTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateServiceQuotaTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateServiceQuotaTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateServiceQuotaTemplateCommandOutput> {
    return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
