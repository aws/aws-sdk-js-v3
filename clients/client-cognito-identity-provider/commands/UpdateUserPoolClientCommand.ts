import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { UpdateUserPoolClientRequest, UpdateUserPoolClientResponse } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateUserPoolClientCommand,
  serializeAws_json1_1UpdateUserPoolClientCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type UpdateUserPoolClientCommandInput = UpdateUserPoolClientRequest;
export type UpdateUserPoolClientCommandOutput = UpdateUserPoolClientResponse & __MetadataBearer;

/**
 * <p>Updates the specified user pool app client with the specified attributes. You can get
 *             a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it will be set to the default
 *                 value.</p>
 *         </important>
 */
export class UpdateUserPoolClientCommand extends $Command<
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserPoolClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserPoolClientCommandInput, UpdateUserPoolClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateUserPoolClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserPoolClientRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserPoolClientResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserPoolClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserPoolClientCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserPoolClientCommandOutput> {
    return deserializeAws_json1_1UpdateUserPoolClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
