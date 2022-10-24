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
  UpdateTaskSetRequest,
  UpdateTaskSetRequestFilterSensitiveLog,
  UpdateTaskSetResponse,
  UpdateTaskSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTaskSetCommand,
  serializeAws_json1_1UpdateTaskSetCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateTaskSetCommandInput extends UpdateTaskSetRequest {}
export interface UpdateTaskSetCommandOutput extends UpdateTaskSetResponse, __MetadataBearer {}

/**
 * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code>
 * 			deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class UpdateTaskSetCommand extends $Command<
  UpdateTaskSetCommandInput,
  UpdateTaskSetCommandOutput,
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

  constructor(readonly input: UpdateTaskSetCommandInput) {
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
  ): Handler<UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTaskSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateTaskSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTaskSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTaskSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTaskSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTaskSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskSetCommandOutput> {
    return deserializeAws_json1_1UpdateTaskSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
