import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { AssociateServiceQuotaTemplateRequest, AssociateServiceQuotaTemplateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateServiceQuotaTemplateCommand,
  serializeAws_json1_1AssociateServiceQuotaTemplateCommand,
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

export interface AssociateServiceQuotaTemplateCommandInput extends AssociateServiceQuotaTemplateRequest {}
export interface AssociateServiceQuotaTemplateCommandOutput
  extends AssociateServiceQuotaTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Associates your quota request template with your organization. When a new account is
 *       created in your organization, the quota increase requests in the template are automatically
 *       applied to the account. You can add a quota increase request for any adjustable quota to your
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new AssociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateServiceQuotaTemplateCommand extends $Command<
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateServiceQuotaTemplateCommandInput) {
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
  ): Handler<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "AssociateServiceQuotaTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateServiceQuotaTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateServiceQuotaTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateServiceQuotaTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateServiceQuotaTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateServiceQuotaTemplateCommandOutput> {
    return deserializeAws_json1_1AssociateServiceQuotaTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
