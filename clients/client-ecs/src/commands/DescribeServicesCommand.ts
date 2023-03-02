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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  DescribeServicesRequest,
  DescribeServicesRequestFilterSensitiveLog,
  DescribeServicesResponse,
  DescribeServicesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServicesCommand,
  serializeAws_json1_1DescribeServicesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
/**
 * The output of {@link DescribeServicesCommand}.
 */
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * <p>Describes the specified services running in your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeServicesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeServicesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @example To describe a service
 * ```javascript
 * // This example provides descriptive information about the service named ``ecs-simple-service``.
 * const input = {
 *   "services": [
 *     "ecs-simple-service"
 *   ]
 * };
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "services": [
 *     {
 *       "clusterArn": "arn:aws:ecs:us-east-1:012345678910:cluster/default",
 *       "createdAt": "2016-08-29T16:25:52.130Z",
 *       "deploymentConfiguration": {
 *         "maximumPercent": 200,
 *         "minimumHealthyPercent": 100
 *       },
 *       "deployments": [
 *         {
 *           "createdAt": "2016-08-29T16:25:52.130Z",
 *           "desiredCount": 1,
 *           "id": "ecs-svc/9223370564341623665",
 *           "pendingCount": 0,
 *           "runningCount": 0,
 *           "status": "PRIMARY",
 *           "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6",
 *           "updatedAt": "2016-08-29T16:25:52.130Z"
 *         }
 *       ],
 *       "desiredCount": 1,
 *       "events": [
 *         {
 *           "createdAt": "2016-08-29T16:25:58.520Z",
 *           "id": "38c285e5-d335-4b68-8b15-e46dedc8e88d",
 *           "message": "(service ecs-simple-service) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 3f4de1c5-ffdd-4954-af7e-75b4be0c8841) is already using a port required by your task. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide."
 *         }
 *       ],
 *       "loadBalancers": [],
 *       "pendingCount": 0,
 *       "runningCount": 0,
 *       "serviceArn": "arn:aws:ecs:us-east-1:012345678910:service/ecs-simple-service",
 *       "serviceName": "ecs-simple-service",
 *       "status": "ACTIVE",
 *       "taskDefinition": "arn:aws:ecs:us-east-1:012345678910:task-definition/hello_world:6"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class DescribeServicesCommand extends $Command<
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: DescribeServicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeServicesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServicesCommandOutput> {
    return deserializeAws_json1_1DescribeServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
