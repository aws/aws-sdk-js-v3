import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListLaunchProfileMembersRequest, ListLaunchProfileMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListLaunchProfileMembersCommand,
  serializeAws_restJson1ListLaunchProfileMembersCommand,
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

export interface ListLaunchProfileMembersCommandInput extends ListLaunchProfileMembersRequest {}
export interface ListLaunchProfileMembersCommandOutput extends ListLaunchProfileMembersResponse, __MetadataBearer {}

/**
 * <p>Get all users in a given launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLaunchProfileMembersCommand extends $Command<
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLaunchProfileMembersCommandInput) {
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
  ): Handler<ListLaunchProfileMembersCommandInput, ListLaunchProfileMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListLaunchProfileMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLaunchProfileMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLaunchProfileMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLaunchProfileMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLaunchProfileMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchProfileMembersCommandOutput> {
    return deserializeAws_restJson1ListLaunchProfileMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
