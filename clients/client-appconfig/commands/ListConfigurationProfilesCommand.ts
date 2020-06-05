import {
  AppConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppConfigClient";
import {
  ConfigurationProfiles,
  ListConfigurationProfilesRequest
} from "../models/index";
import {
  deserializeAws_restJson1ListConfigurationProfilesCommand,
  serializeAws_restJson1ListConfigurationProfilesCommand
} from "../protocols/Aws_restJson1";
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

export type ListConfigurationProfilesCommandInput = ListConfigurationProfilesRequest;
export type ListConfigurationProfilesCommandOutput = ConfigurationProfiles &
  __MetadataBearer;

export class ListConfigurationProfilesCommand extends $Command<
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConfigurationProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListConfigurationProfilesCommandInput,
    ListConfigurationProfilesCommandOutput
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
    input: ListConfigurationProfilesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConfigurationProfilesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationProfilesCommandOutput> {
    return deserializeAws_restJson1ListConfigurationProfilesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
