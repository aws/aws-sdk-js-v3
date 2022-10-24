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
  CreateTestGridProjectRequest,
  CreateTestGridProjectRequestFilterSensitiveLog,
  CreateTestGridProjectResult,
  CreateTestGridProjectResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateTestGridProjectCommand,
  serializeAws_json1_1CreateTestGridProjectCommand,
} from "../protocols/Aws_json1_1";

export interface CreateTestGridProjectCommandInput extends CreateTestGridProjectRequest {}
export interface CreateTestGridProjectCommandOutput extends CreateTestGridProjectResult, __MetadataBearer {}

/**
 * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
 *          instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class CreateTestGridProjectCommand extends $Command<
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
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

  constructor(readonly input: CreateTestGridProjectCommandInput) {
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
  ): Handler<CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTestGridProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateTestGridProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTestGridProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTestGridProjectResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTestGridProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTestGridProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTestGridProjectCommandOutput> {
    return deserializeAws_json1_1CreateTestGridProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
