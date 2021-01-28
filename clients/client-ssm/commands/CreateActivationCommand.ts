import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateActivationCommand,
  serializeAws_json1_1CreateActivationCommand,
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

export type CreateActivationCommandInput = CreateActivationRequest;
export type CreateActivationCommandOutput = CreateActivationResult & __MetadataBearer;

/**
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it
 *    possible to manage them using Systems Manager capabilities. You use the activation code and ID when
 *    installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises instances and VMs using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
 *     AWS Systems Manager for hybrid environments</a> in the <i>AWS Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>On-premises servers or VMs that are registered with Systems Manager and EC2 instances that you manage
 *     with Systems Manager are all called <i>managed instances</i>.</p>
 *          </note>
 */
export class CreateActivationCommand extends $Command<
  CreateActivationCommandInput,
  CreateActivationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateActivationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActivationCommandInput, CreateActivationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateActivationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateActivationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateActivationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateActivationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateActivationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActivationCommandOutput> {
    return deserializeAws_json1_1CreateActivationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
