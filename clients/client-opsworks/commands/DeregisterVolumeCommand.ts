import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterVolumeRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterVolumeCommand,
  serializeAws_json1_1DeregisterVolumeCommand,
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

export type DeregisterVolumeCommandInput = DeregisterVolumeRequest;
export type DeregisterVolumeCommandOutput = __MetadataBearer;

/**
 * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource
 *         Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 */
export class DeregisterVolumeCommand extends $Command<
  DeregisterVolumeCommandInput,
  DeregisterVolumeCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterVolumeCommandInput) {
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
  ): Handler<DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DeregisterVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterVolumeCommandOutput> {
    return deserializeAws_json1_1DeregisterVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
