import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutMailboxPermissionsCommand,
  serializeAws_json1_1PutMailboxPermissionsCommand,
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

export type PutMailboxPermissionsCommandInput = PutMailboxPermissionsRequest;
export type PutMailboxPermissionsCommandOutput = PutMailboxPermissionsResponse & __MetadataBearer;

/**
 * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
 *          permissions.</p>
 */
export class PutMailboxPermissionsCommand extends $Command<
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMailboxPermissionsCommandInput) {
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
  ): Handler<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutMailboxPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMailboxPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutMailboxPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMailboxPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutMailboxPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMailboxPermissionsCommandOutput> {
    return deserializeAws_json1_1PutMailboxPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
