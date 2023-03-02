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
  DescribeContainerInstancesRequest,
  DescribeContainerInstancesRequestFilterSensitiveLog,
  DescribeContainerInstancesResponse,
  DescribeContainerInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeContainerInstancesCommand,
  serializeAws_json1_1DescribeContainerInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeContainerInstancesCommand}.
 */
export interface DescribeContainerInstancesCommandInput extends DescribeContainerInstancesRequest {}
/**
 * The output of {@link DescribeContainerInstancesCommand}.
 */
export interface DescribeContainerInstancesCommandOutput extends DescribeContainerInstancesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more container instances. Returns metadata about each container
 * 			instance requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @example To describe container instance
 * ```javascript
 * // This example provides a description of the specified container instance in your default region, using the container instance UUID as an identifier.
 * const input = {
 *   "cluster": "default",
 *   "containerInstances": [
 *     "f2756532-8f13-4d53-87c9-aed50dc94cd7"
 *   ]
 * };
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "containerInstances": [
 *     {
 *       "agentConnected": true,
 *       "containerInstanceArn": "arn:aws:ecs:us-east-1:012345678910:container-instance/f2756532-8f13-4d53-87c9-aed50dc94cd7",
 *       "ec2InstanceId": "i-807f3249",
 *       "pendingTasksCount": 0,
 *       "registeredResources": [
 *         {
 *           "name": "CPU",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 2048,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "MEMORY",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 3768,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "PORTS",
 *           "type": "STRINGSET",
 *           "doubleValue": 0,
 *           "integerValue": 0,
 *           "longValue": 0,
 *           "stringSetValue": [
 *             "2376",
 *             "22",
 *             "51678",
 *             "2375"
 *           ]
 *         }
 *       ],
 *       "remainingResources": [
 *         {
 *           "name": "CPU",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 1948,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "MEMORY",
 *           "type": "INTEGER",
 *           "doubleValue": 0,
 *           "integerValue": 3668,
 *           "longValue": 0
 *         },
 *         {
 *           "name": "PORTS",
 *           "type": "STRINGSET",
 *           "doubleValue": 0,
 *           "integerValue": 0,
 *           "longValue": 0,
 *           "stringSetValue": [
 *             "2376",
 *             "22",
 *             "80",
 *             "51678",
 *             "2375"
 *           ]
 *         }
 *       ],
 *       "runningTasksCount": 1,
 *       "status": "ACTIVE"
 *     }
 *   ],
 *   "failures": []
 * }
 * *\/
 * ```
 *
 */
export class DescribeContainerInstancesCommand extends $Command<
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
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

  constructor(readonly input: DescribeContainerInstancesCommandInput) {
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
  ): Handler<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContainerInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeContainerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContainerInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeContainerInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContainerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeContainerInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContainerInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeContainerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
