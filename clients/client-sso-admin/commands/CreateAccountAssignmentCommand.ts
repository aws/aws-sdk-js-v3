import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { CreateAccountAssignmentRequest, CreateAccountAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAccountAssignmentCommand,
  serializeAws_json1_1CreateAccountAssignmentCommand,
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

export type CreateAccountAssignmentCommandInput = CreateAccountAssignmentRequest;
export type CreateAccountAssignmentCommandOutput = CreateAccountAssignmentResponse & __MetadataBearer;

/**
 * <p>Assigns access to a principal for a specified AWS account using a specified permission
 *       set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p>
 *          </note>
 *          <note>
 *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> to make these updates.</p>
 *          </note>
 */
export class CreateAccountAssignmentCommand extends $Command<
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccountAssignmentCommandInput) {
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
  ): Handler<CreateAccountAssignmentCommandInput, CreateAccountAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "CreateAccountAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAccountAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAssignmentCommandOutput> {
    return deserializeAws_json1_1CreateAccountAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
