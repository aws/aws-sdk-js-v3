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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListRoutingProfilesRequest,
  ListRoutingProfilesRequestFilterSensitiveLog,
  ListRoutingProfilesResponse,
  ListRoutingProfilesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListRoutingProfilesCommand,
  serializeAws_restJson1ListRoutingProfilesCommand,
} from "../protocols/Aws_restJson1";

export interface ListRoutingProfilesCommandInput extends ListRoutingProfilesRequest {}
export interface ListRoutingProfilesCommandOutput extends ListRoutingProfilesResponse, __MetadataBearer {}

/**
 * <p>Provides summary information about the routing profiles for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
 *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListRoutingProfilesCommand extends $Command<
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
  ConnectClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRoutingProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListRoutingProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoutingProfilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRoutingProfilesResponseFilterSensitiveLog,
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
