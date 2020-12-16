import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAssociationCommand,
  serializeAws_json1_1CreateAssociationCommand,
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

export type CreateAssociationCommandInput = CreateAssociationRequest;
export type CreateAssociationCommandOutput = CreateAssociationResult & __MetadataBearer;

/**
 * <p>A State Manager association defines the state that you want to maintain on your instances.
 *    For example, an association can specify that anti-virus software must be installed and running on
 *    your instances, or that certain ports must be closed. For static targets, the association
 *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS
 *    Resource Group or an AWS Autoscaling Group, State Manager applies the configuration when new
 *    instances are added to the group. The association also specifies actions to take when applying
 *    the configuration. For example, an association for anti-virus software might run once a day. If
 *    the software is not installed, then State Manager installs it. If the software is installed, but
 *    the service is not running, then the association might instruct State Manager to start the
 *    service. </p>
 */
export class CreateAssociationCommand extends $Command<
  CreateAssociationCommandInput,
  CreateAssociationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssociationCommandInput) {
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
  ): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssociationCommandOutput> {
    return deserializeAws_json1_1CreateAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
