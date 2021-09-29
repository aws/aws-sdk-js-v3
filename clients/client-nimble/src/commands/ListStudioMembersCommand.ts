import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStudioMembersRequest, ListStudioMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListStudioMembersCommand,
  serializeAws_restJson1ListStudioMembersCommand,
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

export interface ListStudioMembersCommandInput extends ListStudioMembersRequest {}
export interface ListStudioMembersCommandOutput extends ListStudioMembersResponse, __MetadataBearer {}

/**
 * <p>Get all users in a given studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioMembersCommandInput} for command's `input` shape.
 * @see {@link ListStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStudioMembersCommand extends $Command<
  ListStudioMembersCommandInput,
  ListStudioMembersCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudioMembersCommandInput) {
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
  ): Handler<ListStudioMembersCommandInput, ListStudioMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListStudioMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudioMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudioMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudioMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStudioMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStudioMembersCommandOutput> {
    return deserializeAws_restJson1ListStudioMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
