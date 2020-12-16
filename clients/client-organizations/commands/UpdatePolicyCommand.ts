import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePolicyCommand,
  serializeAws_json1_1UpdatePolicyCommand,
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

export type UpdatePolicyCommandInput = UpdatePolicyRequest;
export type UpdatePolicyCommandOutput = UpdatePolicyResponse & __MetadataBearer;

/**
 * <p>Updates an existing policy with a new name, description, or content. If you don't
 *             supply any parameter, that value remains unchanged. You can't change a policy's
 *             type.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class UpdatePolicyCommand extends $Command<
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePolicyCommandInput) {
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
  ): Handler<UpdatePolicyCommandInput, UpdatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "UpdatePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePolicyCommandOutput> {
    return deserializeAws_json1_1UpdatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
