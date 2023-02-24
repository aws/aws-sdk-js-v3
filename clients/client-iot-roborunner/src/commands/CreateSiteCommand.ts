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

import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import {
  CreateSiteRequest,
  CreateSiteRequestFilterSensitiveLog,
  CreateSiteResponse,
  CreateSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSiteCommand,
  serializeAws_restJson1CreateSiteCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSiteCommandInput extends CreateSiteRequest {}
export interface CreateSiteCommandOutput extends CreateSiteResponse, __MetadataBearer {}

/**
 * Grants permission to create a site
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateSiteCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateSiteCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const command = new CreateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSiteCommandInput} for command's `input` shape.
 * @see {@link CreateSiteCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 */
export class CreateSiteCommand extends $Command<
  CreateSiteCommandInput,
  CreateSiteCommandOutput,
  IoTRoboRunnerClientResolvedConfig
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

  constructor(readonly input: CreateSiteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTRoboRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSiteCommandInput, CreateSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSiteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTRoboRunnerClient";
    const commandName = "CreateSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSiteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSiteResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSiteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSiteCommandOutput> {
    return deserializeAws_restJson1CreateSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
