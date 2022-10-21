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
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import {
  DescribeTagsInput,
  DescribeTagsInputFilterSensitiveLog,
  DescribeTagsOutput,
  DescribeTagsOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryDescribeTagsCommand, serializeAws_queryDescribeTagsCommand } from "../protocols/Aws_query";

export interface DescribeTagsCommandInput extends DescribeTagsInput {}
export interface DescribeTagsCommandOutput extends DescribeTagsOutput, __MetadataBearer {}

/**
 * <p>Describes the tags associated with the specified load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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

  constructor(readonly input: DescribeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTagsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTagsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTagsCommandOutput> {
    return deserializeAws_queryDescribeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
