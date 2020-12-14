import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand,
  serializeAws_json1_1ListAccountAssignmentCreationStatusCommand,
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

export type ListAccountAssignmentCreationStatusCommandInput = ListAccountAssignmentCreationStatusRequest;
export type ListAccountAssignmentCreationStatusCommandOutput = ListAccountAssignmentCreationStatusResponse &
  __MetadataBearer;

/**
 * <p>Lists the status of the AWS account assignment creation requests for a specified SSO
 *        instance.</p>
 */
export class ListAccountAssignmentCreationStatusCommand extends $Command<
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAssignmentCreationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAssignmentCreationStatusCommandInput, ListAccountAssignmentCreationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListAccountAssignmentCreationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssignmentCreationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssignmentCreationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAccountAssignmentCreationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountAssignmentCreationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccountAssignmentCreationStatusCommandOutput> {
    return deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
