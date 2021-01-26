import { SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOClient";
import { ListAccountRolesRequest, ListAccountRolesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAccountRolesCommand,
  serializeAws_restJson1ListAccountRolesCommand,
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

export type ListAccountRolesCommandInput = ListAccountRolesRequest;
export type ListAccountRolesCommandOutput = ListAccountRolesResponse & __MetadataBearer;

/**
 * <p>Lists all roles that are assigned to the user for a given AWS account.</p>
 */
export class ListAccountRolesCommand extends $Command<
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
  SSOClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountRolesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountRolesCommandInput, ListAccountRolesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "ListAccountRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountRolesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountRolesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountRolesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccountRolesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountRolesCommandOutput> {
    return deserializeAws_restJson1ListAccountRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
