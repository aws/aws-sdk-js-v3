import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { DeleteAppInstanceRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceCommand,
  serializeAws_restJson1DeleteAppInstanceCommand,
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

export interface DeleteAppInstanceCommandInput extends DeleteAppInstanceRequest {}
export interface DeleteAppInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an <code>AppInstance</code> and all associated data asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeleteAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeleteAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new DeleteAppInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAppInstanceCommand extends $Command<
  DeleteAppInstanceCommandInput,
  DeleteAppInstanceCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAppInstanceCommandInput) {
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
  ): Handler<DeleteAppInstanceCommandInput, DeleteAppInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "DeleteAppInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAppInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppInstanceCommandOutput> {
    return deserializeAws_restJson1DeleteAppInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
