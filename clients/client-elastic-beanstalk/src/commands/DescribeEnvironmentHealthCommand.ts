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
  DescribeEnvironmentHealthRequest,
  DescribeEnvironmentHealthRequestFilterSensitiveLog,
  DescribeEnvironmentHealthResult,
  DescribeEnvironmentHealthResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentHealthCommand,
  serializeAws_queryDescribeEnvironmentHealthCommand,
} from "../protocols/Aws_query";

export interface DescribeEnvironmentHealthCommandInput extends DescribeEnvironmentHealthRequest {}
export interface DescribeEnvironmentHealthCommandOutput extends DescribeEnvironmentHealthResult, __MetadataBearer {}

/**
 * <p>Returns information about the overall health of the specified environment. The
 *         <b>DescribeEnvironmentHealth</b> operation is only available with
 *       AWS Elastic Beanstalk Enhanced Health.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentHealthCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class DescribeEnvironmentHealthCommand extends $Command<
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
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

  constructor(readonly input: DescribeEnvironmentHealthCommandInput) {
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
  ): Handler<DescribeEnvironmentHealthCommandInput, DescribeEnvironmentHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEnvironmentHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentHealthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentHealthResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEnvironmentHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentHealthCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
