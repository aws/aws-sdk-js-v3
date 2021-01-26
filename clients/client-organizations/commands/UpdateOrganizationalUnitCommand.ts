import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateOrganizationalUnitCommand,
  serializeAws_json1_1UpdateOrganizationalUnitCommand,
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

export type UpdateOrganizationalUnitCommandInput = UpdateOrganizationalUnitRequest;
export type UpdateOrganizationalUnitCommandOutput = UpdateOrganizationalUnitResponse & __MetadataBearer;

/**
 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 *             OUs and accounts remain in place, and any attached policies of the OU remain
 *             attached.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class UpdateOrganizationalUnitCommand extends $Command<
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateOrganizationalUnitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "UpdateOrganizationalUnitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOrganizationalUnitRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateOrganizationalUnitResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateOrganizationalUnitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateOrganizationalUnitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOrganizationalUnitCommandOutput> {
    return deserializeAws_json1_1UpdateOrganizationalUnitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
