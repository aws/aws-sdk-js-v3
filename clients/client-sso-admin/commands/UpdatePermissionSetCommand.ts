import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { UpdatePermissionSetRequest, UpdatePermissionSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePermissionSetCommand,
  serializeAws_json1_1UpdatePermissionSetCommand,
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

export type UpdatePermissionSetCommandInput = UpdatePermissionSetRequest;
export type UpdatePermissionSetCommandOutput = UpdatePermissionSetResponse & __MetadataBearer;

/**
 * <p>Updates an existing permission set.</p>
 */
export class UpdatePermissionSetCommand extends $Command<
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePermissionSetCommandInput) {
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
  ): Handler<UpdatePermissionSetCommandInput, UpdatePermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "UpdatePermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePermissionSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePermissionSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePermissionSetCommandOutput> {
    return deserializeAws_json1_1UpdatePermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
