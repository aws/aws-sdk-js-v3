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

import {
  ListWebsiteAuthorizationProvidersRequest,
  ListWebsiteAuthorizationProvidersRequestFilterSensitiveLog,
  ListWebsiteAuthorizationProvidersResponse,
  ListWebsiteAuthorizationProvidersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
  serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

export interface ListWebsiteAuthorizationProvidersCommandInput extends ListWebsiteAuthorizationProvidersRequest {}
export interface ListWebsiteAuthorizationProvidersCommandOutput
  extends ListWebsiteAuthorizationProvidersResponse,
    __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteAuthorizationProvidersCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListWebsiteAuthorizationProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebsiteAuthorizationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteAuthorizationProvidersCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 */
export class ListWebsiteAuthorizationProvidersCommand extends $Command<
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
  WorkLinkClientResolvedConfig
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

  constructor(readonly input: ListWebsiteAuthorizationProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWebsiteAuthorizationProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "ListWebsiteAuthorizationProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWebsiteAuthorizationProvidersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListWebsiteAuthorizationProvidersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWebsiteAuthorizationProvidersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput> {
    return deserializeAws_restJson1ListWebsiteAuthorizationProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
