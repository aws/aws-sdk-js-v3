// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import {
  ListOutgoingTypedLinksRequest,
  ListOutgoingTypedLinksRequestFilterSensitiveLog,
  ListOutgoingTypedLinksResponse,
  ListOutgoingTypedLinksResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListOutgoingTypedLinksCommand,
  serializeAws_restJson1ListOutgoingTypedLinksCommand,
} from "../protocols/Aws_restJson1";

export interface ListOutgoingTypedLinksCommandInput extends ListOutgoingTypedLinksRequest {}
export interface ListOutgoingTypedLinksCommandOutput extends ListOutgoingTypedLinksResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListOutgoingTypedLinksCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListOutgoingTypedLinksCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListOutgoingTypedLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutgoingTypedLinksCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingTypedLinksCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 */
export class ListOutgoingTypedLinksCommand extends $Command<
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListOutgoingTypedLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOutgoingTypedLinksCommandInput, ListOutgoingTypedLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOutgoingTypedLinksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListOutgoingTypedLinksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOutgoingTypedLinksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOutgoingTypedLinksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOutgoingTypedLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOutgoingTypedLinksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutgoingTypedLinksCommandOutput> {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
