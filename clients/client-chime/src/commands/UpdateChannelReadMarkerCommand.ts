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
  UpdateChannelReadMarkerRequest,
  UpdateChannelReadMarkerRequestFilterSensitiveLog,
  UpdateChannelReadMarkerResponse,
  UpdateChannelReadMarkerResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateChannelReadMarkerCommand,
  serializeAws_restJson1UpdateChannelReadMarkerCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateChannelReadMarkerCommandInput extends UpdateChannelReadMarkerRequest {}
export interface UpdateChannelReadMarkerCommandOutput extends UpdateChannelReadMarkerResponse, __MetadataBearer {}

/**
 * <p>The details of the time when a user last read messages in a channel.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateChannelReadMarkerCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateChannelReadMarkerCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateChannelReadMarkerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelReadMarkerCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelReadMarkerCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class UpdateChannelReadMarkerCommand extends $Command<
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
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

  constructor(readonly input: UpdateChannelReadMarkerCommandInput) {
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
  ): Handler<UpdateChannelReadMarkerCommandInput, UpdateChannelReadMarkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateChannelReadMarkerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateChannelReadMarkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChannelReadMarkerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateChannelReadMarkerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateChannelReadMarkerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateChannelReadMarkerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChannelReadMarkerCommandOutput> {
    return deserializeAws_restJson1UpdateChannelReadMarkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
