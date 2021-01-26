import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { AssignInstanceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1AssignInstanceCommand,
  serializeAws_json1_1AssignInstanceCommand,
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

export type AssignInstanceCommandInput = AssignInstanceRequest;
export type AssignInstanceCommandOutput = __MetadataBearer;

/**
 * <p>Assign a registered instance to a layer.</p>
 *          <ul>
 *             <li>
 *                <p>You can assign registered on-premises instances to any layer type.</p>
 *             </li>
 *             <li>
 *                <p>You can assign registered Amazon EC2 instances only to custom layers.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management
 *       (IAM) user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 */
export class AssignInstanceCommand extends $Command<
  AssignInstanceCommandInput,
  AssignInstanceCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssignInstanceCommandInput) {
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
  ): Handler<AssignInstanceCommandInput, AssignInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "AssignInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssignInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignInstanceCommandOutput> {
    return deserializeAws_json1_1AssignInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
