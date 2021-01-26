import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTokenCommand,
  serializeAws_json1_1CreateTokenCommand,
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

export type CreateTokenCommandInput = CreateTokenRequest;
export type CreateTokenCommandOutput = CreateTokenResponse & __MetadataBearer;

/**
 * <p>Creates a long-lived token.</p>
 *          <p>A refresh token is a JWT token used to get an access token. With an access token,
 *           you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
 *           call License Manager to manage the specified license.</p>
 */
export class CreateTokenCommand extends $Command<
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTokenCommandInput, CreateTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTokenCommandOutput> {
    return deserializeAws_json1_1CreateTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
