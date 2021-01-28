import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetServiceRoleForAccountCommand,
  serializeAws_restJson1GetServiceRoleForAccountCommand,
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

export type GetServiceRoleForAccountCommandInput = GetServiceRoleForAccountRequest;
export type GetServiceRoleForAccountCommandOutput = GetServiceRoleForAccountResponse & __MetadataBearer;

/**
 * Retrieves the service role that is attached to your account.
 */
export class GetServiceRoleForAccountCommand extends $Command<
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceRoleForAccountCommandInput) {
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
  ): Handler<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetServiceRoleForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceRoleForAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceRoleForAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceRoleForAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServiceRoleForAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceRoleForAccountCommandOutput> {
    return deserializeAws_restJson1GetServiceRoleForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
