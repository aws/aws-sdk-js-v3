import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetPrincipalTagAttributeMapInput, GetPrincipalTagAttributeMapResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetPrincipalTagAttributeMapCommand,
  serializeAws_json1_1GetPrincipalTagAttributeMapCommand,
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

export type GetPrincipalTagAttributeMapCommandInput = GetPrincipalTagAttributeMapInput;
export type GetPrincipalTagAttributeMapCommandOutput = GetPrincipalTagAttributeMapResponse & __MetadataBearer;

/**
 * <p>Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.</p>
 */
export class GetPrincipalTagAttributeMapCommand extends $Command<
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPrincipalTagAttributeMapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPrincipalTagAttributeMapCommandInput, GetPrincipalTagAttributeMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetPrincipalTagAttributeMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPrincipalTagAttributeMapInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPrincipalTagAttributeMapResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPrincipalTagAttributeMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPrincipalTagAttributeMapCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPrincipalTagAttributeMapCommandOutput> {
    return deserializeAws_json1_1GetPrincipalTagAttributeMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
