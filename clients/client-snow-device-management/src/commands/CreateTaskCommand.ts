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
  CreateTaskInput,
  CreateTaskInputFilterSensitiveLog,
  CreateTaskOutput,
  CreateTaskOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateTaskCommand,
  serializeAws_restJson1CreateTaskCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

export interface CreateTaskCommandInput extends CreateTaskInput {}
export interface CreateTaskCommandOutput extends CreateTaskOutput, __MetadataBearer {}

/**
 * <p>Instructs one or more devices to start a task, such as unlocking or rebooting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, CreateTaskCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, CreateTaskCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 */
export class CreateTaskCommand extends $Command<
  CreateTaskCommandInput,
  CreateTaskCommandOutput,
  SnowDeviceManagementClientResolvedConfig
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

  constructor(readonly input: CreateTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTaskCommandInput, CreateTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "CreateTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTaskInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTaskOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTaskCommandOutput> {
    return deserializeAws_restJson1CreateTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
