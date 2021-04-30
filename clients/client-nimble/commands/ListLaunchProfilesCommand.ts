import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListLaunchProfilesRequest, ListLaunchProfilesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListLaunchProfilesCommand,
  serializeAws_restJson1ListLaunchProfilesCommand,
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

export interface ListLaunchProfilesCommandInput extends ListLaunchProfilesRequest {}
export interface ListLaunchProfilesCommandOutput extends ListLaunchProfilesResponse, __MetadataBearer {}

/**
 * <p>List all the launch profiles a studio.</p>
 */
export class ListLaunchProfilesCommand extends $Command<
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLaunchProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListLaunchProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLaunchProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLaunchProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLaunchProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLaunchProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchProfilesCommandOutput> {
    return deserializeAws_restJson1ListLaunchProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
