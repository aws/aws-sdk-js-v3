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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribePendingAggregationRequestsRequest,
  DescribePendingAggregationRequestsRequestFilterSensitiveLog,
  DescribePendingAggregationRequestsResponse,
  DescribePendingAggregationRequestsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePendingAggregationRequestsCommand,
  serializeAws_json1_1DescribePendingAggregationRequestsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePendingAggregationRequestsCommandInput extends DescribePendingAggregationRequestsRequest {}
export interface DescribePendingAggregationRequestsCommandOutput
  extends DescribePendingAggregationRequestsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of all pending aggregation requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribePendingAggregationRequestsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribePendingAggregationRequestsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribePendingAggregationRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingAggregationRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingAggregationRequestsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribePendingAggregationRequestsCommand extends $Command<
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: DescribePendingAggregationRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePendingAggregationRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribePendingAggregationRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePendingAggregationRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePendingAggregationRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePendingAggregationRequestsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePendingAggregationRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePendingAggregationRequestsCommandOutput> {
    return deserializeAws_json1_1DescribePendingAggregationRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
