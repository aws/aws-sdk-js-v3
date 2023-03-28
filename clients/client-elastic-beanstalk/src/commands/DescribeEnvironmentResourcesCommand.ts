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
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentResourcesCommand,
  serializeAws_queryDescribeEnvironmentResourcesCommand,
} from "../protocols/Aws_query";

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
    return serializeAws_queryDescribeEnvironmentResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentResourcesCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
