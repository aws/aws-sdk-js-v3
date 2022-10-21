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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  DescribeInstancesHealthRequest,
  DescribeInstancesHealthRequestFilterSensitiveLog,
  DescribeInstancesHealthResult,
  DescribeInstancesHealthResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeInstancesHealthCommand,
  serializeAws_queryDescribeInstancesHealthCommand,
} from "../protocols/Aws_query";

export interface DescribeInstancesHealthCommandInput extends DescribeInstancesHealthRequest {}
export interface DescribeInstancesHealthCommandOutput extends DescribeInstancesHealthResult, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about the health of instances in your AWS Elastic
 *       Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health
 *       reporting</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeInstancesHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeInstancesHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeInstancesHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class DescribeInstancesHealthCommand extends $Command<
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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

  constructor(readonly input: DescribeInstancesHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstancesHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeInstancesHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstancesHealthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstancesHealthResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstancesHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeInstancesHealthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesHealthCommandOutput> {
    return deserializeAws_queryDescribeInstancesHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
