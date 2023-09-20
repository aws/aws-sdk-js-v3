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
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/models_0";
import { de_DescribeEnvironmentResourcesCommand, se_DescribeEnvironmentResourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEnvironmentResourcesCommand}.
 */
export interface DescribeEnvironmentResourcesCommandInput extends DescribeEnvironmentResourcesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEnvironmentResourcesCommand}.
 */
export interface DescribeEnvironmentResourcesCommandOutput
  extends EnvironmentResourceDescriptionsMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns AWS resources for this environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeEnvironmentResourcesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribeEnvironmentResourcesMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new DescribeEnvironmentResourcesCommand(input);
 * const response = await client.send(command);
 * // { // EnvironmentResourceDescriptionsMessage
 * //   EnvironmentResources: { // EnvironmentResourceDescription
 * //     EnvironmentName: "STRING_VALUE",
 * //     AutoScalingGroups: [ // AutoScalingGroupList
 * //       { // AutoScalingGroup
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Instances: [ // InstanceList
 * //       { // Instance
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchConfigurations: [ // LaunchConfigurationList
 * //       { // LaunchConfiguration
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchTemplates: [ // LaunchTemplateList
 * //       { // LaunchTemplate
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LoadBalancers: [ // LoadBalancerList
 * //       { // LoadBalancer
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Triggers: [ // TriggerList
 * //       { // Trigger
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Queues: [ // QueueList
 * //       { // Queue
 * //         Name: "STRING_VALUE",
 * //         URL: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEnvironmentResourcesCommandInput - {@link DescribeEnvironmentResourcesCommandInput}
 * @returns {@link DescribeEnvironmentResourcesCommandOutput}
 * @see {@link DescribeEnvironmentResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeEnvironmentResourcesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To view information about the AWS resources in your environment
 * ```javascript
 * // The following operation retrieves information about resources in an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env"
 * };
 * const command = new DescribeEnvironmentResourcesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnvironmentResources": {
 *     "AutoScalingGroups": [
 *       {
 *         "Name": "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingGroup-QSB2ZO88SXZT"
 *       }
 *     ],
 *     "EnvironmentName": "my-env",
 *     "Instances": [
 *       {
 *         "Id": "i-0c91c786"
 *       }
 *     ],
 *     "LaunchConfigurations": [
 *       {
 *         "Name": "awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingLaunchConfiguration-1UUVQIBC96TQ2"
 *       }
 *     ],
 *     "LoadBalancers": [
 *       {
 *         "Name": "awseb-e-q-AWSEBLoa-1EEPZ0K98BIF0"
 *       }
 *     ],
 *     "Queues": [],
 *     "Triggers": []
 *   }
 * }
 * *\/
 * // example id: to-view-information-about-the-aws-resources-in-your-environment-1456277206232
 * ```
 *
 */
export class DescribeEnvironmentResourcesCommand extends $Command<
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
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
  constructor(readonly input: DescribeEnvironmentResourcesCommandInput) {
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
  ): Handler<DescribeEnvironmentResourcesCommandInput, DescribeEnvironmentResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEnvironmentResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "DescribeEnvironmentResources",
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
  private serialize(input: DescribeEnvironmentResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEnvironmentResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentResourcesCommandOutput> {
    return de_DescribeEnvironmentResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
