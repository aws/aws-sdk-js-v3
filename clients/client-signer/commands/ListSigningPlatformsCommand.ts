import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { ListSigningPlatformsRequest, ListSigningPlatformsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSigningPlatformsCommand,
  serializeAws_restJson1ListSigningPlatformsCommand,
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

export type ListSigningPlatformsCommandInput = ListSigningPlatformsRequest;
export type ListSigningPlatformsCommandOutput = ListSigningPlatformsResponse & __MetadataBearer;

/**
 * <p>Lists all signing platforms available in code signing that match the request parameters. If
 * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
 * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
 * 			values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that code signing returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
 */
export class ListSigningPlatformsCommand extends $Command<
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSigningPlatformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningPlatformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSigningPlatformsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSigningPlatformsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSigningPlatformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSigningPlatformsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningPlatformsCommandOutput> {
    return deserializeAws_restJson1ListSigningPlatformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
