import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInlinePolicyFromPermissionSetResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand,
  serializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteInlinePolicyFromPermissionSetCommandInput = DeleteInlinePolicyFromPermissionSetRequest;
export type DeleteInlinePolicyFromPermissionSetCommandOutput = DeleteInlinePolicyFromPermissionSetResponse &
  __MetadataBearer;

/**
 * <p>Deletes the inline policy from a specified permission set.</p>
 */
export class DeleteInlinePolicyFromPermissionSetCommand extends $Command<
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInlinePolicyFromPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInlinePolicyFromPermissionSetCommandInput, DeleteInlinePolicyFromPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeleteInlinePolicyFromPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInlinePolicyFromPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInlinePolicyFromPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteInlinePolicyFromPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> {
    return deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
