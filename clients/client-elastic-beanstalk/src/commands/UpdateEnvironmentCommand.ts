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
  EnvironmentDescription,
  EnvironmentDescriptionFilterSensitiveLog,
  UpdateEnvironmentMessage,
  UpdateEnvironmentMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateEnvironmentCommand,
  serializeAws_queryUpdateEnvironmentCommand,
} from "../protocols/Aws_query";

export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentMessage {}
export interface UpdateEnvironmentCommandOutput extends EnvironmentDescription, __MetadataBearer {}

/**
 * <p>Updates the environment description, deploys a new application version, updates the
 *       configuration settings to an entirely new configuration template, or updates select
 *       configuration option values in the running environment.</p>
 *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
 *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
 *          <p> When updating the configuration settings to a new template or individual settings, a
 *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
 *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
 *       values. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class UpdateEnvironmentCommand extends $Command<
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
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

  constructor(readonly input: UpdateEnvironmentCommandInput) {
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
  ): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentMessageFilterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnvironmentCommandOutput> {
    return deserializeAws_queryUpdateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
