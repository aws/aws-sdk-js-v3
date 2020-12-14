import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIAMPolicyAssignmentsRequest, ListIAMPolicyAssignmentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIAMPolicyAssignmentsCommand,
  serializeAws_restJson1ListIAMPolicyAssignmentsCommand,
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

export type ListIAMPolicyAssignmentsCommandInput = ListIAMPolicyAssignmentsRequest;
export type ListIAMPolicyAssignmentsCommandOutput = ListIAMPolicyAssignmentsResponse & __MetadataBearer;

/**
 * <p>Lists IAM policy assignments in the current Amazon QuickSight account.</p>
 */
export class ListIAMPolicyAssignmentsCommand extends $Command<
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIAMPolicyAssignmentsCommandInput) {
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
  ): Handler<ListIAMPolicyAssignmentsCommandInput, ListIAMPolicyAssignmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListIAMPolicyAssignmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIAMPolicyAssignmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIAMPolicyAssignmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIAMPolicyAssignmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIAMPolicyAssignmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIAMPolicyAssignmentsCommandOutput> {
    return deserializeAws_restJson1ListIAMPolicyAssignmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
