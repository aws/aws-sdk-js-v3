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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  UpdateVoiceConnectorGroupRequest,
  UpdateVoiceConnectorGroupRequestFilterSensitiveLog,
  UpdateVoiceConnectorGroupResponse,
  UpdateVoiceConnectorGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateVoiceConnectorGroupCommand,
  serializeAws_restJson1UpdateVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateVoiceConnectorGroupCommandInput extends UpdateVoiceConnectorGroupRequest {}
export interface UpdateVoiceConnectorGroupCommandOutput extends UpdateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and
 *             Amazon Chime Voice Connector priority ranking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class UpdateVoiceConnectorGroupCommand extends $Command<
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: UpdateVoiceConnectorGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVoiceConnectorGroupCommandInput, UpdateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVoiceConnectorGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVoiceConnectorGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateVoiceConnectorGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1UpdateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
