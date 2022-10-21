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
  DescribeEnvironmentManagedActionHistoryRequest,
  DescribeEnvironmentManagedActionHistoryRequestFilterSensitiveLog,
  DescribeEnvironmentManagedActionHistoryResult,
  DescribeEnvironmentManagedActionHistoryResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand,
  serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand,
} from "../protocols/Aws_query";

export interface DescribeEnvironmentManagedActionHistoryCommandInput
  extends DescribeEnvironmentManagedActionHistoryRequest {}
export interface DescribeEnvironmentManagedActionHistoryCommandOutput
  extends DescribeEnvironmentManagedActionHistoryResult,
    __MetadataBearer {}

/**
 * <p>Lists an environment's completed and failed managed actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentManagedActionHistoryCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeEnvironmentManagedActionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentManagedActionHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class DescribeEnvironmentManagedActionHistoryCommand extends $Command<
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
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

  constructor(readonly input: DescribeEnvironmentManagedActionHistoryCommandInput) {
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
  ): Handler<
    DescribeEnvironmentManagedActionHistoryCommandInput,
    DescribeEnvironmentManagedActionHistoryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeEnvironmentManagedActionHistoryCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentManagedActionHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentManagedActionHistoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentManagedActionHistoryResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEnvironmentManagedActionHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
