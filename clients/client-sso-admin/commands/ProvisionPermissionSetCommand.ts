import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ProvisionPermissionSetRequest, ProvisionPermissionSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ProvisionPermissionSetCommand,
  serializeAws_json1_1ProvisionPermissionSetCommand,
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

export type ProvisionPermissionSetCommandInput = ProvisionPermissionSetRequest;
export type ProvisionPermissionSetCommandOutput = ProvisionPermissionSetResponse & __MetadataBearer;

/**
 * <p>The process by which a specified permission set is provisioned to the specified target.</p>
 */
export class ProvisionPermissionSetCommand extends $Command<
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ProvisionPermissionSetCommandInput) {
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
  ): Handler<ProvisionPermissionSetCommandInput, ProvisionPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ProvisionPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProvisionPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionPermissionSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ProvisionPermissionSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionPermissionSetCommandOutput> {
    return deserializeAws_json1_1ProvisionPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
