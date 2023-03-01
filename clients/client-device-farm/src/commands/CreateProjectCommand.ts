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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  CreateProjectRequest,
  CreateProjectRequestFilterSensitiveLog,
  CreateProjectResult,
  CreateProjectResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateProjectCommand,
  serializeAws_json1_1CreateProjectCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandInput extends CreateProjectRequest {}
/**
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectResult, __MetadataBearer {}

/**
 * <p>Creates a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 *
 * @example To create a new project
 * ```javascript
 * // The following example creates a new project named MyProject.
 * const input = {
 *   "name": "MyProject"
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "project": {
 *     "name": "MyProject",
 *     "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:5e01a8c7-c861-4c0a-b1d5-12345EXAMPLE",
 *     "created": "1472660939.152"
 *   }
 * }
 * *\/
 * ```
 *
 */
export class CreateProjectCommand extends $Command<
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: CreateProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProjectCommandInput, CreateProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProjectResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectCommandOutput> {
    return deserializeAws_json1_1CreateProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
