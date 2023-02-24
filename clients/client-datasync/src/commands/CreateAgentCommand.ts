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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateAgentRequest,
  CreateAgentRequestFilterSensitiveLog,
  CreateAgentResponse,
  CreateAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAgentCommand,
  serializeAws_json1_1CreateAgentCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAgentCommandInput extends CreateAgentRequest {}
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * <p>Activates an DataSync agent that you have deployed in your storage
 *       environment. The activation process associates your agent with your account. In the activation
 *       process, you specify information such as the Amazon Web Services Region that you want to
 *       activate the agent in. You activate the agent in the Amazon Web Services Region where your
 *       target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p>
 *          <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to
 *       a VPC endpoint so you can run tasks without going over the public internet.</p>
 *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
 *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
 *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
 *          <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that
 *       ensures minimal interruption to your tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class CreateAgentCommand extends $Command<
  CreateAgentCommandInput,
  CreateAgentCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: CreateAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAgentCommandInput, CreateAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAgentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAgentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAgentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAgentCommandOutput> {
    return deserializeAws_json1_1CreateAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
