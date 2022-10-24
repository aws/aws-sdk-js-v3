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
  RequestServiceQuotaIncreaseRequest,
  RequestServiceQuotaIncreaseRequestFilterSensitiveLog,
  RequestServiceQuotaIncreaseResponse,
  RequestServiceQuotaIncreaseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RequestServiceQuotaIncreaseCommand,
  serializeAws_json1_1RequestServiceQuotaIncreaseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface RequestServiceQuotaIncreaseCommandInput extends RequestServiceQuotaIncreaseRequest {}
export interface RequestServiceQuotaIncreaseCommandOutput
  extends RequestServiceQuotaIncreaseResponse,
    __MetadataBearer {}

/**
 * <p>Submits a quota increase request for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new RequestServiceQuotaIncreaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestServiceQuotaIncreaseCommandInput} for command's `input` shape.
 * @see {@link RequestServiceQuotaIncreaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class RequestServiceQuotaIncreaseCommand extends $Command<
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
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

  constructor(readonly input: RequestServiceQuotaIncreaseCommandInput) {
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
  ): Handler<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestServiceQuotaIncreaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "RequestServiceQuotaIncreaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestServiceQuotaIncreaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RequestServiceQuotaIncreaseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestServiceQuotaIncreaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestServiceQuotaIncreaseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> {
    return deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
