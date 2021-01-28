import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateIAMPolicyAssignmentRequest, UpdateIAMPolicyAssignmentResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand,
  serializeAws_restJson1UpdateIAMPolicyAssignmentCommand,
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

export type UpdateIAMPolicyAssignmentCommandInput = UpdateIAMPolicyAssignmentRequest;
export type UpdateIAMPolicyAssignmentCommandOutput = UpdateIAMPolicyAssignmentResponse & __MetadataBearer;

/**
 * <p>Updates an existing IAM policy assignment. This operation updates only the optional
 * 			parameter or parameters that are specified in the request.
 * 		    This overwrites all of the users included in <code>Identities</code>.
 * 		</p>
 */
export class UpdateIAMPolicyAssignmentCommand extends $Command<
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIAMPolicyAssignmentCommandInput) {
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
  ): Handler<UpdateIAMPolicyAssignmentCommandInput, UpdateIAMPolicyAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateIAMPolicyAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIAMPolicyAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateIAMPolicyAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateIAMPolicyAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIAMPolicyAssignmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput> {
    return deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
