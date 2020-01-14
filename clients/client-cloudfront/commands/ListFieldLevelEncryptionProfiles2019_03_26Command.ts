import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient";
import {
  ListFieldLevelEncryptionProfilesRequest,
  ListFieldLevelEncryptionProfilesResult
} from "../models/index";
import {
  deserializeAws_restXmlListFieldLevelEncryptionProfiles2019_03_26Command,
  serializeAws_restXmlListFieldLevelEncryptionProfiles2019_03_26Command
} from "../protocols/Aws_restXml";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListFieldLevelEncryptionProfiles2019_03_26CommandInput = ListFieldLevelEncryptionProfilesRequest;
export type ListFieldLevelEncryptionProfiles2019_03_26CommandOutput = ListFieldLevelEncryptionProfilesResult;

export class ListFieldLevelEncryptionProfiles2019_03_26Command extends $Command<
  ListFieldLevelEncryptionProfiles2019_03_26CommandInput,
  ListFieldLevelEncryptionProfiles2019_03_26CommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: ListFieldLevelEncryptionProfiles2019_03_26CommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListFieldLevelEncryptionProfiles2019_03_26CommandInput,
    ListFieldLevelEncryptionProfiles2019_03_26CommandOutput
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
    input: ListFieldLevelEncryptionProfiles2019_03_26CommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListFieldLevelEncryptionProfiles2019_03_26Command(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListFieldLevelEncryptionProfiles2019_03_26CommandOutput> {
    return deserializeAws_restXmlListFieldLevelEncryptionProfiles2019_03_26Command(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
