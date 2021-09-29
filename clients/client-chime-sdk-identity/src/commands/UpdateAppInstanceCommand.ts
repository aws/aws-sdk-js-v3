import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { UpdateAppInstanceRequest, UpdateAppInstanceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAppInstanceCommand,
  serializeAws_restJson1UpdateAppInstanceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateAppInstanceCommandInput extends UpdateAppInstanceRequest {}
export interface UpdateAppInstanceCommandOutput extends UpdateAppInstanceResponse, __MetadataBearer {}

/**
 * <p>Updates <code>AppInstance</code> metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, UpdateAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, UpdateAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new UpdateAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAppInstanceCommand extends $Command<
  UpdateAppInstanceCommandInput,
  UpdateAppInstanceCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAppInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAppInstanceCommandInput, UpdateAppInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "UpdateAppInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAppInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAppInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAppInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppInstanceCommandOutput> {
    return deserializeAws_restJson1UpdateAppInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
