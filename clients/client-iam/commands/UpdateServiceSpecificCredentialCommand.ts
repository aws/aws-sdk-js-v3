import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateServiceSpecificCredentialRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdateServiceSpecificCredentialCommand,
  serializeAws_queryUpdateServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";
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

export interface UpdateServiceSpecificCredentialCommandInput extends UpdateServiceSpecificCredentialRequest {}
export interface UpdateServiceSpecificCredentialCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the status of a service-specific credential to <code>Active</code> or
 *                 <code>Inactive</code>. Service-specific credentials that are inactive cannot be used
 *             for authentication to the service. This operation can be used to disable a user's
 *             service-specific credential as part of a credential rotation work flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateServiceSpecificCredentialCommand extends $Command<
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceSpecificCredentialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceSpecificCredentialCommandInput, UpdateServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceSpecificCredentialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryUpdateServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
