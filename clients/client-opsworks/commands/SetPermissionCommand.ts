import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { SetPermissionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1SetPermissionCommand,
  serializeAws_json1_1SetPermissionCommand,
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

export type SetPermissionCommandInput = SetPermissionRequest;
export type SetPermissionCommandOutput = __MetadataBearer;

/**
 * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and
 *         Permissions</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 */
export class SetPermissionCommand extends $Command<
  SetPermissionCommandInput,
  SetPermissionCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetPermissionCommandInput, SetPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "SetPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetPermissionCommandOutput> {
    return deserializeAws_json1_1SetPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
