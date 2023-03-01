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
  ConfigurationSettingsValidationMessages,
  ConfigurationSettingsValidationMessagesFilterSensitiveLog,
  ValidateConfigurationSettingsMessage,
  ValidateConfigurationSettingsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryValidateConfigurationSettingsCommand,
  serializeAws_queryValidateConfigurationSettingsCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandInput extends ValidateConfigurationSettingsMessage {}
/**
 * The output of {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandOutput
  extends ConfigurationSettingsValidationMessages,
    __MetadataBearer {}

/**
 * <p>Takes a set of configuration settings and either a configuration template or
 *       environment, and determines whether those values are valid.</p>
 *          <p>This action returns a list of messages indicating any errors or warnings associated
 *       with the selection of option values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ValidateConfigurationSettingsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 *
 * @example To validate configuration settings
 * ```javascript
 * // The following operation validates a CloudWatch custom metrics config document:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "EnvironmentName": "my-env",
 *   "OptionSettings": [
 *     {
 *       "Namespace": "aws:elasticbeanstalk:healthreporting:system",
 *       "OptionName": "ConfigDocument",
 *       "Value": "{\"CloudWatchMetrics\": {\"Environment\": {\"ApplicationLatencyP99.9\": null,\"InstancesSevere\": 60,\"ApplicationLatencyP90\": 60,\"ApplicationLatencyP99\": null,\"ApplicationLatencyP95\": 60,\"InstancesUnknown\": 60,\"ApplicationLatencyP85\": 60,\"InstancesInfo\": null,\"ApplicationRequests2xx\": null,\"InstancesDegraded\": null,\"InstancesWarning\": 60,\"ApplicationLatencyP50\": 60,\"ApplicationRequestsTotal\": null,\"InstancesNoData\": null,\"InstancesPending\": 60,\"ApplicationLatencyP10\": null,\"ApplicationRequests5xx\": null,\"ApplicationLatencyP75\": null,\"InstancesOk\": 60,\"ApplicationRequests3xx\": null,\"ApplicationRequests4xx\": null},\"Instance\": {\"ApplicationLatencyP99.9\": null,\"ApplicationLatencyP90\": 60,\"ApplicationLatencyP99\": null,\"ApplicationLatencyP95\": null,\"ApplicationLatencyP85\": null,\"CPUUser\": 60,\"ApplicationRequests2xx\": null,\"CPUIdle\": null,\"ApplicationLatencyP50\": null,\"ApplicationRequestsTotal\": 60,\"RootFilesystemUtil\": null,\"LoadAverage1min\": null,\"CPUIrq\": null,\"CPUNice\": 60,\"CPUIowait\": 60,\"ApplicationLatencyP10\": null,\"LoadAverage5min\": null,\"ApplicationRequests5xx\": null,\"ApplicationLatencyP75\": 60,\"CPUSystem\": 60,\"ApplicationRequests3xx\": 60,\"ApplicationRequests4xx\": null,\"InstanceHealth\": null,\"CPUSoftirq\": 60}},\"Version\": 1}"
 *     }
 *   ]
 * };
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Messages": []
 * }
 * *\/
 * ```
 *
 */
export class ValidateConfigurationSettingsCommand extends $Command<
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
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

  constructor(readonly input: ValidateConfigurationSettingsCommandInput) {
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
  ): Handler<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateConfigurationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ValidateConfigurationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateConfigurationSettingsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationSettingsValidationMessagesFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateConfigurationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryValidateConfigurationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateConfigurationSettingsCommandOutput> {
    return deserializeAws_queryValidateConfigurationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
