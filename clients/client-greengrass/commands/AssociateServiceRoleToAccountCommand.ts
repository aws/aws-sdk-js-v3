import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateServiceRoleToAccountCommand,
  serializeAws_restJson1AssociateServiceRoleToAccountCommand,
} from "../protocols/Aws_restJson1";
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

export type AssociateServiceRoleToAccountCommandInput = AssociateServiceRoleToAccountRequest;
export type AssociateServiceRoleToAccountCommandOutput = AssociateServiceRoleToAccountResponse & __MetadataBearer;

/**
 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
 */
export class AssociateServiceRoleToAccountCommand extends $Command<
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateServiceRoleToAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "AssociateServiceRoleToAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateServiceRoleToAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateServiceRoleToAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateServiceRoleToAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateServiceRoleToAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateServiceRoleToAccountCommandOutput> {
    return deserializeAws_restJson1AssociateServiceRoleToAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
