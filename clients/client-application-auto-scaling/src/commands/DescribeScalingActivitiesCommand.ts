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
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import {
  DescribeScalingActivitiesRequest,
  DescribeScalingActivitiesRequestFilterSensitiveLog,
  DescribeScalingActivitiesResponse,
  DescribeScalingActivitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingActivitiesCommand,
  serializeAws_json1_1DescribeScalingActivitiesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandInput extends DescribeScalingActivitiesRequest {}
/**
 * The output of {@link DescribeScalingActivitiesCommand}.
 */
export interface DescribeScalingActivitiesCommandOutput extends DescribeScalingActivitiesResponse, __MetadataBearer {}

/**
 * <p>Provides descriptive information about the scaling activities in the specified namespace
 *          from the previous six weeks.</p>
 *          <p>You can filter the results using <code>ResourceId</code> and
 *             <code>ScalableDimension</code>.</p>
 *          <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 * @example To describe scaling activities for a scalable target
 * ```javascript
 * // This example describes the scaling activities for an Amazon ECS service called web-app that is running in the default cluster.
 * const input = {
 *   "ResourceId": "service/default/web-app",
 *   "ScalableDimension": "ecs:service:DesiredCount",
 *   "ServiceNamespace": "ecs"
 * };
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScalingActivities": [
 *     {
 *       "ActivityId": "e6c5f7d1-dbbb-4a3f-89b2-51f33e766399",
 *       "Cause": "monitor alarm web-app-cpu-lt-25 in state ALARM triggered policy web-app-cpu-lt-25",
 *       "Description": "Setting desired count to 1.",
 *       "EndTime": "2019-05-06T16:04:32.111Z",
 *       "ResourceId": "service/default/web-app",
 *       "ScalableDimension": "ecs:service:DesiredCount",
 *       "ServiceNamespace": "ecs",
 *       "StartTime": "2019-05-06T16:03:58.171Z",
 *       "StatusCode": "Successful",
 *       "StatusMessage": "Successfully set desired count to 1. Change successfully fulfilled by ecs."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class DescribeScalingActivitiesCommand extends $Command<
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
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

  constructor(readonly input: DescribeScalingActivitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingActivitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DescribeScalingActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingActivitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingActivitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalingActivitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingActivitiesCommandOutput> {
    return deserializeAws_json1_1DescribeScalingActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
