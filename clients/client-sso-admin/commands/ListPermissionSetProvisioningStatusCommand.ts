import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand,
  serializeAws_json1_1ListPermissionSetProvisioningStatusCommand,
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

export type ListPermissionSetProvisioningStatusCommandInput = ListPermissionSetProvisioningStatusRequest;
export type ListPermissionSetProvisioningStatusCommandOutput = ListPermissionSetProvisioningStatusResponse &
  __MetadataBearer;

/**
 * <p>Lists the status of the permission set provisioning requests for a specified SSO
 *       instance.</p>
 */
export class ListPermissionSetProvisioningStatusCommand extends $Command<
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPermissionSetProvisioningStatusCommandInput) {
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
  ): Handler<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListPermissionSetProvisioningStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPermissionSetProvisioningStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPermissionSetProvisioningStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPermissionSetProvisioningStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPermissionSetProvisioningStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput> {
    return deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
