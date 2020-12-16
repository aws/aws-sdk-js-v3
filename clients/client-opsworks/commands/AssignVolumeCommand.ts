import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignVolumeRequest } from "../models/models_0";
import {
  deserializeAws_json1_1AssignVolumeCommand,
  serializeAws_json1_1AssignVolumeCommand,
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

export type AssignVolumeCommandInput = AssignVolumeRequest;
export type AssignVolumeCommandOutput = __MetadataBearer;

/**
 * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must
 *       first be registered with the stack by calling <a>RegisterVolume</a>. After you register the
 *       volume, you must call <a>UpdateVolume</a> to specify a mount point before calling
 *         <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 */
export class AssignVolumeCommand extends $Command<
  AssignVolumeCommandInput,
  AssignVolumeCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssignVolumeCommandInput) {
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
  ): Handler<AssignVolumeCommandInput, AssignVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "AssignVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssignVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignVolumeCommandOutput> {
    return deserializeAws_json1_1AssignVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
