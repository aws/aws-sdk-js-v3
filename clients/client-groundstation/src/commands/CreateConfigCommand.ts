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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import {
  ConfigIdResponse,
  ConfigIdResponseFilterSensitiveLog,
  CreateConfigRequest,
  CreateConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateConfigCommand,
  serializeAws_restJson1CreateConfigCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConfigCommandInput extends CreateConfigRequest {}
export interface CreateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
 *          <p>Only one type of <code>configData</code> can be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigCommandInput} for command's `input` shape.
 * @see {@link CreateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 */
export class CreateConfigCommand extends $Command<
  CreateConfigCommandInput,
  CreateConfigCommandOutput,
  GroundStationClientResolvedConfig
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

  constructor(readonly input: CreateConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigCommandInput, CreateConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateConfigCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigIdResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConfigCommandOutput> {
    return deserializeAws_restJson1CreateConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
