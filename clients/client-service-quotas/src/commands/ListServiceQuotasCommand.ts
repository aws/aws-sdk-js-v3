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
  ListServiceQuotasRequest,
  ListServiceQuotasRequestFilterSensitiveLog,
  ListServiceQuotasResponse,
  ListServiceQuotasResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListServiceQuotasCommand,
  serializeAws_json1_1ListServiceQuotasCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface ListServiceQuotasCommandInput extends ListServiceQuotasRequest {}
export interface ListServiceQuotasCommandOutput extends ListServiceQuotasResponse, __MetadataBearer {}

/**
 * <p>Lists the applied quota values for the specified AWS service. For some quotas, only the
 *       default values are available. If the applied quota value is not available for a quota, the
 *       quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class ListServiceQuotasCommand extends $Command<
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceQuotasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceQuotasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListServiceQuotasResponseFilterSensitiveLog,
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
