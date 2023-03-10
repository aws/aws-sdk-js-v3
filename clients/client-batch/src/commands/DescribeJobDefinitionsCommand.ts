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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  DescribeJobDefinitionsRequest,
  DescribeJobDefinitionsRequestFilterSensitiveLog,
  DescribeJobDefinitionsResponse,
  DescribeJobDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobDefinitionsCommand,
  serializeAws_restJson1DescribeJobDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DescribeJobDefinitionsCommand}.
 */
export interface DescribeJobDefinitionsCommandInput extends DescribeJobDefinitionsRequest {}
/**
 * The output of {@link DescribeJobDefinitionsCommand}.
 */
export interface DescribeJobDefinitionsCommandOutput extends DescribeJobDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only
 *    return job definitions that match that status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobDefinitionsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobDefinitionsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 * @example To describe active job definitions
 * ```javascript
 * // This example describes all of your active job definitions.
 * const input = {
 *   "status": "ACTIVE"
 * };
 * const command = new DescribeJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitions": [
 *     {
 *       "type": "container",
 *       "containerProperties": {
 *         "command": [
 *           "sleep",
 *           "60"
 *         ],
 *         "environment": [],
 *         "image": "busybox",
 *         "mountPoints": [],
 *         "resourceRequirements": [
 *           {
 *             "type": "MEMORY",
 *             "value": "128"
 *           },
 *           {
 *             "type": "VCPU",
 *             "value": "1"
 *           }
 *         ],
 *         "ulimits": [],
 *         "volumes": []
 *       },
 *       "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep60:1",
 *       "jobDefinitionName": "sleep60",
 *       "revision": 1,
 *       "status": "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-active-job-definitions-1481153895831
 * ```
 *
 */
export class DescribeJobDefinitionsCommand extends $Command<
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: DescribeJobDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobDefinitionsCommandInput, DescribeJobDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeJobDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobDefinitionsCommandOutput> {
    return deserializeAws_restJson1DescribeJobDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
