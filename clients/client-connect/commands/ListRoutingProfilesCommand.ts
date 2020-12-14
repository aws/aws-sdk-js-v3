import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListRoutingProfilesRequest, ListRoutingProfilesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRoutingProfilesCommand,
  serializeAws_restJson1ListRoutingProfilesCommand,
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

export type ListRoutingProfilesCommandInput = ListRoutingProfilesRequest;
export type ListRoutingProfilesCommandOutput = ListRoutingProfilesResponse & __MetadataBearer;

/**
 * <p>Provides summary information about the routing profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
 *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ListRoutingProfilesCommand extends $Command<
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRoutingProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListRoutingProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoutingProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoutingProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoutingProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRoutingProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoutingProfilesCommandOutput> {
    return deserializeAws_restJson1ListRoutingProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
