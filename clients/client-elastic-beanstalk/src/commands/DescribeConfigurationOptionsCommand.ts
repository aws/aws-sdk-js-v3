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
} from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/models_0";
import { de_DescribeConfigurationOptionsCommand, se_DescribeConfigurationOptionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationOptionsCommand}.
 */
export interface DescribeConfigurationOptionsCommandInput extends DescribeConfigurationOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationOptionsCommand}.
 */
export interface DescribeConfigurationOptionsCommandOutput extends ConfigurationOptionsDescription, __MetadataBearer {}

/**
 * @public
 * <p>Describes the configuration options that are used in a particular configuration
 *       template or environment, or that a specified solution stack defines. The description includes
 *       the values the options, their default values, and an indication of the required action on a
 *       running environment if an option value is changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeConfigurationOptionsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeConfigurationOptionsMessage
 *   ApplicationName: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   SolutionStackName: "STRING_VALUE",
 *   PlatformArn: "STRING_VALUE",
 *   Options: [ // OptionsSpecifierList
 *     { // OptionSpecification
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationOptionsDescription
 * //   SolutionStackName: "STRING_VALUE",
 * //   PlatformArn: "STRING_VALUE",
 * //   Options: [ // ConfigurationOptionDescriptionsList
 * //     { // ConfigurationOptionDescription
 * //       Namespace: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       ChangeSeverity: "STRING_VALUE",
 * //       UserDefined: true || false,
 * //       ValueType: "Scalar" || "List",
 * //       ValueOptions: [ // ConfigurationOptionPossibleValues
 * //         "STRING_VALUE",
 * //       ],
 * //       MinValue: Number("int"),
 * //       MaxValue: Number("int"),
 * //       MaxLength: Number("int"),
 * //       Regex: { // OptionRestrictionRegex
 * //         Pattern: "STRING_VALUE",
 * //         Label: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationOptionsCommandInput - {@link DescribeConfigurationOptionsCommandInput}
 * @returns {@link DescribeConfigurationOptionsCommandOutput}
 * @see {@link DescribeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view configuration options for an environment
 * ```javascript
 * // The following operation retrieves descriptions of all available configuration options for an environment named my-env:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Options": [
 *     {
 *       "ChangeSeverity": "NoInterruption",
 *       "DefaultValue": "30",
 *       "MaxValue": 300,
 *       "MinValue": 5,
 *       "Name": "Interval",
 *       "Namespace": "aws:elb:healthcheck",
 *       "UserDefined": false,
 *       "ValueType": "Scalar"
 *     },
 *     {
 *       "ChangeSeverity": "NoInterruption",
 *       "DefaultValue": "2000000",
 *       "MinValue": 0,
 *       "Name": "LowerThreshold",
 *       "Namespace": "aws:autoscaling:trigger",
 *       "UserDefined": false,
 *       "ValueType": "Scalar"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-view-configuration-options-for-an-environment-1456276763917
 * ```
 *
 */
export class DescribeConfigurationOptionsCommand extends $Command<
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
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
  constructor(readonly input: DescribeConfigurationOptionsCommandInput) {
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
  ): Handler<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeConfigurationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeConfigurationOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConfigurationOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationOptionsCommandOutput> {
    return de_DescribeConfigurationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
