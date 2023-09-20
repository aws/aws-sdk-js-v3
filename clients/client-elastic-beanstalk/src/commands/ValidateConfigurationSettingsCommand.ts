// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/models_0";
import {
  de_ValidateConfigurationSettingsCommand,
  se_ValidateConfigurationSettingsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandInput extends ValidateConfigurationSettingsMessage {}
/**
 * @public
 *
 * The output of {@link ValidateConfigurationSettingsCommand}.
 */
export interface ValidateConfigurationSettingsCommandOutput
  extends ConfigurationSettingsValidationMessages,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // ValidateConfigurationSettingsMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList // required
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ValidateConfigurationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationSettingsValidationMessages
 * //   Messages: [ // ValidationMessagesList
 * //     { // ValidationMessage
 * //       Message: "STRING_VALUE",
 * //       Severity: "error" || "warning",
 * //       Namespace: "STRING_VALUE",
 * //       OptionName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateConfigurationSettingsCommandInput - {@link ValidateConfigurationSettingsCommandInput}
 * @returns {@link ValidateConfigurationSettingsCommandOutput}
 * @see {@link ValidateConfigurationSettingsCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationSettingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
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
 * // example id: to-validate-configuration-settings-1456278393654
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "ValidateConfigurationSettings",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ValidateConfigurationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidateConfigurationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateConfigurationSettingsCommandOutput> {
    return de_ValidateConfigurationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
