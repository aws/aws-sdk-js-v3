import { SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOClient";
import { GetRoleCredentialsRequest, GetRoleCredentialsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRoleCredentialsCommand,
  serializeAws_restJson1GetRoleCredentialsCommand,
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

export type GetRoleCredentialsCommandInput = GetRoleCredentialsRequest;
export type GetRoleCredentialsCommandOutput = GetRoleCredentialsResponse & __MetadataBearer;

/**
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 */
export class GetRoleCredentialsCommand extends $Command<
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
  SSOClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRoleCredentialsCommandInput) {
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
  ): Handler<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "GetRoleCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoleCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoleCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRoleCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRoleCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoleCredentialsCommandOutput> {
    return deserializeAws_restJson1GetRoleCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
