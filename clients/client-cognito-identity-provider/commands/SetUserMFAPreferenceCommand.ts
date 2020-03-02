import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoIdentityProviderClient";
import {
  SetUserMFAPreferenceRequest,
  SetUserMFAPreferenceResponse
} from "../models/index";
import {
  deserializeAws_json1_1SetUserMFAPreferenceCommand,
  serializeAws_json1_1SetUserMFAPreferenceCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type SetUserMFAPreferenceCommandInput = SetUserMFAPreferenceRequest;
export type SetUserMFAPreferenceCommandOutput = SetUserMFAPreferenceResponse &
  __MetadataBearer;

export class SetUserMFAPreferenceCommand extends $Command<
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetUserMFAPreferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetUserMFAPreferenceCommandInput,
    SetUserMFAPreferenceCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetUserMFAPreferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SetUserMFAPreferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetUserMFAPreferenceCommandOutput> {
    return deserializeAws_json1_1SetUserMFAPreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
