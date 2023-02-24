// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateRequestFilterSensitiveLog,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
  PutServiceQuotaIncreaseRequestIntoTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandInput
  extends PutServiceQuotaIncreaseRequestIntoTemplateRequest {}
export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
  extends PutServiceQuotaIncreaseRequestIntoTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Adds a quota increase request to your quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandInput} for command's `input` shape.
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class PutServiceQuotaIncreaseRequestIntoTemplateCommand extends $Command<
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutServiceQuotaIncreaseRequestIntoTemplateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "PutServiceQuotaIncreaseRequestIntoTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateResponseFilterSensitiveLog,
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
