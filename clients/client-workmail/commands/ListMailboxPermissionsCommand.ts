import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListMailboxPermissionsRequest, ListMailboxPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListMailboxPermissionsCommand,
  serializeAws_json1_1ListMailboxPermissionsCommand,
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

export type ListMailboxPermissionsCommandInput = ListMailboxPermissionsRequest;
export type ListMailboxPermissionsCommandOutput = ListMailboxPermissionsResponse & __MetadataBearer;

/**
 * <p>Lists the mailbox permissions associated with a user, group, or resource
 *          mailbox.</p>
 */
export class ListMailboxPermissionsCommand extends $Command<
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMailboxPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMailboxPermissionsCommandInput, ListMailboxPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMailboxPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMailboxPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMailboxPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMailboxPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMailboxPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMailboxPermissionsCommandOutput> {
    return deserializeAws_json1_1ListMailboxPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
