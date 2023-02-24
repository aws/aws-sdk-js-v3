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
  GetVoiceConnectorGroupRequest,
  GetVoiceConnectorGroupRequestFilterSensitiveLog,
  GetVoiceConnectorGroupResponse,
  GetVoiceConnectorGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetVoiceConnectorGroupCommand,
  serializeAws_restJson1GetVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";

export interface GetVoiceConnectorGroupCommandInput extends GetVoiceConnectorGroupRequest {}
export interface GetVoiceConnectorGroupCommandOutput extends GetVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetVoiceConnectorGroupCommand extends $Command<
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
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

  constructor(readonly input: GetVoiceConnectorGroupCommandInput) {
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
  ): Handler<GetVoiceConnectorGroupCommandInput, GetVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVoiceConnectorGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
