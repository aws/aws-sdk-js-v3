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
  DeleteServiceSpecificCredentialRequest,
  DeleteServiceSpecificCredentialRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteServiceSpecificCredentialCommand,
  serializeAws_queryDeleteServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";

export interface DeleteServiceSpecificCredentialCommandInput extends DeleteServiceSpecificCredentialRequest {}
export interface DeleteServiceSpecificCredentialCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified service-specific credential.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DeleteServiceSpecificCredentialCommand extends $Command<
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
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

  constructor(readonly input: DeleteServiceSpecificCredentialCommandInput) {
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
  ): Handler<DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteServiceSpecificCredentialCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServiceSpecificCredentialRequestFilterSensitiveLog,
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
    input: DeleteServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryDeleteServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
