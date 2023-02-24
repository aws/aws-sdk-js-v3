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
  DescribeAggregationAuthorizationsRequest,
  DescribeAggregationAuthorizationsRequestFilterSensitiveLog,
  DescribeAggregationAuthorizationsResponse,
  DescribeAggregationAuthorizationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAggregationAuthorizationsCommand,
  serializeAws_json1_1DescribeAggregationAuthorizationsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeAggregationAuthorizationsCommandInput extends DescribeAggregationAuthorizationsRequest {}
export interface DescribeAggregationAuthorizationsCommandOutput
  extends DescribeAggregationAuthorizationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of authorizations granted to various aggregator
 * 			accounts and regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeAggregationAuthorizationsCommand extends $Command<
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
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

  constructor(readonly input: DescribeAggregationAuthorizationsCommandInput) {
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
  ): Handler<DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAggregationAuthorizationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeAggregationAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAggregationAuthorizationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAggregationAuthorizationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAggregationAuthorizationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAggregationAuthorizationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAggregationAuthorizationsCommandOutput> {
    return deserializeAws_json1_1DescribeAggregationAuthorizationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
