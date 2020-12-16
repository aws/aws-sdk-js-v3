import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeregisterEcsClusterRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterEcsClusterCommand,
  serializeAws_json1_1DeregisterEcsClusterCommand,
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

export type DeregisterEcsClusterCommandInput = DeregisterEcsClusterRequest;
export type DeregisterEcsClusterCommandOutput = __MetadataBearer;

/**
 * <p>Deregisters a specified Amazon ECS cluster from a stack.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete">
 *         Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
 */
export class DeregisterEcsClusterCommand extends $Command<
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterEcsClusterCommandInput) {
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
  ): Handler<DeregisterEcsClusterCommandInput, DeregisterEcsClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DeregisterEcsClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterEcsClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterEcsClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterEcsClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterEcsClusterCommandOutput> {
    return deserializeAws_json1_1DeregisterEcsClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
