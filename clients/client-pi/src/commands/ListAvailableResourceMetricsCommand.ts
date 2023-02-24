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
  ListAvailableResourceMetricsRequest,
  ListAvailableResourceMetricsRequestFilterSensitiveLog,
  ListAvailableResourceMetricsResponse,
  ListAvailableResourceMetricsResponseFilterSensitiveLog,
} from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  deserializeAws_json1_1ListAvailableResourceMetricsCommand,
  serializeAws_json1_1ListAvailableResourceMetricsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAvailableResourceMetricsCommandInput extends ListAvailableResourceMetricsRequest {}
export interface ListAvailableResourceMetricsCommandOutput
  extends ListAvailableResourceMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve metrics of the specified types that can be queried for a specified DB instance.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new ListAvailableResourceMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 */
export class ListAvailableResourceMetricsCommand extends $Command<
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
  PIClientResolvedConfig
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

  constructor(readonly input: ListAvailableResourceMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAvailableResourceMetricsCommandInput, ListAvailableResourceMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAvailableResourceMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "ListAvailableResourceMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableResourceMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableResourceMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAvailableResourceMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableResourceMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableResourceMetricsCommandOutput> {
    return deserializeAws_json1_1ListAvailableResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
