import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateIAMPolicyAssignmentRequest, CreateIAMPolicyAssignmentResponse } from "../models/index";
import {
  deserializeAws_restJson1CreateIAMPolicyAssignmentCommand,
  serializeAws_restJson1CreateIAMPolicyAssignmentCommand,
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

export type CreateIAMPolicyAssignmentCommandInput = CreateIAMPolicyAssignmentRequest;
export type CreateIAMPolicyAssignmentCommandOutput = CreateIAMPolicyAssignmentResponse & __MetadataBearer;

export class CreateIAMPolicyAssignmentCommand extends $Command<
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIAMPolicyAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIAMPolicyAssignmentCommandInput, CreateIAMPolicyAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIAMPolicyAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIAMPolicyAssignmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIAMPolicyAssignmentCommandOutput> {
    return deserializeAws_restJson1CreateIAMPolicyAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
