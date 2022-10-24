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
  ListAWSDefaultServiceQuotasRequest,
  ListAWSDefaultServiceQuotasRequestFilterSensitiveLog,
  ListAWSDefaultServiceQuotasResponse,
  ListAWSDefaultServiceQuotasResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
  serializeAws_json1_1ListAWSDefaultServiceQuotasCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

export interface ListAWSDefaultServiceQuotasCommandInput extends ListAWSDefaultServiceQuotasRequest {}
export interface ListAWSDefaultServiceQuotasCommandOutput
  extends ListAWSDefaultServiceQuotasResponse,
    __MetadataBearer {}

/**
 * <p>Lists the default values for the quotas for the specified AWS service. A default value
 *       does not reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListAWSDefaultServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSDefaultServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListAWSDefaultServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 */
export class ListAWSDefaultServiceQuotasCommand extends $Command<
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
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

  constructor(readonly input: ListAWSDefaultServiceQuotasCommandInput) {
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
  ): Handler<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAWSDefaultServiceQuotasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListAWSDefaultServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAWSDefaultServiceQuotasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAWSDefaultServiceQuotasResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAWSDefaultServiceQuotasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput> {
    return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
