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
  GetAssociationForServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateRequestFilterSensitiveLog,
  GetAssociationForServiceQuotaTemplateResponse,
  GetAssociationForServiceQuotaTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand,
  serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface GetAssociationForServiceQuotaTemplateCommandInput
  extends GetAssociationForServiceQuotaTemplateRequest {}
export interface GetAssociationForServiceQuotaTemplateCommandOutput
  extends GetAssociationForServiceQuotaTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of the association for the quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetAssociationForServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociationForServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link GetAssociationForServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class GetAssociationForServiceQuotaTemplateCommand extends $Command<
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
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

  constructor(readonly input: GetAssociationForServiceQuotaTemplateCommandInput) {
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
  ): Handler<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssociationForServiceQuotaTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetAssociationForServiceQuotaTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAssociationForServiceQuotaTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> {
    return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
