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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  UpdateServiceSpecificCredentialRequest,
  UpdateServiceSpecificCredentialRequestFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryUpdateServiceSpecificCredentialCommand,
  serializeAws_queryUpdateServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";

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
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UpdateServiceSpecificCredentialCommand extends $Command<
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceSpecificCredentialCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceSpecificCredentialRequestFilterSensitiveLog,
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
