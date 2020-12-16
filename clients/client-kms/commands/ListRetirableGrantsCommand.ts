import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import {
  deserializeAws_json1_1ListRetirableGrantsCommand,
  serializeAws_json1_1ListRetirableGrantsCommand,
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

export type ListRetirableGrantsCommandInput = ListRetirableGrantsRequest;
export type ListRetirableGrantsCommandOutput = ListGrantsResponse & __MetadataBearer;

/**
 * <p>Returns a list of all grants for which the grant's <code>RetiringPrincipal</code> matches
 *       the one specified.</p>
 *          <p>A typical use is to list all grants that you are able to retire. To retire a grant, use
 *         <a>RetireGrant</a>.</p>
 */
export class ListRetirableGrantsCommand extends $Command<
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRetirableGrantsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListRetirableGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRetirableGrantsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGrantsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRetirableGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRetirableGrantsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRetirableGrantsCommandOutput> {
    return deserializeAws_json1_1ListRetirableGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
