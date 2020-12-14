import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIAMPolicyAssignmentsForUserRequest, ListIAMPolicyAssignmentsForUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand,
  serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand,
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

export type ListIAMPolicyAssignmentsForUserCommandInput = ListIAMPolicyAssignmentsForUserRequest;
export type ListIAMPolicyAssignmentsForUserCommandOutput = ListIAMPolicyAssignmentsForUserResponse & __MetadataBearer;

/**
 * <p>Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM
 * 			policies assigned to the specified user and group or groups that the user belongs
 * 			to.</p>
 */
export class ListIAMPolicyAssignmentsForUserCommand extends $Command<
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIAMPolicyAssignmentsForUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIAMPolicyAssignmentsForUserCommandInput, ListIAMPolicyAssignmentsForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListIAMPolicyAssignmentsForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIAMPolicyAssignmentsForUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListIAMPolicyAssignmentsForUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
